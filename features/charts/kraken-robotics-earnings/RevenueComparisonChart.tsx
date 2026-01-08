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

interface RevenueComparisonData {
  period: string
  product: number
  service: number
}

interface RevenueComparisonChartProps {
  data?: RevenueComparisonData[]
  title?: string
  height?: number
  productLabel?: string
  serviceLabel?: string
  productColor?: string
  serviceColor?: string
}

const defaultData: RevenueComparisonData[] = [
  { period: 'Q3 2024', product: 12492, service: 7058 },
  { period: 'Q3 2025', product: 18258, service: 13040 },
]

export default function RevenueComparisonChart({
  data = defaultData,
  title = '제품 vs 서비스 매출 구성 비교',
  height = 400,
  productLabel = '제품 매출',
  serviceLabel = '서비스 매출',
  productColor = 'rgba(16, 185, 129, 0.8)',
  serviceColor = 'rgba(249, 115, 22, 0.8)',
}: RevenueComparisonChartProps) {
  return (
    <div className="my-8 w-full">
      {title && <h4 className="mb-4 text-center text-lg font-semibold">{title}</h4>}
      <ResponsiveContainer width="100%" height={height}>
        <BarChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" className="stroke-gray-300 dark:stroke-gray-700" />
          <XAxis dataKey="period" className="text-sm" />
          <YAxis className="text-sm" />
          <Tooltip
            contentStyle={{
              backgroundColor: 'rgba(255, 255, 255, 0.95)',
              border: '1px solid #ccc',
              borderRadius: '8px',
            }}
            formatter={(value: number) => `$${value.toLocaleString()}`}
          />
          <Legend />
          <Bar
            dataKey="product"
            stackId="a"
            fill={productColor}
            name={productLabel}
            radius={[0, 0, 0, 0]}
          />
          <Bar
            dataKey="service"
            stackId="a"
            fill={serviceColor}
            name={serviceLabel}
            radius={[8, 8, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
