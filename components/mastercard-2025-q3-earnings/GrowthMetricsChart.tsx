'use client'

import React from 'react'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Cell,
} from 'recharts'

const data = [
  { metric: '전체 매출', growth: 17 },
  { metric: '부가가치 서비스', growth: 25 },
  { metric: '교차국경 거래', growth: 15 },
  { metric: '기본 결제 수익', growth: 12 },
]

const COLORS = [
  'rgba(59, 130, 246, 0.8)',
  'rgba(236, 72, 153, 0.8)',
  'rgba(16, 185, 129, 0.8)',
  'rgba(249, 115, 22, 0.8)',
]

export default function GrowthMetricsChart() {
  return (
    <div className="my-8 w-full">
      <h4 className="mb-4 text-center text-lg font-semibold">
        2025년 3분기 주요 지표 성장률 (전년 대비)
      </h4>
      <ResponsiveContainer width="100%" height={350}>
        <BarChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }} layout="vertical">
          <CartesianGrid strokeDasharray="3 3" className="stroke-gray-300 dark:stroke-gray-700" />
          <XAxis type="number" unit="%" className="text-sm" />
          <YAxis dataKey="metric" type="category" className="text-sm" width={120} />
          <Tooltip
            contentStyle={{
              backgroundColor: 'rgba(255, 255, 255, 0.95)',
              border: '1px solid #ccc',
              borderRadius: '8px',
            }}
            formatter={(value: number) => `+${value}%`}
          />
          <Bar dataKey="growth" name="성장률" radius={[0, 8, 8, 0]}>
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index]} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
      <p className="mt-4 text-center text-sm text-gray-600 dark:text-gray-400">
        부가가치 서비스가 가장 높은 성장률을 기록하며 수익 다각화 전략 성공
      </p>
    </div>
  )
}
