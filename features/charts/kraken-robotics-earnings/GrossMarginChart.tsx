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
} from 'recharts'

interface GrossMarginData {
  quarter: string
  margin: number
}

interface GrossMarginChartProps {
  data?: GrossMarginData[]
  title?: string
  height?: number
  yAxisDomain?: [number, number]
  label?: string
}

const defaultData: GrossMarginData[] = [
  { quarter: 'Q3 2024', margin: 52 },
  { quarter: 'Q4 2024', margin: 47 },
  { quarter: 'Q1 2025', margin: 56 },
  { quarter: 'Q2 2025', margin: 62 },
  { quarter: 'Q3 2025', margin: 59 },
]

export default function GrossMarginChart({
  data = defaultData,
  title = '매출총이익률 추이',
  height = 300,
  yAxisDomain = [40, 65],
  label = '매출총이익률 (%)',
}: GrossMarginChartProps) {
  return (
    <div className="my-8 w-full">
      {title && <h4 className="mb-4 text-center text-lg font-semibold">{title}</h4>}
      <ResponsiveContainer width="100%" height={height}>
        <AreaChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" className="stroke-gray-300 dark:stroke-gray-700" />
          <XAxis dataKey="quarter" className="text-sm" />
          <YAxis className="text-sm" unit="%" domain={yAxisDomain} />
          <Tooltip
            contentStyle={{
              backgroundColor: 'rgba(255, 255, 255, 0.95)',
              border: '1px solid #ccc',
              borderRadius: '8px',
            }}
            formatter={(value: number) => `${value}%`}
          />
          <Area
            type="monotone"
            dataKey="margin"
            stroke="rgb(139, 92, 246)"
            fill="rgba(139, 92, 246, 0.2)"
            strokeWidth={2}
            name={label}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}
