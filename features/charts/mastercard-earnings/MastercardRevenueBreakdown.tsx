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
  {
    category: '기본 결제 수익',
    percentage: 60,
    growth: 12,
  },
  {
    category: '부가가치 서비스',
    percentage: 40,
    growth: 25,
  },
]

const COLORS = ['rgba(99, 102, 241, 0.8)', 'rgba(236, 72, 153, 0.8)']

export default function MastercardRevenueBreakdown() {
  return (
    <div className="my-8 w-full">
      <h4 className="mb-4 text-center text-lg font-semibold">
        Mastercard 매출 구성 및 성장률 (2025 Q3)
      </h4>
      <ResponsiveContainer width="100%" height={350}>
        <BarChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" className="stroke-gray-300 dark:stroke-gray-700" />
          <XAxis dataKey="category" className="text-sm" />
          <YAxis className="text-sm" label={{ value: '(%)', angle: -90, position: 'insideLeft' }} />
          <Tooltip
            contentStyle={{
              backgroundColor: 'rgba(255, 255, 255, 0.95)',
              border: '1px solid #ccc',
              borderRadius: '8px',
            }}
            formatter={(value: number, name: string) => {
              if (name === '매출 비중') return `${value}%`
              if (name === '성장률') return `+${value}%`
              return value
            }}
          />
          <Legend />
          <Bar dataKey="percentage" name="매출 비중" fill={COLORS[0]} radius={[8, 8, 0, 0]}>
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index]} />
            ))}
          </Bar>
          <Bar
            dataKey="growth"
            name="성장률"
            fill="rgba(16, 185, 129, 0.8)"
            radius={[8, 8, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
      <p className="mt-4 text-center text-sm text-gray-600 dark:text-gray-400">
        부가가치 서비스는 전체 매출의 40%를 차지하며, 기본 결제 수익보다 2배 이상 빠르게 성장
      </p>
    </div>
  )
}
