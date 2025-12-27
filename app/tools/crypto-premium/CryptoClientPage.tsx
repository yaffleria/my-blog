'use client'

import React, { useState } from 'react'
import PremiumDashboard, { PremiumData } from '../components/PremiumDashboard'
import Image from 'next/image'

interface CryptoData {
  btc: {
    krwPrice: number
    usdPrice: number
    premium: number
    premiumPercent: number
  }
  usdt: {
    krwPrice: number
    usdPrice: number
    premium: number
    premiumPercent: number
  }
  exchangeRate: number
  lastUpdated: string
  error?: string
  btcSource?: string
  koreaSource?: string
  exchangeRateSource?: string
}

export default function CryptoClientPage({
  initialData,
}: {
  initialData: CryptoData | { error: string }
}) {
  const [mode, setMode] = useState<'BTC' | 'USDT'>('USDT')

  if ('error' in initialData) {
    return <div className="p-10 text-center text-red-500">{initialData.error}</div>
  }

  const isBtc = mode === 'BTC'
  const currentData = isBtc ? initialData.btc : initialData.usdt
  const symbolImg = isBtc
    ? '/static/images/crypto/bitcoin-symbol.png'
    : '/static/images/crypto/usdt-symbol.png'

  const dashboardData: PremiumData = {
    basePrice: currentData.krwPrice,
    internationalPrice: currentData.usdPrice,
    premium: currentData.premium,
    premiumPercent: currentData.premiumPercent,
    exchangeRate: initialData.exchangeRate,
    lastUpdated: initialData.lastUpdated,
  }

  return (
    <div>
      {/* Custom Header Controls for switching */}
      <PremiumDashboard
        title={isBtc ? '비트코인 김치 프리미엄' : '테더(USDT) 김치 프리미엄'}
        subtitle="Binance vs Korbit 시세 비교"
        data={dashboardData}
        unitLabel={isBtc ? '1 BTC' : '1 USDT'}
        baseSourceLabel={initialData.koreaSource || 'Korbit'}
        intlSourceLabel={isBtc ? initialData.btcSource || 'Binance' : '환율 (1 USD)'}
        baseCurrency="KRW"
        // Custom International Price Display
        customIntlPrice={
          isBtc ? (
            <div>
              <div className="flex flex-col md:flex-row md:items-baseline md:gap-2">
                <span>
                  {(currentData.usdPrice * initialData.exchangeRate).toLocaleString('ko-KR', {
                    maximumFractionDigits: 0,
                  })}
                  원
                </span>
                <span className="text-sm font-medium text-gray-400 md:text-lg">
                  ($
                  {currentData.usdPrice.toLocaleString('en-US', {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}
                  )
                </span>
              </div>
            </div>
          ) : (
            // For USDT, show Exchange Rate
            <span>
              {initialData.exchangeRate.toLocaleString('ko-KR', { maximumFractionDigits: 0 })}원
            </span>
          )
        }
        refreshPeriodLabel="30초"
        headerControls={
          <div className="flex items-center gap-4 rounded-full bg-gray-100 p-1 dark:bg-gray-800">
            <button
              onClick={() => setMode('USDT')}
              className={`flex cursor-pointer items-center gap-2 rounded-full px-4 py-2 transition-all hover:bg-white hover:shadow-xs dark:hover:bg-gray-700 ${
                !isBtc
                  ? 'bg-white font-bold text-green-600 shadow-sm dark:bg-gray-700 dark:text-green-400'
                  : 'text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200'
              }`}
            >
              <Image
                src="/static/images/crypto/usdt-symbol.png"
                width={20}
                height={20}
                alt="USDT"
              />
              USDT
            </button>
            <button
              onClick={() => setMode('BTC')}
              className={`flex cursor-pointer items-center gap-2 rounded-full px-4 py-2 transition-all hover:bg-white hover:shadow-xs dark:hover:bg-gray-700 ${
                isBtc
                  ? 'bg-white font-bold text-orange-500 shadow-sm dark:bg-gray-700 dark:text-orange-400'
                  : 'text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200'
              }`}
            >
              <Image
                src="/static/images/crypto/bitcoin-symbol.png"
                width={20}
                height={20}
                alt="BTC"
              />
              BTC
            </button>
          </div>
        }
        hideExchangeRateNote={true}
      />
    </div>
  )
}
