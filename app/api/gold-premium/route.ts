import { NextResponse } from 'next/server'

const DATA_GO_KR_API_KEY =
  process.env.DATA_GO_KR_API_KEY ||
  process.env.FSC_API_KEY ||
  '76a2ae35ca325cdf8cb9f1503bc124362a17e0a92cfee79a4d577ca87b71f098'

// 금융위원회 일반상품시세정보 API
const KRX_API_BASE = 'https://apis.data.go.kr/1160100/service/GetGeneralProductInfoService'

// 1 돈(don) = 3.75 그램
const DON_TO_GRAM = 3.75
// 1 troy ounce = 31.1035 grams
const TROY_OUNCE_TO_GRAM = 31.1035

// API 응답 아이템 인터페이스
interface GoldPriceItem {
  basDt: string // 기준일자 (YYYYMMDD)
  srtnCd: string // 단축코드
  itmsNm: string // 종목명 (예: 금 99.99_1Kg)
  clpr: string // 종가
  vs: string // 전일 대비
  fltRt: string // 등락률
  mkp: string // 시가
  hipr: string // 고가
  lopr: string // 저가
  trqu: string // 거래량
  trPrc: string // 거래대금
}

// API 응답 헤더/바디 구조
interface GoldPriceResponse {
  response: {
    header: {
      resultCode: string // "00"이면 정상
      resultMsg: string // "NORMAL SERVICE"
    }
    body: {
      numOfRows: number
      pageNo: number
      totalCount: number
      items: {
        item: GoldPriceItem[] // 배열 형태
      }
    }
  }
}

interface GoldPremiumData {
  krxPrice: number // 1돈 기준
  internationalPrice: number // 1돈 기준
  premium: number
  premiumPercent: number

  // 1g 기준 데이터 추가
  krxPricePerGram: number
  internationalPricePerGram: number

  exchangeRate: number
  lastUpdated: string
}

interface FetchGoldPriceParams {
  numOfRows?: number
  pageNo?: number
  basDt?: string
  beginBasDt?: string
  endBasDt?: string
  itmsNm?: string
}

async function fetchGoldPrice(params: FetchGoldPriceParams = {}): Promise<GoldPriceResponse> {
  const serviceKey = DATA_GO_KR_API_KEY

  const queryParams = new URLSearchParams({
    serviceKey: serviceKey,
    numOfRows: (params.numOfRows || 10).toString(),
    pageNo: (params.pageNo || 1).toString(),
    resultType: 'json',
  })

  // 선택 파라미터 추가
  if (params.basDt) queryParams.append('basDt', params.basDt)
  if (params.beginBasDt) queryParams.append('beginBasDt', params.beginBasDt)
  if (params.endBasDt) queryParams.append('endBasDt', params.endBasDt)
  if (params.itmsNm) queryParams.append('itmsNm', params.itmsNm)

  const url = `${KRX_API_BASE}/getGoldPriceInfo?${queryParams.toString()}`

  const response = await fetch(url, {
    next: { revalidate: 300 }, // 5분 캐시
  })

  if (!response.ok) {
    throw new Error(`API Network Error: ${response.status}`)
  }

  const data: GoldPriceResponse = await response.json()

  if (data.response.header.resultCode !== '00') {
    throw new Error(
      `API Error: ${data.response.header.resultCode} - ${data.response.header.resultMsg}`
    )
  }

  return data
}

async function getKRXGoldPrice(): Promise<{ pricePerDon: number; pricePerGram: number } | null> {
  try {
    const data = await fetchGoldPrice({
      numOfRows: 10,
      pageNo: 1,
    })

    const items = data.response?.body?.items?.item
    if (!items || items.length === 0) {
      console.error('KRX 금 시세 데이터 없음')
      return null
    }

    const goldItem = items.find((item) => item.itmsNm.includes('1Kg')) || items[0]

    // KRX 종가는 1g 단위 (KRW)
    const pricePerGram = parseFloat(goldItem.clpr)

    // 1돈 (3.75g) 가격으로 변환
    const pricePerDon = pricePerGram * DON_TO_GRAM

    return pricePerGram > 0 ? { pricePerDon, pricePerGram } : null
  } catch (error) {
    console.error('KRX 금 시세 조회 오류:', error)
    return null
  }
}

