import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({
  title: 'KRX 금 시세 프리미엄 계산기 | 실시간 한국 vs 국제 금값 비교',
  description:
    '한국거래소(KRX) 금 시장의 시세와 국제 금 시세를 실시간으로 비교하여 한국 금값의 프리미엄(김치 프리미엄)을 확인하세요. 1g 및 1돈(3.75g) 단위 가격 정보와 환율 정보를 제공합니다.',
  keywords: [
    '금 시세',
    '금값',
    'KRX 금시장',
    '한국거래소 금',
    '국제 금 시세',
    '금 프리미엄',
    '골드바',
    '순금 시세',
    '1돈 가격',
    '1g 가격',
    '금 투자',
    '환율',
  ],
  openGraph: {
    title: 'KRX 금 시세 프리미엄 계산기 - 실시간 조회',
    description: '한국 금값이 국제 시세보다 얼마나 비쌀까요? KRX vs 국제 금 시세 실시간 비교 분석.',
    type: 'website',
    images: ['/static/images/logo.jpg'],
  },
})

// ISR: 30분마다 재검증
export const revalidate = 1800

const DATA_GO_KR_API_KEY = process.env.DATA_GO_KR_API_KEY || process.env.FSC_API_KEY || ''

const DON_TO_GRAM = 3.75
const TROY_OUNCE_TO_GRAM = 31.1035
const isDev = process.env.NODE_ENV === 'development'

interface GoldData {
  krxPrice: number
  internationalPrice: number
  premium: number
  premiumPercent: number

  krxPricePerGram: number
  internationalPricePerGram: number

  exchangeRate: number
  lastUpdated: string
  error?: string
}

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

interface GoldPriceResponse {
  response: {
    header: {
      resultCode: string
      resultMsg: string
    }
    body: {
      items: {
        item: GoldPriceItem[]
      }
    }
  }
}

async function fetchGoldPriceFromKRX(): Promise<GoldPriceItem | null> {
  const KRX_API_BASE = 'https://apis.data.go.kr/1160100/service/GetGeneralProductInfoService'
  const serviceKey = DATA_GO_KR_API_KEY

  const queryParams = new URLSearchParams({
    serviceKey: serviceKey,
    numOfRows: '10',
    pageNo: '1',
    resultType: 'json',
  })

  // itmsNm=금 99.99_1Kg 파라미터를 추가하면 더 정확하지만, 인코딩 이슈가 있을 수 있어 필터링으로 처리
  const url = `${KRX_API_BASE}/getGoldPriceInfo?${queryParams.toString()}`

  if (isDev) {
    console.log('🔹 [KRX] Request URL:', url.replace(serviceKey, '***'))
  }

  try {
    const response = await fetch(url, {
      next: { revalidate: 1800 },
    })

    if (!response.ok) {
      console.error('❌ [KRX] HTTP Error:', response.status)
      return null
    }

    const data: GoldPriceResponse = await response.json()

    if (data.response.header.resultCode !== '00') {
      console.error(
        '❌ [KRX] API Logic Error:',
        data.response.header.resultCode,
        data.response.header.resultMsg
      )
      return null
    }

    const items = data.response.body.items.item
    if (!items || items.length === 0) {
      console.error('⚠️ [KRX] No Data Returned')
      return null
    }

    // 금 99.99_1Kg 종목 찾기 (없으면 첫번째 항목)
    const goldItem = items.find((item) => item.itmsNm.includes('1Kg')) || items[0]

    if (isDev) {
      console.log('✅ [KRX] Gold Item Found:', goldItem.itmsNm, 'Price:', goldItem.clpr)
    }

    return goldItem
  } catch (error) {
    console.error('❌ [KRX] Exception:', error)
    return null
  }
}

async function getExchangeRate(): Promise<number | null> {
  try {
    // Frankfurter API (Free, Open)
    const url = 'https://api.frankfurter.app/latest?from=USD&to=KRW'

    if (isDev) {
      console.log('🔹 [FX] Request URL:', url)
    }

    const response = await fetch(url, { next: { revalidate: 1800 } })

    if (!response.ok) {
      console.error('❌ [FX] HTTP Error:', response.status)
      return null
    }

    const data = await response.json()
    if (data && data.rates && data.rates.KRW) {
      const rate = data.rates.KRW
      if (isDev) {
        console.log('✅ [FX] Rate:', rate)
      }
      return rate
    }

    return null
  } catch (error) {
    console.error('❌ [FX] Exception:', error)
    return null
  }
}

