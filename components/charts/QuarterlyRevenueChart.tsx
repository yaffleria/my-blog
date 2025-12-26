'use client'

import React from 'react'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts'

interface QuarterlyRevenueData {
  quarter: string
  total: number
  product: number
  service: number
}

interface QuarterlyRevenueChartProps {
  data?: QuarterlyRevenueData[]
  title?: string
  height?: number
  totalLabel?: string
  productLabel?: string
  serviceLabel?: string
}

const defaultData: QuarterlyRevenueData[] = [
  { quarter: 'Q1 2024', total: 21142, product: 18450, service: 4692 },
  { quarter: 'Q2 2024', total: 22491, product: 16813, service: 5678 },
  { quarter: 'Q3 2024', total: 19550, product: 12492, service: 7058 },
  { quarter: 'Q4 2024', total: 25123, product: 14780, service: 10343 },
  { quarter: 'Q1 2025', total: 23766, product: 14685, service: 9081 },
  { quarter: 'Q2 2025', total: 18752, product: 11023, service: 7729 },
  { quarter: 'Q3 2025', total: 31298, product: 18258, service: 13040 },
]

export default function QuarterlyRevenueChart({
  data = defaultData,
  title = '분기별 매출 추이',
  height = 400,
  totalLabel = '총매출 (천 CAD)',
  productLabel = '제품 매출',
  serviceLabel = '서비스 매출',
}: QuarterlyRevenueChartProps) {
  return (
    <div className="my-8 w-full">
      {title && <h4 className="mb-4 text-center text-lg font-semibold">{title}</h4>}
      <ResponsiveContainer width="100%" height={height}>
        <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" className="stroke-gray-300 dark:stroke-gray-700" />
          <XAxis dataKey="quarter" className="text-sm" />
          <YAxis className="text-sm" />
          <Tooltip
            contentStyle={{
              backgroundColor: 'rgba(255, 255, 255, 0.95)',
              border: '1px solid #ccc',
              borderRadius: '8px',
            }}
            labelStyle={{ fontWeight: 'bold' }}
          />
          <Legend />
          <Line
            type="monotone"
            dataKey="total"
            stroke="rgb(59, 130, 246)"
            strokeWidth={2}
            name={totalLabel}
            dot={{ r: 4 }}
            activeDot={{ r: 6 }}
          />
          <Line
            type="monotone"
            dataKey="product"
            stroke="rgb(16, 185, 129)"
            strokeWidth={2}
            name={productLabel}
            dot={{ r: 4 }}
            activeDot={{ r: 6 }}
          />
          <Line
            type="monotone"
            dataKey="service"
            stroke="rgb(249, 115, 22)"
            strokeWidth={2}
            name={serviceLabel}
            dot={{ r: 4 }}
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