async function getExchangeRate(): Promise<number> {
  try {
    // Frankfurter API (Free, Open)
    const response = await fetch('https://api.frankfurter.app/latest?from=USD&to=KRW', {
      next: { revalidate: 300 },
    })

    if (!response.ok) {
      console.error('환율 API 오류:', response.status)
      return 1450 // Fallback
    }

    const data = await response.json()
    return data.rates.KRW
  } catch (error) {
    console.error('환율 조회 오류:', error)
    return 1450 // Fallback
  }
}

async function getInternationalGoldPrice(): Promise<{
  pricePerDon: number
  pricePerGram: number
  exchangeRate: number
} | null> {
  try {
    // GoldPrice.org Data (Free, Unofficial but reliable for spot calc)
    // Returns XAU Price in USD per Troy Ounce
    const [goldResponse, exchangeRate] = await Promise.all([
      fetch('https://data-asg.goldprice.org/dbXRates/USD', {
        next: { revalidate: 300 },
      }),
      getExchangeRate(),
    ])

    if (!goldResponse.ok) {
      console.error('Gold API 오류:', goldResponse.status)
      return { pricePerDon: 900000, pricePerGram: 240000, exchangeRate } // Demo Data
    }

    const goldData = await goldResponse.json()
    // data structure: { items: [ { curr: 'USD', xauPrice: 2650.50, ... } ] }
    const pricePerOunceUSD = goldData.items && goldData.items[0] ? goldData.items[0].xauPrice : null

    if (!pricePerOunceUSD) {
      console.error('금 시세 데이터 없음')
      return { pricePerDon: 900000, pricePerGram: 240000, exchangeRate }
    }

    // USD per troy ounce -> KRW per don 변환
    const pricePerGramUSD = pricePerOunceUSD / TROY_OUNCE_TO_GRAM
    const pricePerDonUSD = pricePerGramUSD * DON_TO_GRAM

    // Convert to KRW
    const pricePerGramKRW = pricePerGramUSD * exchangeRate
    const pricePerDonKRW = pricePerDonUSD * exchangeRate

    return {
      pricePerDon: Math.round(pricePerDonKRW),
      pricePerGram: Math.round(pricePerGramKRW),
      exchangeRate,
    }
  } catch (error) {
    console.error('국제 금 시세 조회 오류:', error)
    const exchangeRate = await getExchangeRate()
    return { pricePerDon: 900000, pricePerGram: 240000, exchangeRate } // Demo Data
  }
}

export async function GET() {
  try {
    const [krxData, internationalData] = await Promise.all([
      getKRXGoldPrice(),
      getInternationalGoldPrice(),
    ])

    if (!krxData || !internationalData) {
      return NextResponse.json({ error: '데이터를 가져오는데 실패했습니다' }, { status: 500 })
    }

    const {
      pricePerDon: internationalPrice,
      pricePerGram: internationalPricePerGram,
      exchangeRate,
    } = internationalData

    const { pricePerDon: krxPrice, pricePerGram: krxPricePerGram } = krxData

    // 프리미엄 계산 (기본 1돈 기준)
    const premium = krxPrice - internationalPrice
    const premiumPercent = (premium / internationalPrice) * 100

    const result: GoldPremiumData = {
      krxPrice: Math.round(krxPrice),
      internationalPrice,

      // 1g 추가
      krxPricePerGram: Math.round(krxPricePerGram),
      internationalPricePerGram: Math.round(internationalPricePerGram),

      premium: Math.round(premium),
      premiumPercent: Math.round(premiumPercent * 100) / 100,
      exchangeRate,
      lastUpdated: new Date().toISOString(),
    }

    return NextResponse.json(result)
  } catch (error) {
    console.error('금 시세 데이터 조회 오류:', error)
    return NextResponse.json({ error: '데이터를 가져오는데 실패했습니다' }, { status: 500 })
  }
}
