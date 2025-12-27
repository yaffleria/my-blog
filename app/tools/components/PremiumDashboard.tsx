'use client'

import React from 'react'

export interface PremiumData {
  basePrice: number // e.g., KRX Price or Korbit Price
  internationalPrice: number // e.g., GoldPrice or Binance Price
  premium: number
  premiumPercent: number
  exchangeRate: number
  lastUpdated: string
}

interface PremiumDashboardProps {
  title: string
  subtitle?: string
  data: PremiumData

  // Customization
  unitLabel: string // e.g., "1돈", "1 USDT", "1 BTC"
  baseSourceLabel: string | React.ReactNode // e.g., "한국거래소(KRX)", "Korbit"
  intlSourceLabel: string | React.ReactNode // e.g., "국제 시세(G.Price)", "Binance"

  // Optional formatting
  baseCurrency?: 'KRW' | 'USD'
  intlCurrency?: 'KRW' | 'USD'
  currencyType?: 'KRW' | 'USD' // Deprecated: fallback if specific currencies not provided
  refreshPeriodLabel?: string

  // Slot for extra controls (like unit toggle)
  headerControls?: React.ReactNode

  // Custom Price Overrides (if provided, replaces default formatCurrency output)
  customBasePrice?: React.ReactNode
  customIntlPrice?: React.ReactNode

  // Visibility Controls
  hideExchangeRateNote?: boolean
}

const formatCurrency = (value: number, currency = 'KRW') => {
  if (currency === 'KRW') {
    return (
      new Intl.NumberFormat('ko-KR', {
        style: 'decimal',
        maximumFractionDigits: 0,
      }).format(value) + '원'
    )
  }

  if (currency === 'USD') {
    return (
      '$' +
      new Intl.NumberFormat('en-US', {
        style: 'decimal',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      }).format(value)
    )
  }

  // Fallback
  return new Intl.NumberFormat('ko-KR', {
    style: 'currency',
    currency: currency,
    maximumFractionDigits: currency === 'KRW' ? 0 : 2,
  }).format(value)
}

