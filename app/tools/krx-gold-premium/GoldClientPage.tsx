'use client'

import React, { useState, useEffect } from 'react'

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

const formatCurrency = (value: number) => {
  return new Intl.NumberFormat('ko-KR', {
    style: 'currency',
    currency: 'KRW',
  }).format(value)
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

  // Display Values Logic
  const krxDisplayPrice = isDon ? goldData.krxPrice : goldData.krxPricePerGram
  const intlDisplayPrice = isDon ? goldData.internationalPrice : goldData.internationalPricePerGram
  const premiumDisplay = krxDisplayPrice - intlDisplayPrice

  // Determine Colors
  const isPremiumPositive = goldData.premiumPercent >= 0
  const txtColor = isPremiumPositive
    ? 'text-red-600 dark:text-red-400'
    : 'text-blue-600 dark:text-blue-400'
  const bgColor = isPremiumPositive
    ? 'bg-red-50 dark:bg-red-900/10'
    : 'bg-blue-50 dark:bg-blue-900/10'
  const borderColor = isPremiumPositive
    ? 'border-red-100 dark:border-red-800'
    : 'border-blue-100 dark:border-blue-800'

  return (
    <div className="mx-auto max-w-md px-0 py-6 sm:py-10">
      {/* 1. Header */}
      <div className="mb-8 px-4 text-center">
        <h1 className="text-xl font-bold text-gray-900 dark:text-gray-100">
          오늘의 금 시세 프리미엄
        </h1>
        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
          KRX(한국거래소) vs 국제 시세
        </p>

        {/* Unit Toggle Switch */}
        <div className="mt-4 flex justify-center">
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
      </div>

      {/* 2. Hero Section: Premium Info */}
      <div className="mb-6 px-4">
        <div
          className={`relative overflow-hidden rounded-3xl border ${borderColor} ${bgColor} transform p-8 text-center shadow-lg transition-all duration-300 hover:scale-[1.02]`}
        >
          <p className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-300">
            한국 금값이 국제 시세보다
          </p>
          <div className="mb-1 flex items-baseline justify-center gap-1">
            <span className={`text-5xl font-extrabold tracking-tight ${txtColor}`}>
              {Math.abs(goldData.premiumPercent).toFixed(2)}%
            </span>
            <span className={`text-lg font-bold ${txtColor}`}>
              {isPremiumPositive ? '비싸요' : '저렴해요'}
            </span>
          </div>
          <p className={`text-lg font-medium ${txtColor} opacity-90`}>
            {isPremiumPositive ? '+' : ''}
            {formatCurrency(premiumDisplay)} / {isDon ? '1돈' : '1g'}
          </p>
        </div>
      </div>

      {/* 3. Detail Cards */}
      <div className="mb-8 space-y-4 px-4">
        {/* KRX Card */}
        <div className="group relative flex items-center justify-between rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition-all hover:shadow-md dark:border-gray-800 dark:bg-gray-800">
          <div>
            <div className="flex items-center gap-2">
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                한국거래소(KRX)
              </p>
              {/* Source Badge (Small) */}
              <span className="rounded-md bg-gray-50 px-1.5 py-0.5 text-[10px] text-gray-400 dark:bg-gray-700/50">
                data.go.kr
              </span>
            </div>

            <p className="mt-1 text-2xl font-bold text-gray-900 dark:text-gray-100">
              {formatCurrency(krxDisplayPrice)}
            </p>
            <p className="text-xs text-gray-400">{isDon ? '1돈 (3.75g) 기준' : '1g 기준'}</p>
          </div>
          <div className="rounded-full bg-gray-100 p-2 text-gray-600 dark:bg-gray-700 dark:text-gray-300">
            <span className="text-xs font-bold">국내</span>
          </div>
        </div>

        {/* International Card */}
        <div className="group relative flex items-center justify-between rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition-all hover:shadow-md dark:border-gray-800 dark:bg-gray-800">
          <div>
            <div className="flex items-center gap-2">
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                국제 시세(G.Price)
              </p>
              <span className="rounded-md bg-gray-50 px-1.5 py-0.5 text-[10px] text-gray-400 dark:bg-gray-700/50">
                GoldPrice.org
              </span>
            </div>
            <p className="mt-1 text-2xl font-bold text-gray-900 dark:text-gray-100">
              {formatCurrency(intlDisplayPrice)}
            </p>
            <p className="text-xs text-gray-400">
              환율 ₩{goldData.exchangeRate.toLocaleString()} 적용
            </p>
          </div>
          <div className="rounded-full bg-gray-100 p-2 text-gray-600 dark:bg-gray-700 dark:text-gray-300">
            <span className="text-xs font-bold">국제</span>
          </div>
        </div>
      </div>

      {/* 4. Footer Info */}
      <div className="px-6 text-xs text-gray-400 dark:text-gray-500">
        <div className="mb-6 flex justify-between border-t border-gray-100 pt-4 dark:border-gray-800">
          <span>갱신 주기: 30분</span>
          <span>최근 업데이트: {formattedTime}</span>
        </div>

        <div className="space-y-1 text-center">
          <p>※ 단순 계산 참고용 입니다.</p>
          <p>※ 실제 거래 시에는 수수료 및 부가세가 발생할 수 있습니다.</p>
        </div>
      </div>
    </div>
  )
}
