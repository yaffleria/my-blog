'use client'

import React, { useEffect, useState } from 'react'
import {
  PieChart as RechartsPieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts'

const COLORS = [
  '#0088FE',
  '#00C49F',
  '#FFBB28',
  '#FF8042',
  '#8884d8',
  '#82ca9d',
  '#ffc658',
  '#8dd1e1',
]

interface DataItem {
  name: string
  value: number
}

interface PieChartProps {
  data: DataItem[]
  outerRadius?: number
  innerRadius?: number
  title?: string
}

const PieChart: React.FC<PieChartProps> = ({ data, outerRadius = 100, innerRadius = 0, title }) => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="flex flex-col items-center justify-center p-4">
        {title && <h3 className="mb-4 text-lg font-bold">{title}</h3>}
        <div
          style={{ width: '100%', height: 400 }}
          className="rounded-lg bg-gray-200 dark:bg-gray-700"
        />
      </div>
    )
  }

  return (
    <div className="flex flex-col items-center justify-center p-4">
      {title && <h3 className="mb-4 text-lg font-bold">{title}</h3>}
      <div style={{ width: '100%', height: 400 }}>
        <ResponsiveContainer width="100%" height="100%">
          <RechartsPieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={true}
              outerRadius={outerRadius}
              innerRadius={innerRadius}
              fill="#8884d8"
              dataKey="value"
              label={({ name, percent }: { name: string; percent: number }) =>
                `${name} ${(percent * 100).toFixed(0)}%`
              }
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend verticalAlign="bottom" height={36} />
          </RechartsPieChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default PieChart