export default function PremiumDashboard({
  title,
  subtitle,
  data,
  unitLabel,
  baseSourceLabel,
  intlSourceLabel,
  baseCurrency,
  intlCurrency,
  currencyType = 'KRW',
  refreshPeriodLabel = '실시간/10초',
  headerControls,
  customBasePrice,
  customIntlPrice,
  hideExchangeRateNote,
}: PremiumDashboardProps) {
  const { basePrice, internationalPrice, premium, premiumPercent, exchangeRate, lastUpdated } = data

  const effectiveBaseCurrency = baseCurrency || currencyType
  const effectiveIntlCurrency = intlCurrency || currencyType

  // Determine Colors based on premium
  const isPremiumPositive = premium >= 0
  const txtColor = isPremiumPositive
    ? 'text-red-600 dark:text-red-400'
    : 'text-blue-600 dark:text-blue-400'
  const bgColor = isPremiumPositive
    ? 'bg-red-50 dark:bg-red-900/10'
    : 'bg-blue-50 dark:bg-blue-900/10'
  const borderColor = isPremiumPositive
    ? 'border-red-100 dark:border-red-800'
    : 'border-blue-100 dark:border-blue-800'

  const formattedTime = new Date(lastUpdated).toLocaleTimeString('ko-KR', {
    hour: '2-digit',
    minute: '2-digit',
  })

  return (
    <div className="mx-auto max-w-md px-0 py-6 sm:py-10">
      {/* 1. Header */}
      <div className="mb-8 px-4 text-center">
        <h1 className="text-xl font-bold text-gray-900 dark:text-gray-100">{title}</h1>
        {subtitle && <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">{subtitle}</p>}

        {headerControls && <div className="mt-4 flex justify-center">{headerControls}</div>}
      </div>

      {/* 2. Hero Section: Premium Info */}
      <div className="mb-6 px-4">
        <div
          className={`relative overflow-hidden rounded-3xl border ${borderColor} ${bgColor} transform p-8 text-center shadow-lg transition-all duration-300 hover:scale-[1.02]`}
        >
          <p className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-300">
            한국 시세가 국제 시세보다
          </p>
          <div className="mb-1 flex items-baseline justify-center gap-1">
            <span className={`text-5xl font-extrabold tracking-tight ${txtColor}`}>
              {Math.abs(premiumPercent).toFixed(2)}%
            </span>
            <span className={`text-lg font-bold ${txtColor}`}>
              {isPremiumPositive ? '비싸요' : '저렴해요'}
            </span>
          </div>
          <p className={`text-lg font-medium ${txtColor} opacity-90`}>
            {isPremiumPositive ? '+' : ''}
            {formatCurrency(premium, effectiveBaseCurrency)} / {unitLabel}
          </p>
        </div>
      </div>

      {/* 3. Detail Cards */}
      <div className="mb-8 space-y-4 px-4">
        {/* Base (Domestic) Card */}
        <div className="group relative flex items-center justify-between rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition-all hover:shadow-md dark:border-gray-800 dark:bg-gray-800">
          <div>
            <div className="flex items-center gap-2">
              <div className="text-sm font-medium text-gray-500 dark:text-gray-400">
                {baseSourceLabel}
              </div>
            </div>

            <div className="mt-1 text-2xl font-bold text-gray-900 dark:text-gray-100">
              {customBasePrice || formatCurrency(basePrice, effectiveBaseCurrency)}
            </div>
            <p className="text-xs text-gray-400">{unitLabel} 기준</p>
          </div>
          <div className="rounded-full bg-gray-100 p-2 text-gray-600 dark:bg-gray-700 dark:text-gray-300">
            <span className="text-xs font-bold">국내</span>
          </div>
        </div>

        {/* International Card */}
        <div className="group relative flex items-center justify-between rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition-all hover:shadow-md dark:border-gray-800 dark:bg-gray-800">
          <div>
            <div className="flex items-center gap-2">
              <div className="text-sm font-medium text-gray-500 dark:text-gray-400">
                {intlSourceLabel}
              </div>
            </div>
            <div className="mt-1 text-2xl font-bold text-gray-900 dark:text-gray-100">
              {customIntlPrice || formatCurrency(internationalPrice, effectiveIntlCurrency)}
            </div>
            {!hideExchangeRateNote && (
              <p className="text-xs text-gray-400">환율 ₩{exchangeRate.toLocaleString()} 적용</p>
            )}
          </div>
          <div className="rounded-full bg-gray-100 p-2 text-gray-600 dark:bg-gray-700 dark:text-gray-300">
            <span className="text-xs font-bold">국제</span>
          </div>
        </div>
      </div>

      {/* 4. Footer Info */}
      <div className="px-6 text-xs text-gray-400 dark:text-gray-500">
        <div className="mb-6 flex flex-col gap-2 border-t border-gray-100 pt-4 dark:border-gray-800">
          <div className="flex justify-between">
            <span>적용 환율:</span>
            <span className="font-medium text-gray-900 dark:text-gray-100">
              {formatCurrency(exchangeRate, 'KRW')} / USD
            </span>
          </div>
          <div className="flex flex-col justify-between sm:flex-row">
            <span>갱신 주기: {refreshPeriodLabel}</span>
            <span>최근 업데이트: {formattedTime}</span>
          </div>
        </div>

        <div className="space-y-1 text-center font-medium opacity-80">
          <p>※ 본 서비스는 투자 권유가 아니며, 단순 계산 참고용입니다.</p>
          <p>※ 데이터의 정확성을 보장하지 않으며, 실제 거래 시 가격과 다를 수 있습니다.</p>
          <p>※ 투자에 대한 책임은 본인에게 있습니다.</p>
        </div>
      </div>
    </div>
  )
}
