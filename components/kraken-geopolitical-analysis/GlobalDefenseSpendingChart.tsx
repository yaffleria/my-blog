'use client'

import React from 'react'
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
  ReferenceLine,
} from 'recharts'

interface GlobalDefenseSpendingChartProps {
  locale?: 'ko' | 'en'
}

type TextContent = {
  title: string
  subtitle: string
  global: string
  us: string
  china: string
  ukraineWar: string
  yoyGrowth: string
  recordHigh: string
  cagr: string
  events: {
    [key: string]: string
  }
}

const TEXTS: Record<'ko' | 'en', TextContent> = {
  ko: {
    title: '🌍 글로벌 군사비 지출 추이 (2020-2026E)',
    subtitle: '전 세계 국방비가 역대 최고치를 기록하며 Kraken의 TAM 확대',
    global: '전 세계',
    us: '미국',
    china: '중국',
    ukraineWar: '우크라이나 전쟁',
    yoyGrowth: '2024년 YoY 성장',
    recordHigh: '2024년 역대 최고',
    cagr: 'CAGR (2020-2024)',
    events: {
      '2022': '러시아-우크라이나 전쟁',
      '2024': 'SIPRI 역대 최고',
      '2026E': 'UUV 투자 본격화',
    },
  },
  en: {
    title: '🌍 Global Defense Spending Trend (2020-2026E)',
    subtitle: "Global defense spending hits record highs, expanding Kraken's TAM",
    global: 'Global',
    us: 'USA',
    china: 'China',
    ukraineWar: 'Ukraine War',
    yoyGrowth: '2024 YoY Growth',
    recordHigh: '2024 Record High',
    cagr: 'CAGR (2020-2024)',
    events: {
      '2022': 'Russia-Ukraine War',
      '2024': 'SIPRI Record High',
      '2026E': 'UUV Investment Ramp-up',
    },
  },
}

const baseData = [
  { year: '2020', spending: 2.24, us: 0.778, china: 0.252, nato: 1.103 },
  { year: '2021', spending: 2.31, us: 0.801, china: 0.293, nato: 1.174 },
  { year: '2022', spending: 2.43, us: 0.877, china: 0.292, nato: 1.232 },
  { year: '2023', spending: 2.59, us: 0.916, china: 0.296, nato: 1.341 },
  { year: '2024', spending: 2.718, us: 0.886, china: 0.335, nato: 1.476 },
  { year: '2025E', spending: 2.9, us: 0.95, china: 0.38, nato: 1.6 },
  { year: '2026E', spending: 3.1, us: 1.0, china: 0.42, nato: 1.75 },
]

interface TooltipPayload {
  color: string
  name: string
  value: number
}

interface CustomTooltipProps {
  active?: boolean
  payload?: TooltipPayload[]
  label?: string
  locale: 'ko' | 'en'
}

const CustomTooltip: React.FC<CustomTooltipProps> = ({ active, payload, label, locale }) => {
  const t = TEXTS[locale]
  if (active && payload && payload.length) {
    const event = label ? t.events[label] : ''
    return (
      <div className="rounded-lg border border-gray-200 bg-white/95 p-4 shadow-xl backdrop-blur-sm dark:border-gray-700 dark:bg-gray-800/95">
        <p className="mb-2 text-lg font-bold text-gray-900 dark:text-white">{label}</p>
        {payload.map((entry, index) => (
          <p key={index} className="text-sm" style={{ color: entry.color }}>
            {entry.name}: ${entry.value.toFixed(2)}T
          </p>
        ))}
        {event && (
          <p className="mt-2 border-t border-gray-200 pt-2 text-xs text-orange-600 dark:border-gray-600 dark:text-orange-400">
            📌 {event}
          </p>
        )}
      </div>
    )
  }
  return null
}

export default function GlobalDefenseSpendingChart({
  locale = 'ko',
}: GlobalDefenseSpendingChartProps) {
  const t = TEXTS[locale]
  const data = baseData.map((d) => ({
    ...d,
    event: t.events[d.year] || '',
  }))

  return (
    <div className="my-8 rounded-2xl border border-gray-200 bg-linear-to-br from-slate-50 to-slate-100 p-6 shadow-lg dark:border-gray-700 dark:from-gray-800 dark:to-gray-900">
      <div className="mb-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white">{t.title}</h3>
        <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">{t.subtitle}</p>
      </div>

      <div className="h-80 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="colorSpending" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.4} />
                <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorUS" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#10b981" stopOpacity={0.4} />
                <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorChina" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#ef4444" stopOpacity={0.4} />
                <stop offset="95%" stopColor="#ef4444" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" opacity={0.3} />
            <XAxis dataKey="year" stroke="#6b7280" fontSize={12} />
            <YAxis stroke="#6b7280" fontSize={12} tickFormatter={(value) => `$${value}T`} />
            <Tooltip content={<CustomTooltip locale={locale} />} />
            <Legend />
            <ReferenceLine
              x="2022"
              stroke="#f97316"
              strokeDasharray="5 5"
              label={{ value: t.ukraineWar, fill: '#f97316', fontSize: 10 }}
            />
            <Area
              type="monotone"
              dataKey="spending"
              name={t.global}
              stroke="#3b82f6"
              fillOpacity={1}
              fill="url(#colorSpending)"
              strokeWidth={3}
            />
            <Area
              type="monotone"
              dataKey="us"
              name={t.us}
              stroke="#10b981"
              fillOpacity={1}
              fill="url(#colorUS)"
              strokeWidth={2}
            />
            <Area
              type="monotone"
              dataKey="china"
              name={t.china}
              stroke="#ef4444"
              fillOpacity={1}
              fill="url(#colorChina)"
              strokeWidth={2}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-4 grid grid-cols-3 gap-4 text-center">
        <div className="rounded-lg bg-blue-50 p-3 dark:bg-blue-900/30">
          <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">+9.4%</p>
          <p className="text-xs text-gray-600 dark:text-gray-400">{t.yoyGrowth}</p>
        </div>
        <div className="rounded-lg bg-emerald-50 p-3 dark:bg-emerald-900/30">
          <p className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">$2.718T</p>
          <p className="text-xs text-gray-600 dark:text-gray-400">{t.recordHigh}</p>
        </div>
        <div className="rounded-lg bg-orange-50 p-3 dark:bg-orange-900/30">
          <p className="text-2xl font-bold text-orange-600 dark:text-orange-400">7.4%</p>
          <p className="text-xs text-gray-600 dark:text-gray-400">{t.cagr}</p>
        </div>
      </div>
    </div>
  )
}
