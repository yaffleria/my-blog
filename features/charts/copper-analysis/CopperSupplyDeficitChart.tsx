'use client'

import React from 'react'
import {
  ComposedChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts'

interface CopperSupplyDeficitChartProps {
  title?: string
  height?: number
  description?: string
}

export default function CopperSupplyDeficitChart({
  title = 'Projected Copper Supply vs Demand Deficit',
  height = 400,
  description = 'Unit: Thousand Tonnes | Bars: Supply/Demand, Line: Supply Deficit',
}: CopperSupplyDeficitChartProps) {
  const data = [
    { year: '2024', Supply: 26000, Demand: 25800, Deficit: 200 },
    { year: '2025', Supply: 26500, Demand: 26800, Deficit: -300 },
    { year: '2026', Supply: 26800, Demand: 27500, Deficit: -700 },
    { year: '2027', Supply: 27000, Demand: 28500, Deficit: -1500 },
    { year: '2028', Supply: 27200, Demand: 29800, Deficit: -2600 },
    { year: '2029', Supply: 27300, Demand: 31000, Deficit: -3700 },
    { year: '2030', Supply: 27400, Demand: 32500, Deficit: -5100 },
  ]

  return (
    <div className="my-8 w-full">
      {title && <h4 className="mb-4 text-center text-lg font-semibold">{title}</h4>}
      <ResponsiveContainer width="100%" height={height}>
        <ComposedChart data={data} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis dataKey="year" scale="band" />
          <YAxis yAxisId="left" orientation="left" />
          <YAxis yAxisId="right" orientation="right" />
          <Tooltip
            contentStyle={{
              backgroundColor: 'rgba(255, 255, 255, 0.95)',
              border: '1px solid #ccc',
              borderRadius: '8px',
            }}
            itemStyle={{ padding: 0 }}
          />
          <Legend />
          <Bar yAxisId="left" dataKey="Supply" barSize={20} fill="#413ea0" name="Total Supply" />
          <Bar yAxisId="left" dataKey="Demand" barSize={20} fill="#ff7300" name="Total Demand" />
          <Line
            yAxisId="right"
            type="monotone"
            dataKey="Deficit"
            stroke="#ff0000"
            strokeWidth={3}
            name="Supply Deficit"
          />
        </ComposedChart>
      </ResponsiveContainer>
      {description && (
        <p className="mt-2 text-center text-sm text-gray-600 dark:text-gray-400">{description}</p>
      )}
    </div>
  )
}
