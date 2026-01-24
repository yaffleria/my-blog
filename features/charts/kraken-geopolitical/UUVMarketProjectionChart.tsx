'use client'

import React from 'react'
import {
  ComposedChart,
  Bar,
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
    title: '글로벌 UUV 시장 전망 (2023-2032)',
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
    title: 'Global UUV Market Projection (2023-2032)',
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
      <div className="rounded-lg border border-neutral-700 bg-neutral-900/95 p-4 shadow-xl backdrop-blur-sm">
        <p className="mb-2 text-lg font-bold text-white">{label}</p>
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
    <div className="my-8 rounded-2xl border border-neutral-800 bg-neutral-900 p-6 shadow-2xl">
      <div className="mb-6">
        <h3 className="text-xl font-bold text-white">{t.title}</h3>
        <p className="mt-1 text-sm text-neutral-400">{t.subtitle}</p>
      </div>

      <div className="h-80 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="colorMilitary" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#dc2626" stopOpacity={0.9} />
                <stop offset="95%" stopColor="#dc2626" stopOpacity={0.4} />
              </linearGradient>
              <linearGradient id="colorCommercial" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#78716c" stopOpacity={0.9} />
                <stop offset="95%" stopColor="#78716c" stopOpacity={0.4} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#404040" opacity={0.5} />
            <XAxis dataKey="year" stroke="#a3a3a3" fontSize={12} />
            <YAxis
              yAxisId="left"
              stroke="#a3a3a3"
              fontSize={12}
              tickFormatter={(value) => `$${value}B`}
            />
            <YAxis
              yAxisId="right"
              orientation="right"
              stroke="#f59e0b"
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
              stroke="#f59e0b"
              fill="#f59e0b"
              fillOpacity={0.15}
              strokeWidth={3}
              dot={{ fill: '#f59e0b', strokeWidth: 2, r: 4 }}
            />
          </ComposedChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-4">
        <div className="rounded-lg border border-rose-900/50 bg-rose-950/30 p-3 text-center">
          <p className="text-2xl font-bold text-rose-500">$8.14B</p>
          <p className="text-xs text-neutral-500">{t.stats.marketSize}</p>
        </div>
        <div className="rounded-lg border border-amber-900/50 bg-amber-950/30 p-3 text-center">
          <p className="text-2xl font-bold text-amber-500">13.5%</p>
          <p className="text-xs text-neutral-500">{t.stats.cagr}</p>
        </div>
        <div className="rounded-lg border border-neutral-800 bg-neutral-800/30 p-3 text-center">
          <p className="text-2xl font-bold text-neutral-400">70%</p>
          <p className="text-xs text-neutral-500">{t.stats.militaryShare}</p>
        </div>
        <div className="rounded-lg border border-rose-900/50 bg-rose-950/30 p-3 text-center">
          <p className="text-2xl font-bold text-rose-500">8%+</p>
          <p className="text-xs text-neutral-500">{t.stats.targetShare}</p>
        </div>
      </div>
    </div>
  )
}