async function getKRXGoldPrice(): Promise<{ pricePerDon: number; pricePerGram: number } | null> {
  const goldItem = await fetchGoldPriceFromKRX()
  if (!goldItem) return null

  // 종가(clpr)는 1g당 가격 (KRW)
  const pricePerGram = parseFloat(goldItem.clpr)
  if (isNaN(pricePerGram) || pricePerGram <= 0) return null

  // 1돈(3.75g) 가격으로 변환
  const pricePerDon = pricePerGram * DON_TO_GRAM

  return { pricePerDon, pricePerGram }
}

async function getInternationalGoldPrice(): Promise<{
  pricePerDon: number | null
  pricePerGram: number | null
  exchangeRate: number | null
}> {
  try {
    // GoldPrice.org Data (Free, Unofficial but reliable for spot calc)
    // Returns XAU Price in USD per Troy Ounce
    const goldUrl = 'https://data-asg.goldprice.org/dbXRates/USD'

    if (isDev) {
      console.log('🔹 [Gold] Request URL:', goldUrl)
    }

    const [goldResponse, exchangeRate] = await Promise.all([
      fetch(goldUrl, { next: { revalidate: 1800 } }),
      getExchangeRate(),
    ])

    if (!goldResponse.ok) {
      console.error('❌ [Gold] HTTP Error:', goldResponse.status)
      return { pricePerDon: null, pricePerGram: null, exchangeRate }
    }

    const goldData = await goldResponse.json()
    // data structure: { items: [ { curr: 'USD', xauPrice: 2650.50, ... } ] }
    const pricePerOunceUSD = goldData.items && goldData.items[0] ? goldData.items[0].xauPrice : null

    if (!pricePerOunceUSD) {
      console.error('⚠️ [Gold] No Price Data')
      return { pricePerDon: null, pricePerGram: null, exchangeRate }
    }

    if (!exchangeRate) {
      console.error('⚠️ [Gold] No Exchange Rate Data')
      return { pricePerDon: null, pricePerGram: null, exchangeRate: null }
    }

    const pricePerGramUSD = pricePerOunceUSD / TROY_OUNCE_TO_GRAM
    const pricePerDonUSD = pricePerGramUSD * DON_TO_GRAM

    // Convert to KRW
    const pricePerGramKRW = pricePerGramUSD * exchangeRate
    const pricePerDonKRW = pricePerDonUSD * exchangeRate

    if (isDev) {
      console.log('✅ [Gold] Data Processed')
      console.log('   - USD/oz:', pricePerOunceUSD)
      console.log('   - USD/g :', pricePerGramUSD.toFixed(2))
      console.log('   - USD/don:', pricePerDonUSD.toFixed(2))
      console.log('   - KRW/don:', pricePerDonKRW.toFixed(0))
    }

    return {
      pricePerDon: Math.round(pricePerDonKRW),
      pricePerGram: Math.round(pricePerGramKRW),
      exchangeRate,
    }
  } catch (error) {
    console.error('❌ [Gold] Exception:', error)
    const exchangeRate = await getExchangeRate()
    return { pricePerDon: null, pricePerGram: null, exchangeRate }
  }
}

