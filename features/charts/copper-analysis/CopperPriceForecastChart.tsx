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
  ReferenceLine,
} from 'recharts'

interface CopperPriceForecastChartProps {
  title?: string
  height?: number
  description?: string
}

export default function CopperPriceForecastChart({
  title = 'Copper Price Forecast (2024-2026)',
  height = 400,
  description = '단위: $/ton | 출처: Goldman Sachs, Citi, JP Morgan Estimates',
}: CopperPriceForecastChartProps) {
  const data = [
    { period: '2024 Q1', price: 8500, forecast: null },
    { period: '2024 Q2', price: 9200, forecast: null },
    { period: '2024 Q3', price: 9600, forecast: null },
    { period: '2024 Q4', price: 9500, forecast: 9500 }, // Connection point
    { period: '2025 Q1 (E)', price: null, forecast: 9800 },
    { period: '2025 Q2 (E)', price: null, forecast: 10500 },
    { period: '2025 Q3 (E)', price: null, forecast: 11200 },
    { period: '2025 Q4 (E)', price: null, forecast: 12000 },
    { period: '2026 Q1 (E)', price: null, forecast: 12800 },
    { period: '2026 Q2 (E)', price: null, forecast: 13500 }, // Bull case scenario
  ]

  return (
    <div className="my-8 w-full">
      {title && <h4 className="mb-4 text-center text-lg font-semibold">{title}</h4>}
      <ResponsiveContainer width="100%" height={height}>
        <LineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" className="stroke-gray-300 dark:stroke-gray-700" />
          <XAxis dataKey="period" className="text-sm" />
          <YAxis domain={[8000, 14000]} className="text-sm" />
          <Tooltip
            contentStyle={{
              backgroundColor: 'rgba(255, 255, 255, 0.95)',
              border: '1px solid #ccc',
              borderRadius: '8px',
            }}
            itemStyle={{ padding: 0 }}
            formatter={(value: number) => `$${value.toLocaleString()}`}
          />
          <Legend />
          <ReferenceLine
            y={10000}
            label="Key Resistance ($10k)"
            stroke="red"
            strokeDasharray="3 3"
          />
          <Line
            type="monotone"
            dataKey="price"
            stroke="#b87333" // Copper color
            strokeWidth={3}
            name="Historical Price"
            dot={{ r: 5, fill: '#b87333' }}
          />
          <Line
            type="monotone"
            dataKey="forecast"
            stroke="#22c55e"
            strokeWidth={3}
            strokeDasharray="5 5"
            name="Consensus Forecast"
            dot={{ r: 5, fill: '#22c55e' }}
          />
        </LineChart>
      </ResponsiveContainer>
      {description && (
        <p className="mt-2 text-center text-sm text-gray-600 dark:text-gray-400">{description}</p>
      )}
    </div>
  )
}
