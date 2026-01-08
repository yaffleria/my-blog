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
} from 'recharts'

const data = [
  {
    name: '부동산투자',
    2011: 45.8,
    2025: 22.0,
  },
  {
    name: '사업소득',
    2011: 28.4,
    2025: 34.5,
  },
  {
    name: '금융투자',
    2011: 8.2,
    2025: 16.8,
  },
  {
    name: '상속·증여',
    2011: 13.7,
    2025: 16.5,
  },
  {
    name: '근로소득',
    2011: 3.9,
    2025: 10.3,
  },
]

export default function WealthSourceChart() {
  return (
    <div className="my-8 w-full">
      <h4 className="mb-4 text-center text-lg font-semibold">부의 원천 변화 (2011년 vs 2025년)</h4>
      <div className="h-[400px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" className="stroke-gray-300 dark:stroke-gray-700" />
            <XAxis dataKey="name" className="text-sm" />
            <YAxis unit="%" className="text-sm" />
            <Tooltip
              contentStyle={{
                backgroundColor: 'rgba(255, 255, 255, 0.95)',
                border: '1px solid #ccc',
                borderRadius: '8px',
                color: '#333',
              }}
              itemStyle={{ color: '#333' }}
              labelStyle={{ color: '#333', fontWeight: 'bold' }}
            />
            <Legend />
            <Bar dataKey="2011" fill="#8B5CF6" name="2011년" />
            <Bar dataKey="2025" fill="#10B981" name="2025년" />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <p className="mt-4 text-center text-sm text-gray-600 dark:text-gray-400">
        부동산 투자의 비중이 15년 만에 절반 이하로 줄어든 반면, 사업·금융·근로 소득의 비중은
        확대되었습니다.
      </p>
    </div>
  )
}
