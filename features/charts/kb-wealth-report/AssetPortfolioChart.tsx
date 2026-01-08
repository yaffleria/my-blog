'use client'

import React from 'react'
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts'

const data = [
  { name: '부동산 자산', value: 54.8, color: '#F97316' }, // Orange 500
  { name: '금융 자산', value: 37.1, color: '#3B82F6' }, // Blue 500
  { name: '기타 자산', value: 8.1, color: '#10B981' }, // Emerald 500
]

const RADIAN = Math.PI / 180
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5
  const x = cx + radius * Math.cos(-midAngle * RADIAN)
  const y = cy + radius * Math.sin(-midAngle * RADIAN)

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(1)}%`}
    </text>
  )
}

export default function AssetPortfolioChart() {
  return (
    <div className="my-8 w-full">
      <h4 className="mb-4 text-center text-lg font-semibold">2025 한국 부자 총자산 포트폴리오</h4>
      <div className="h-[350px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={renderCustomizedLabel}
              outerRadius={120}
              fill="#8884d8"
              dataKey="value"
              startAngle={90}
              endAngle={-270}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip
              formatter={(value: number) => `${value}%`}
              contentStyle={{
                backgroundColor: 'rgba(255, 255, 255, 0.95)',
                border: '1px solid #ccc',
                borderRadius: '8px',
                color: '#333',
              }}
              itemStyle={{ color: '#333' }}
            />
            <Legend verticalAlign="bottom" height={36} />
          </PieChart>
        </ResponsiveContainer>
      </div>
      <p className="mt-4 text-center text-sm text-gray-600 dark:text-gray-400">
        여전히 부동산 비중이 높지만, 55% 아래로 떨어진 점이 주목할 만합니다.
      </p>
    </div>
  )
}
