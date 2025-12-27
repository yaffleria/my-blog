'use client'

import React, { useState, useEffect } from 'react'
import PremiumDashboard, { PremiumData } from '../components/PremiumDashboard'
import { Stone } from 'lucide-react'

export const DON_TO_GRAM = 3.75

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

export default function GoldClientPage({ goldData }: { goldData: GoldData }) {
  const [unit, setUnit] = useState<'don' | 'gram'>('don')
  const [formattedTime, setFormattedTime] = useState<string>('')

  useEffect(() => {
    setFormattedTime(
      new Date(goldData.lastUpdated).toLocaleTimeString('ko-KR', {
        hour: '2-digit',
        minute: '2-digit',
      })
    )
  }, [goldData.lastUpdated])

  const isDon = unit === 'don'

  const dashboardData: PremiumData = {
    basePrice: isDon ? goldData.krxPrice : goldData.krxPricePerGram,
    internationalPrice: isDon ? goldData.internationalPrice : goldData.internationalPricePerGram,
    premium:
      (isDon ? goldData.krxPrice : goldData.krxPricePerGram) -
      (isDon ? goldData.internationalPrice : goldData.internationalPricePerGram),
    premiumPercent: goldData.premiumPercent,
    exchangeRate: goldData.exchangeRate,
    lastUpdated: goldData.lastUpdated,
  }

  return (
    <PremiumDashboard
      title="오늘의 금 시세 프리미엄"
      subtitle="KRX(한국거래소) vs 국제 시세"
      data={dashboardData}
      unitLabel={isDon ? '1돈' : '1g'}
      refreshPeriodLabel="30분"
      baseSourceLabel={
        <div className="flex items-center gap-2">
          <span>한국거래소(KRX)</span>
          <span className="rounded-md bg-gray-50 px-1.5 py-0.5 text-[10px] text-gray-400 dark:bg-gray-700/50">
            data.go.kr
          </span>
        </div>
      }
      intlSourceLabel={
        <div className="flex items-center gap-2">
          <span>국제 시세(G.Price)</span>
          <span className="rounded-md bg-gray-50 px-1.5 py-0.5 text-[10px] text-gray-400 dark:bg-gray-700/50">
            GoldPrice.org
          </span>
        </div>
      }
      headerControls={
        <div className="flex items-center gap-2">
          <Stone className="h-6 w-6 text-yellow-500 dark:text-yellow-400" />
          <div className="flex rounded-full bg-gray-100 p-1 dark:bg-gray-800">
            <button
              onClick={() => setUnit('don')}
              className={`cursor-pointer rounded-full px-4 py-1 text-sm font-medium transition-all ${
                isDon
                  ? 'bg-white text-gray-900 shadow-xs dark:bg-gray-700 dark:text-gray-100'
                  : 'text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200'
              }`}
            >
              1돈 (3.75g)
            </button>
            <button
              onClick={() => setUnit('gram')}
              className={`cursor-pointer rounded-full px-4 py-1 text-sm font-medium transition-all ${
                !isDon
                  ? 'bg-white text-gray-900 shadow-xs dark:bg-gray-700 dark:text-gray-100'
                  : 'text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200'
              }`}
            >
              1g
            </button>
          </div>
        </div>
      }
    />
  )
}
