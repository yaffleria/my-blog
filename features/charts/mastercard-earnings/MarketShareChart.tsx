'use client'

import React from 'react'
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts'

const data = [
  { name: 'Visa', value: 61, color: 'rgba(59, 130, 246, 0.8)' },
  { name: 'Mastercard', value: 26, color: 'rgba(236, 72, 153, 0.8)' },
  { name: '기타', value: 13, color: 'rgba(156, 163, 175, 0.6)' },
]

export default function MarketShareChart() {
  return (
    <div className="my-8 w-full">
      <h4 className="mb-4 text-center text-lg font-semibold">글로벌 카드 결제 시장 점유율</h4>
      <ResponsiveContainer width="100%" height={350}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={true}
            label={({ name, value }) => `${name}: ${value}%`}
            outerRadius={100}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip formatter={(value: number) => `${value}%`} />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
      <p className="mt-4 text-center text-sm text-gray-600 dark:text-gray-400">
        Visa와 Mastercard가 전 세계 카드 거래의 87%를 장악
      </p>
    </div>
  )
}
