'use client'

import React from 'react'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts'

interface AnnualGuidanceChartProps {
  title?: string
  height?: number
  description?: string
}

export default function AnnualGuidanceChart({
  title = '2025년 분기별 매출 전망',
  height = 400,
  description = '실선: 실적 | 점선: 예상 (하단/상단)',
}: AnnualGuidanceChartProps) {
  // 실제 데이터 (Q1-Q3)
  const actualData = [
    { quarter: 'Q1', actual: 23766 },
    { quarter: 'Q2', actual: 18752 },
    { quarter: 'Q3', actual: 31298 },
  ]

  // 예측 데이터 (Q3에서 Q4로 연결)
  const forecastLowData = [
    { quarter: 'Q3', forecastLow: 31298 },
    { quarter: 'Q4', forecastLow: 26182 },
  ]

  const forecastHighData = [
    { quarter: 'Q3', forecastHigh: 31298 },
    { quarter: 'Q4', forecastHigh: 38934 },
  ]

  // 통합 데이터 (모든 분기 포함)
  const allData = [
    { quarter: 'Q1', actual: 23766, forecastLow: null, forecastHigh: null },
    { quarter: 'Q2', actual: 18752, forecastLow: null, forecastHigh: null },
    { quarter: 'Q3', actual: 31298, forecastLow: 31298, forecastHigh: 31298 },
    { quarter: 'Q4', actual: null, forecastLow: 26182, forecastHigh: 38934 },
  ]

  return (
    <div className="my-8 w-full">
      {title && <h4 className="mb-4 text-center text-lg font-semibold">{title}</h4>}
      <ResponsiveContainer width="100%" height={height}>
        <LineChart data={allData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" className="stroke-gray-300 dark:stroke-gray-700" />
          <XAxis dataKey="quarter" className="text-sm" />
          <YAxis className="text-sm" />
          <Tooltip
            contentStyle={{
              backgroundColor: 'rgba(255, 255, 255, 0.95)',
              border: '1px solid #ccc',
              borderRadius: '8px',
            }}
            formatter={(value: unknown) =>
              typeof value === 'number' ? `$${value.toLocaleString()}` : 'N/A'
            }
          />
          <Legend />

          {/* 실제 실적 (실선) */}
          <Line
            type="monotone"
            dataKey="actual"
            stroke="rgb(59, 130, 246)"
            strokeWidth={3}
            name="실적"
            dot={{ r: 5, fill: 'rgb(59, 130, 246)' }}
            activeDot={{ r: 7 }}
            connectNulls={false}
          />

          {/* 예상 상단 (점선) */}
          <Line
            type="monotone"
            dataKey="forecastHigh"
            stroke="rgb(34, 197, 94)"
            strokeWidth={2}
            strokeDasharray="5 5"
            name="예상 상단"
            dot={{ r: 4, fill: 'rgb(34, 197, 94)' }}
            activeDot={{ r: 6 }}
            connectNulls={false}
          />

          {/* 예상 하단 (점선) */}
          <Line
            type="monotone"
            dataKey="forecastLow"
            stroke="rgb(148, 163, 184)"
            strokeWidth={2}
            strokeDasharray="5 5"
            name="예상 하단"
            dot={{ r: 4, fill: 'rgb(148, 163, 184)' }}
            activeDot={{ r: 6 }}
            connectNulls={false}
          />
        </LineChart>
      </ResponsiveContainer>
      {description && (
        <p className="mt-2 text-center text-sm text-gray-600 dark:text-gray-400">{description}</p>
      )}
    </div>
  )
}
