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

interface AssetCompositionData {
  period: string
  cash: number
  receivables: number
  inventory: number
  assets: number
}

interface AssetCompositionChartProps {
  data?: AssetCompositionData[]
  title?: string
  height?: number
  labels?: {
    cash?: string
    receivables?: string
    inventory?: string
    assets?: string
  }
  colors?: {
    cash?: string
    receivables?: string
    inventory?: string
    assets?: string
  }
}

const defaultData: AssetCompositionData[] = [
  {
    period: '2024년 12월',
    cash: 58518,
    receivables: 36406,
    inventory: 19058,
    assets: 27820,
  },
  {
    period: '2025년 9월',
    cash: 126626,
    receivables: 47487,
    inventory: 29047,
    assets: 75554,
  },
]

export default function AssetCompositionChart({
  data = defaultData,
  title = '자산 구성 변화',
  height = 400,
  labels = {},
  colors = {},
}: AssetCompositionChartProps) {
  const defaultLabels = {
    cash: '현금 및 현금성자산',
    receivables: '매출채권 및 계약자산',
    inventory: '재고자산',
    assets: '유형/무형자산 및 영업권',
  }

  const defaultColors = {
    cash: 'rgba(34, 197, 94, 0.8)',
    receivables: 'rgba(59, 130, 246, 0.8)',
    inventory: 'rgba(249, 115, 22, 0.8)',
    assets: 'rgba(139, 92, 246, 0.8)',
  }

  const finalLabels = { ...defaultLabels, ...labels }
  const finalColors = { ...defaultColors, ...colors }

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
            dataKey="cash"
            fill={finalColors.cash}
            name={finalLabels.cash}
            radius={[4, 4, 0, 0]}
          />
          <Bar
            dataKey="receivables"
            fill={finalColors.receivables}
            name={finalLabels.receivables}
            radius={[4, 4, 0, 0]}
          />
          <Bar
            dataKey="inventory"
            fill={finalColors.inventory}
            name={finalLabels.inventory}
            radius={[4, 4, 0, 0]}
          />
          <Bar
            dataKey="assets"
            fill={finalColors.assets}
            name={finalLabels.assets}
            radius={[4, 4, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