async function getGoldData(): Promise<GoldData | { error: string }> {
  /*
    Financial Modeling Prep API가 Legacy Endpoint(v3)에 대해 유료화/인증 강화를 진행하여
    Frankfurter (환율)와 GoldPrice.org (금 시세)로 대체하였습니다.
  */
  const [krxData, internationalData] = await Promise.all([
    getKRXGoldPrice(),
    getInternationalGoldPrice(),
  ])

  const {
    pricePerDon: internationalPrice,
    pricePerGram: internationalPricePerGram,
    exchangeRate,
  } = internationalData
  const krxPrice = krxData?.pricePerDon
  const krxPricePerGram = krxData?.pricePerGram

  // 에러 체크
  if (!krxPrice || !internationalPrice || !krxPricePerGram || !internationalPricePerGram) {
    const missingData: string[] = [] // Explicit type definition to fix lint error
    if (!krxPrice) missingData.push('KRX 금 시세 (API 오류)')
    if (!internationalPrice) missingData.push('국제 금 시세 (API 오류)')

    return {
      error: `현재 ${missingData.join(', ')} 정보를 가져올 수 없습니다. 잠시 후 다시 시도해주세요.`,
    }
  }

  const premium = krxPrice - internationalPrice
  const premiumPercent = (premium / internationalPrice) * 100

  if (isDev) {
    console.log('🧮 [Premium Calc] Result')
    console.log('   - KRX(1don) :', formatCurrency(krxPrice))
    console.log("   - Int'l(1don):", formatCurrency(internationalPrice))
    console.log('   - Premium   :', formatCurrency(premium))
    console.log(
      '   - Result    :',
      premiumPercent >= 0 ? `+${premiumPercent.toFixed(2)}%` : `${premiumPercent.toFixed(2)}%`
    )
  }

  return {
    krxPrice: Math.round(krxPrice),
    internationalPrice,

    krxPricePerGram: Math.round(krxPricePerGram),
    internationalPricePerGram: Math.round(internationalPricePerGram),

    premium: Math.round(premium),
    premiumPercent: Math.round(premiumPercent * 100) / 100,
    exchangeRate: exchangeRate || 0,
    lastUpdated: new Date().toISOString(),
  }
}

const formatCurrency = (value: number) => {
  return new Intl.NumberFormat('ko-KR', {
    style: 'currency',
    currency: 'KRW',
  }).format(value)
}

const formatPercent = (value: number) => {
  return `${value >= 0 ? '+' : ''}${value.toFixed(2)}%`
}

import GoldClientPage from './GoldClientPage'
import AutoRefresh from './AutoRefresh'

export default async function KRXGoldPremiumPage() {
  const result = await getGoldData()

  // 에러 UI
  if ('error' in result) {
    return (
      <div className="mx-auto max-w-lg px-4 py-12">
        <AutoRefresh />
        <div className="flex flex-col items-center justify-center space-y-6 text-center">
          <div className="rounded-full bg-red-100 p-4 dark:bg-red-900/30">
            <svg
              className="h-10 w-10 text-red-600 dark:text-red-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
            데이터를 불러오지 못했어요
          </h2>
          <p className="text-gray-500 dark:text-gray-400">{result.error}</p>
          <div className="rounded-2xl bg-gray-50 p-4 text-sm text-gray-600 dark:bg-gray-800 dark:text-gray-400">
            <p>API 점검 중이거나 일시적인 문제일 수 있습니다.</p>
            <p className="mt-1">잠시 후 자동으로 다시 시도합니다.</p>
          </div>
        </div>
      </div>
    )
  }

  // JSON-LD 구조화된 데이터 (SEO: Product/FinancialProduct)
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FinancialProduct',
    name: 'KRX 금 시세 (KRX Gold Spot Price)',
    description: '한국거래소(KRX) 금 시장의 실시간 금 시세 및 국제 금 시세 비교',
    currency: 'KRW',
    price: result.krxPrice,
    priceCurrency: 'KRW',
    url: 'https://nenyaffle.com/tools/krx-gold-premium',
    exchangeRate: result.exchangeRate,
    offers: {
      '@type': 'Offer',
      price: result.krxPrice,
      priceCurrency: 'KRW',
      availability: 'https://schema.org/InStock',
      url: 'https://nenyaffle.com/tools/krx-gold-premium',
    },
    provider: {
      '@type': 'Organization',
      name: 'KRX (Korea Exchange)',
    },
    relatedLink: ['https://data.go.kr', 'https://goldprice.org'],
    mainEntity: {
      '@type': 'ExchangeRateSpecification',
      currency: 'KRW',
      currentExchangeRate: {
        '@type': 'UnitPriceSpecification',
        price: result.exchangeRate,
        priceCurrency: 'KRW',
        referenceQuantity: {
          '@type': 'QuantitativeValue',
          value: '1',
          unitCode: 'USD',
        },
      },
    },
  }

  // 성공 시 Client Component 렌더링
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AutoRefresh />
      <GoldClientPage goldData={result} />
    </>
  )
}
