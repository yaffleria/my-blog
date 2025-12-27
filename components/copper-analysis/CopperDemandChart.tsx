'use client'

import React from 'react'
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts'

interface CopperDemandChartProps {
  title?: string
  height?: number
  description?: string
}

export default function CopperDemandChart({
  title = 'Global Copper Demand Forecast (2023-2030)',
  height = 400,
  description = '단위: 백만 톤 (Million Tonnes) | 출처: Goldman Sachs, IEA, Market Research',
}: CopperDemandChartProps) {
  const data = [
    { year: '2023', Traditional: 19.5, EV: 1.2, Renewables: 1.8, AI_Grid: 3.5 },
    { year: '2024', Traditional: 19.8, EV: 1.6, Renewables: 2.1, AI_Grid: 3.9 },
    { year: '2025', Traditional: 20.0, EV: 2.2, Renewables: 2.5, AI_Grid: 4.5 },
    { year: '2026', Traditional: 20.2, EV: 2.8, Renewables: 2.9, AI_Grid: 5.2 },
    { year: '2027', Traditional: 20.4, EV: 3.5, Renewables: 3.4, AI_Grid: 6.0 },
    { year: '2028', Traditional: 20.6, EV: 4.2, Renewables: 3.9, AI_Grid: 6.9 },
    { year: '2029', Traditional: 20.8, EV: 5.0, Renewables: 4.5, AI_Grid: 7.9 },
    { year: '2030', Traditional: 21.0, EV: 5.9, Renewables: 5.1, AI_Grid: 9.0 },
  ]

  return (
    <div className="my-8 w-full">
      {title && <h4 className="mb-4 text-center text-lg font-semibold">{title}</h4>}
      <ResponsiveContainer width="100%" height={height}>
        <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" className="stroke-gray-300 dark:stroke-gray-700" />
          <XAxis dataKey="year" className="text-sm" />
          <YAxis className="text-sm" />
          <Tooltip
            contentStyle={{
              backgroundColor: 'rgba(255, 255, 255, 0.95)',
              border: '1px solid #ccc',
              borderRadius: '8px',
            }}
            itemStyle={{ padding: 0 }}
          />
          <Legend />
          <Area
            type="monotone"
            dataKey="Traditional"
            stackId="1"
            stroke="#8884d8"
            fill="#8884d8"
            name="Traditional (Construction/Tech)"
          />
          <Area
            type="monotone"
            dataKey="EV"
            stackId="1"
            stroke="#82ca9d"
            fill="#82ca9d"
            name="Electric Vehicles"
          />
          <Area
            type="monotone"
            dataKey="Renewables"
            stackId="1"
            stroke="#ffc658"
            fill="#ffc658"
            name="Renewables (Solar/Wind)"
          />
          <Area
            type="monotone"
            dataKey="AI_Grid"
            stackId="1"
            stroke="#ff7300"
            fill="#ff7300"
            name="AI & Grid Infrastructure"
          />
        </AreaChart>
      </ResponsiveContainer>
      {description && (
        <p className="mt-2 text-center text-sm text-gray-600 dark:text-gray-400">{description}</p>
      )}
    </div>
  )
}
