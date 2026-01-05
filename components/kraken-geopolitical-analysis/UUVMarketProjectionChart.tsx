'use client'

import React from 'react'
import {
  ComposedChart,
  Bar,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
  Area,
} from 'recharts'

interface UUVMarketProjectionChartProps {
  locale?: 'ko' | 'en'
}

type TextContent = {
  title: string
  subtitle: string
  military: string
  commercial: string
  krakenShare: string
  stats: {
    marketSize: string
    cagr: string
    militaryShare: string
    targetShare: string
  }
}

const TEXTS: Record<'ko' | 'en', TextContent> = {
  ko: {
    title: '🤖 글로벌 UUV 시장 전망 (2023-2032)',
    subtitle: '무인 잠수정 시장 급성장 속 Kraken의 점유율 확대 추이',
    military: '군사용',
    commercial: '상업용',
    krakenShare: 'Kraken 점유율',
    stats: {
      marketSize: '2032년 시장 규모',
      cagr: '예상 CAGR',
      militaryShare: '군사용 비중',
      targetShare: 'Kraken 목표 점유율',
    },
  },
  en: {
    title: '🤖 Global UUV Market Projection (2023-2032)',
    subtitle: "Kraken's growing market share amidst rapid UUV market expansion",
    military: 'Military',
    commercial: 'Commercial',
    krakenShare: 'Kraken Share',
    stats: {
      marketSize: '2032 Market Size',
      cagr: 'Est. CAGR',
      militaryShare: 'Military Share',
      targetShare: 'Kraken Target Share',
    },
  },
}

const data = [
  { year: '2023', market: 2.8, military: 1.8, commercial: 1.0, krakenShare: 2 },
  { year: '2024', market: 3.2, military: 2.1, commercial: 1.1, krakenShare: 2.5 },
  { year: '2025E', market: 3.8, military: 2.5, commercial: 1.3, krakenShare: 3.2 },
  { year: '2026E', market: 4.5, military: 3.0, commercial: 1.5, krakenShare: 4 },
  { year: '2027E', market: 5.3, military: 3.6, commercial: 1.7, krakenShare: 5 },
  { year: '2028E', market: 6.2, military: 4.2, commercial: 2.0, krakenShare: 6 },
  { year: '2030E', market: 7.2, military: 5.0, commercial: 2.2, krakenShare: 7 },
  { year: '2032E', market: 8.14, military: 5.7, commercial: 2.44, krakenShare: 8 },
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
  krakenShareLabel: string
}

const CustomTooltip: React.FC<CustomTooltipProps> = ({
  active,
  payload,
  label,
  krakenShareLabel,
}) => {
  if (active && payload && payload.length) {
    return (
      <div className="rounded-lg border border-gray-200 bg-white/95 p-4 shadow-xl backdrop-blur-sm dark:border-gray-700 dark:bg-gray-800/95">
        <p className="mb-2 text-lg font-bold text-gray-900 dark:text-white">{label}</p>
        {payload.map((entry, index) => (
          <p key={index} className="text-sm" style={{ color: entry.color }}>
            {entry.name}: {entry.name === krakenShareLabel ? `${entry.value}%` : `$${entry.value}B`}
          </p>
        ))}
      </div>
    )
  }
  return null
}

export default function UUVMarketProjectionChart({ locale = 'ko' }: UUVMarketProjectionChartProps) {
  const t = TEXTS[locale]
  return (
    <div className="my-8 rounded-2xl border border-gray-200 bg-linear-to-br from-indigo-50 to-purple-50 p-6 shadow-lg dark:border-gray-700 dark:from-indigo-900/30 dark:to-purple-900/30">
      <div className="mb-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white">{t.title}</h3>
        <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">{t.subtitle}</p>
      </div>

      <div className="h-80 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="colorMilitary" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0.3} />
              </linearGradient>
              <linearGradient id="colorCommercial" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#06b6d4" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#06b6d4" stopOpacity={0.3} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" opacity={0.3} />
            <XAxis dataKey="year" stroke="#6b7280" fontSize={12} />
            <YAxis
              yAxisId="left"
              stroke="#6b7280"
              fontSize={12}
              tickFormatter={(value) => `$${value}B`}
            />
            <YAxis
              yAxisId="right"
              orientation="right"
              stroke="#10b981"
              fontSize={12}
              tickFormatter={(value) => `${value}%`}
            />
            <Tooltip content={<CustomTooltip krakenShareLabel={t.krakenShare} />} />
            <Legend />
            <Bar
              yAxisId="left"
              dataKey="military"
              name={t.military}
              fill="url(#colorMilitary)"
              radius={[4, 4, 0, 0]}
              stackId="a"
            />
            <Bar
              yAxisId="left"
              dataKey="commercial"
              name={t.commercial}
              fill="url(#colorCommercial)"
              radius={[4, 4, 0, 0]}
              stackId="a"
            />
            <Area
              yAxisId="right"
              type="monotone"
              dataKey="krakenShare"
              name={t.krakenShare}
              stroke="#10b981"
              fill="#10b981"
              fillOpacity={0.2}
              strokeWidth={3}
              dot={{ fill: '#10b981', strokeWidth: 2 }}
            />
          </ComposedChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-4">
        <div className="rounded-lg bg-purple-100 p-3 text-center dark:bg-purple-900/40">
          <p className="text-2xl font-bold text-purple-600 dark:text-purple-400">$8.14B</p>
          <p className="text-xs text-gray-600 dark:text-gray-400">{t.stats.marketSize}</p>
        </div>
        <div className="rounded-lg bg-cyan-100 p-3 text-center dark:bg-cyan-900/40">
          <p className="text-2xl font-bold text-cyan-600 dark:text-cyan-400">13.5%</p>
          <p className="text-xs text-gray-600 dark:text-gray-400">{t.stats.cagr}</p>
        </div>
        <div className="rounded-lg bg-emerald-100 p-3 text-center dark:bg-emerald-900/40">
          <p className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">70%</p>
          <p className="text-xs text-gray-600 dark:text-gray-400">{t.stats.militaryShare}</p>
        </div>
        <div className="rounded-lg bg-orange-100 p-3 text-center dark:bg-orange-900/40">
          <p className="text-2xl font-bold text-orange-600 dark:text-orange-400">8%+</p>
          <p className="text-xs text-gray-600 dark:text-gray-400">{t.stats.targetShare}</p>
        </div>
      </div>
    </div>
  )
}
