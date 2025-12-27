import { getExchangeRate } from '../services/exchangeRate'
import CryptoClientPage from './CryptoClientPage'
import CryptoInfoSection from './CryptoInfoSection'

// Revalidate every 30 seconds
export const revalidate = 30

interface CryptoData {
  btc: {
    krwPrice: number // Korbit
    usdPrice: number // Binance
    premium: number
    premiumPercent: number
  }
  usdt: {
    krwPrice: number // Korbit
    usdPrice: number // Fixed 1 USD
    premium: number
    premiumPercent: number
  }
  exchangeRate: number
  lastUpdated: string
  error?: string
}

async function getGlobalBtcPrice(): Promise<number | null> {
  // 1. Try Binance
  try {
    const res = await fetch('https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT', {
      next: { revalidate: 30 },
    })
    if (res.ok) {
      const data = await res.json()
      return parseFloat(data.price)
    }
  } catch (e) {
    console.error('Binance fetch error:', e)
  }

  // 2. Fallback to CoinGecko
  try {
    const res = await fetch(
      'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd',
      {
        next: { revalidate: 30 },
      }
    )
    if (res.ok) {
      const data = await res.json()
      return data.bitcoin.usd
    }
  } catch (e) {
    console.error('CoinGecko fetch error:', e)
  }

  return null
}

async function getKoreaTickers(): Promise<{ btc: number; usdt: number } | null> {
  return (await getKorbitTickers()) || (await getUpbitTickers())
}

interface KorbitTicker {
  symbol: string
  close: string
}

interface UpbitTicker {
  market: string
  trade_price: number
}

async function getKorbitTickers(): Promise<{ btc: number; usdt: number } | null> {
  try {
    const res = await fetch('https://api.korbit.co.kr/v2/tickers?symbol=btc_krw,usdt_krw', {
      next: { revalidate: 30 },
    })
    if (!res.ok) return null
    const json = await res.json()

    if (!json || !Array.isArray(json.data)) return null

    const data = json.data
    const btcTicker = data.find((item: KorbitTicker) => item.symbol === 'btc_krw')
    const usdtTicker = data.find((item: KorbitTicker) => item.symbol === 'usdt_krw')

    return {
      btc: btcTicker ? parseFloat(btcTicker.close) : 0,
      usdt: usdtTicker ? parseFloat(usdtTicker.close) : 0,
    }
  } catch (e) {
    console.error('Korbit fetch error:', e)
    return null
  }
}

async function getUpbitTickers(): Promise<{ btc: number; usdt: number } | null> {
  try {
    const res = await fetch('https://api.upbit.com/v1/ticker?markets=KRW-BTC,KRW-USDT', {
      next: { revalidate: 30 },
    })
    if (!res.ok) return null
    const data = await res.json()

    const btcTicker = data.find((item: UpbitTicker) => item.market === 'KRW-BTC')
    const usdtTicker = data.find((item: UpbitTicker) => item.market === 'KRW-USDT')

    return {
      btc: btcTicker ? btcTicker.trade_price : 0,
      usdt: usdtTicker ? usdtTicker.trade_price : 0,
    }
  } catch (e) {
    console.error('Upbit fetch error:', e)
    return null
  }
}

async function getCryptoData(): Promise<CryptoData | { error: string }> {
  const [exchangeRate, globalBtc, koreaData] = await Promise.all([
    getExchangeRate(),
    getGlobalBtcPrice(),
    getKoreaTickers(),
  ])

  const errors: string[] = []
  if (!exchangeRate) {
    console.error('❌ [CryptoData] Exchange Rate load failed')
    errors.push('환율 정보를 불러올 수 없습니다.')
  }
  if (!globalBtc) {
    console.error('❌ [CryptoData] Global BTC Price load failed (Binance & CoinGecko)')
    errors.push('바이낸스/CoinGecko 가격 정보를 불러올 수 없습니다.')
  }
  if (!koreaData) {
    console.error('❌ [CryptoData] Korea Tickers load failed (Korbit & Upbit)')
    errors.push('국내 거래소(코빗/업비트) 가격 정보를 불러올 수 없습니다.')
  }

  if (errors.length > 0) {
    return { error: `데이터 로드 실패: ${errors.join(', ')}` }
  }

  // BTC Calculation
  const btcKrw = koreaData!.btc
  const btcUsd = globalBtc!
  const btcExchanged = btcUsd * exchangeRate!
  const btcPremium = btcKrw - btcExchanged
  const btcPremiumPercent = (btcKrw / btcExchanged - 1) * 100

  // USDT Calculation
  // USDT is pegged to roughly 1 USD (Standard reference)
  const usdtKrw = koreaData!.usdt
  const usdtRef = 1
  const usdtExchanged = usdtRef * exchangeRate!
  const usdtPremium = usdtKrw - usdtExchanged
  const usdtPremiumPercent = (usdtKrw / usdtExchanged - 1) * 100

  return {
    exchangeRate: exchangeRate!,
    lastUpdated: new Date().toISOString(),
    btc: {
      krwPrice: btcKrw,
      usdPrice: btcUsd,
      premium: btcPremium,
      premiumPercent: btcPremiumPercent,
    },
    usdt: {
      krwPrice: usdtKrw,
      usdPrice: usdtRef,
      premium: usdtPremium,
      premiumPercent: usdtPremiumPercent,
    },
  }
}

export default async function CryptoPremiumPage() {
  const data = await getCryptoData()

  // SEO
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FinancialProduct',
    name: 'Bitcoin & USDT Kimchi Premium (김프)',
    description:
      'Real-time Kimchi Premium calculator for Bitcoin and USDT. 비트코인 김치프리미엄 조회',
    currency: 'KRW',
    price: data && 'btc' in data ? data.btc.krwPrice : 0,
    priceCurrency: 'KRW',
    url: 'https://nenyaffle.com/tools/crypto-premium',
    exchangeRate: 'exchangeRate' in data ? data.exchangeRate : 0,
    relatedLink: ['https://korbit.co.kr', 'https://binance.com'],
    mainEntity: {
      '@type': 'ExchangeRateSpecification',
      currency: 'KRW',
      currentExchangeRate: {
        '@type': 'UnitPriceSpecification',
        price: 'exchangeRate' in data ? data.exchangeRate : 0,
        priceCurrency: 'KRW',
        referenceQuantity: {
          '@type': 'QuantitativeValue',
          value: '1',
          unitCode: 'USD',
        },
      },
    },
  }

  // FAQ Schema
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: '김치프리미엄은 어떻게 계산되나요?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '김치프리미엄(%) = ((국내 시세 / (해외 시세 × 환율)) - 1) × 100. 본 사이트에서는 국내 시세(Korbit)와 해외 시세(Binance)를 실시간 환율로 환산하여 계산합니다.',
        },
      },
      {
        '@type': 'Question',
        name: 'USDT(테더) 김프는 왜 확인하나요?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'USDT는 달러($1) 가치에 연동되는 스테이블 코인입니다. 따라서 USDT의 김치프리미엄은 순수한 환율 차이와 한국 시장의 과열 정도를 나타내는 지표로 활용됩니다.',
        },
      },
      {
        '@type': 'Question',
        name: '재정거래(차익거래)가 가능한가요?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '외국환 거래법상 송금 제한과 복잡한 절차로 인해 개인이 즉각적인 무위험 차익거래를 하기는 어렵습니다.',
        },
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([jsonLd, faqSchema]) }}
      />
      <CryptoClientPage initialData={data} />
      <CryptoInfoSection />
    </>
  )
}
