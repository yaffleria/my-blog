'use client'

import React, { useEffect, useState } from 'react'
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
} from 'recharts'

interface LongTailData {
  month: number
  revenue: number
}

interface LongTailCurveChartProps {
  title?: string
  height?: number
}

// 롱테일 곡선 데이터 생성 (발매 후 60개월)
const generateLongTailData = (): LongTailData[] => {
  const data: LongTailData[] = []
  for (let month = 1; month <= 60; month++) {
    let revenue: number
    if (month <= 3) {
      // 초반 폭발 (1~3개월)
      revenue = 100 - (month - 1) * 15
    } else if (month <= 12) {
      // 급격한 하락 (4~12개월)
      revenue = 55 - (month - 3) * 4
    } else if (month <= 24) {
      // 완만한 하락 (13~24개월)
      revenue = 19 - (month - 12) * 0.5
    } else {
      // 안정화 구간 (25개월~)
      revenue = 13 - (month - 24) * 0.1
      if (revenue < 8) revenue = 8 + Math.random() * 2
    }
    data.push({ month, revenue: Math.max(revenue, 5) })
  }
  return data
}

const defaultData = generateLongTailData()

export default function LongTailCurveChart({
  title = '음원 저작권료의 롱테일 곡선',
  height = 350,
}: LongTailCurveChartProps) {
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
        <AreaChart data={defaultData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
          <defs>
            <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8B5CF6" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8B5CF6" stopOpacity={0.1} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" className="stroke-gray-200 dark:stroke-gray-700" />
          <XAxis
            dataKey="month"
            tickFormatter={(value) => `${value}개월`}
            interval={11}
            className="text-sm"
            label={{ value: '발매 후 경과 시간', position: 'bottom', offset: 0 }}
          />
          <YAxis
            tickFormatter={(value) => `${value}%`}
            domain={[0, 100]}
            className="text-sm"
            label={{ value: '상대 저작권료', angle: -90, position: 'insideLeft' }}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: 'rgba(255, 255, 255, 0.98)',
              border: 'none',
              borderRadius: '12px',
              boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)',
              padding: '12px 16px',
            }}
            formatter={(value: number) => [`${value.toFixed(1)}%`, '저작권료']}
            labelFormatter={(label) => `발매 후 ${label}개월`}
          />
          <ReferenceLine
            x={12}
            stroke="#EF4444"
            strokeDasharray="5 5"
            label={{ value: '1년', position: 'top', fill: '#EF4444', fontSize: 12 }}
          />
          <ReferenceLine
            x={24}
            stroke="#F59E0B"
            strokeDasharray="5 5"
            label={{ value: '2년', position: 'top', fill: '#F59E0B', fontSize: 12 }}
          />
          <Area
            type="monotone"
            dataKey="revenue"
            stroke="#8B5CF6"
            strokeWidth={3}
            fillOpacity={1}
            fill="url(#colorRevenue)"
          />
        </AreaChart>
      </ResponsiveContainer>
      <div className="mt-4 flex flex-wrap justify-center gap-4 text-sm text-gray-600 dark:text-gray-400">
        <span className="flex items-center gap-2">
          <span className="inline-block h-3 w-3 rounded-full bg-red-500"></span>
          초반 폭발 구간
        </span>
        <span className="flex items-center gap-2">
          <span className="inline-block h-3 w-3 rounded-full bg-amber-500"></span>
          급격한 하락 구간
        </span>
        <span className="flex items-center gap-2">
          <span className="inline-block h-3 w-3 rounded-full bg-violet-500"></span>
          안정화 구간 (롱테일)
        </span>
      </div>
      <p className="mt-4 text-center text-sm text-gray-600 dark:text-gray-400">
        신곡은 초반 저작권료가 높지만 급격히 하락합니다. 안정화 구간에 진입한 곡을 노리세요.
      </p>
    </div>
  )
}
