'use client'

import React, { useEffect, useState } from 'react'
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts'

interface MonthlyDividendData {
  month: string
  stable: number
  growth: number
  spike: number
}

interface MonthlyDividendPatternChartProps {
  data?: MonthlyDividendData[]
  title?: string
  height?: number
}

const defaultData: MonthlyDividendData[] = [
  { month: '1월', stable: 5200, growth: 4800, spike: 3000 },
  { month: '2월', stable: 5100, growth: 5000, spike: 2800 },
  { month: '3월', stable: 5300, growth: 5200, spike: 25000 },
  { month: '4월', stable: 5150, growth: 5400, spike: 3200 },
  { month: '5월', stable: 5250, growth: 5600, spike: 2500 },
  { month: '6월', stable: 5200, growth: 5800, spike: 2800 },
  { month: '7월', stable: 5350, growth: 6000, spike: 3000 },
  { month: '8월', stable: 5300, growth: 6200, spike: 2700 },
  { month: '9월', stable: 5400, growth: 6400, spike: 28000 },
  { month: '10월', stable: 5250, growth: 6600, spike: 2900 },
  { month: '11월', stable: 5350, growth: 6800, spike: 2600 },
  { month: '12월', stable: 5500, growth: 7000, spike: 35000 },
]

export default function MonthlyDividendPatternChart({
  data = defaultData,
  title = '월별 저작권료 패턴: 어떤 차트가 좋은 차트인가?',
  height = 400,
}: MonthlyDividendPatternChartProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="my-8 w-full">
        {title && <h4 className="mb-4 text-center text-lg font-semibold">{title}</h4>}
        <div style={{ height }} className="animate-pulse rounded-xl bg-gray-100 dark:bg-gray-800" />
      </div>
    )
  }

  return (
    <div className="my-10 w-full rounded-2xl bg-linear-to-br from-white/80 to-gray-50/80 p-6 shadow-lg ring-1 ring-gray-200/50 backdrop-blur-sm dark:from-gray-900/80 dark:to-gray-800/80 dark:ring-gray-700/50">
      {title && (
        <h4 className="mb-6 text-center text-xl font-bold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h4>
      )}
      <ResponsiveContainer width="100%" height={height}>
        <AreaChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
          <defs>
            <linearGradient id="stableGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.3} />
              <stop offset="95%" stopColor="#3B82F6" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="growthGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#10B981" stopOpacity={0.3} />
              <stop offset="95%" stopColor="#10B981" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="spikeGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#EF4444" stopOpacity={0.3} />
              <stop offset="95%" stopColor="#EF4444" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" className="stroke-gray-200 dark:stroke-gray-700" />
          <XAxis dataKey="month" className="text-sm" />
          <YAxis className="text-sm" tickFormatter={(value) => `${(value / 1000).toFixed(0)}K`} />
          <Tooltip
            contentStyle={{
              backgroundColor: 'rgba(255, 255, 255, 0.98)',
              border: 'none',
              borderRadius: '12px',
              boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)',
              padding: '12px 16px',
            }}
            formatter={(value: number) => [`₩${value.toLocaleString()}`, '']}
            labelStyle={{ fontWeight: 'bold', marginBottom: '8px' }}
          />
          <Legend
            wrapperStyle={{ paddingTop: '20px' }}
            formatter={(value) => <span className="text-sm font-medium">{value}</span>}
          />
          <Area
            type="monotone"
            dataKey="stable"
            stroke="#3B82F6"
            strokeWidth={2}
            fill="url(#stableGradient)"
            name="✅ 평탄형 (god 등)"
            dot={{ r: 3, fill: '#3B82F6' }}
          />
          <Area
            type="monotone"
            dataKey="growth"
            stroke="#10B981"
            strokeWidth={2}
            fill="url(#growthGradient)"
            name="✅ 우상향형 (역주행곡)"
            dot={{ r: 3, fill: '#10B981' }}
          />
          <Area
            type="monotone"
            dataKey="spike"
            stroke="#EF4444"
            strokeWidth={2}
            fill="url(#spikeGradient)"
            name="❌ 스파이크형 (방송 종목)"
            dot={{ r: 3, fill: '#EF4444' }}
          />
        </AreaChart>
      </ResponsiveContainer>
      <div className="mt-4 grid grid-cols-1 gap-3 text-sm md:grid-cols-3">
        <div className="rounded-lg bg-blue-50 p-3 dark:bg-blue-900/30">
          <span className="font-semibold text-blue-700 dark:text-blue-300">평탄형</span>
          <p className="mt-1 text-xs text-gray-600 dark:text-gray-400">
            예측 가능한 월세. 심리적 안정감 최고
          </p>
        </div>
        <div className="rounded-lg bg-emerald-50 p-3 dark:bg-emerald-900/30">
          <span className="font-semibold text-emerald-700 dark:text-emerald-300">우상향형</span>
          <p className="mt-1 text-xs text-gray-600 dark:text-gray-400">
            역주행 또는 플레이리스트 고정. 성장 가치
          </p>
        </div>
        <div className="rounded-lg bg-red-50 p-3 dark:bg-red-900/30">
          <span className="font-semibold text-red-700 dark:text-red-300">스파이크형</span>
          <p className="mt-1 text-xs text-gray-600 dark:text-gray-400">
            세금 폭탄 + 수익률 착시. 반드시 회피!
          </p>
        </div>
      </div>
    </div>
  )
}
