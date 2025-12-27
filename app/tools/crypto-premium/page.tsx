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

async function getBinancePrice(): Promise<number | null> {
  try {
    const res = await fetch('https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT', {
      next: { revalidate: 30 },
    })
    if (!res.ok) return null
    const data = await res.json()
    return parseFloat(data.price)
  } catch (e) {
    console.error('Binance fetch error:', e)
    return null
  }
}

async function getKorbitTickers(): Promise<{ btc: number; usdt: number } | null> {
  try {
    const res = await fetch('https://api.korbit.co.kr/v2/tickers?symbol=btc_krw,usdt_krw', {
      next: { revalidate: 30 },
    })
    if (!res.ok) return null
    const json = await res.json()

    if (!json || !Array.isArray(json.data)) {
      return null
    }

    const data = json.data
    const btcTicker = data.find(
      (item: { symbol: string; close: string }) => item.symbol === 'btc_krw'
    )
    const usdtTicker = data.find(
      (item: { symbol: string; close: string }) => item.symbol === 'usdt_krw'
    )

    return {
      btc: btcTicker ? parseFloat(btcTicker.close) : 0,
      usdt: usdtTicker ? parseFloat(usdtTicker.close) : 0,
    }
  } catch (e) {
    console.error('Korbit fetch error:', e)
    return null
  }
}

async function getCryptoData(): Promise<CryptoData | { error: string }> {
  const [exchangeRate, binanceBtc, korbitData] = await Promise.all([
    getExchangeRate(),
    getBinancePrice(),
    getKorbitTickers(),
  ])

  if (!exchangeRate || !binanceBtc || !korbitData) {
    return { error: '데이터를 불러오는 중 오류가 발생했습니다.' }
  }

  // BTC Calculation
  const btcKrw = korbitData.btc
  const btcUsd = binanceBtc
  const btcExchanged = btcUsd * exchangeRate
  const btcPremium = btcKrw - btcExchanged
  const btcPremiumPercent = (btcKrw / btcExchanged - 1) * 100

  // USDT Calculation
  // USDT is pegged to roughly 1 USD (Standard reference)
  const usdtKrw = korbitData.usdt
  const usdtRef = 1
  const usdtExchanged = usdtRef * exchangeRate
  const usdtPremium = usdtKrw - usdtExchanged
  const usdtPremiumPercent = (usdtKrw / usdtExchanged - 1) * 100

  return {
    exchangeRate,
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
