'use client'

import React from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

interface EBITDAData {
  quarter: string
  ebitda: number
}

interface EBITDAChartProps {
  data?: EBITDAData[]
  title?: string
  height?: number
  label?: string
  barColor?: string
}

const defaultData: EBITDAData[] = [
  { quarter: 'Q3 2024', ebitda: 4148 },
  { quarter: 'Q4 2024', ebitda: 6245 },
  { quarter: 'Q1 2025', ebitda: 3734 },
  { quarter: 'Q2 2025', ebitda: 3734 },
  { quarter: 'Q3 2025', ebitda: 7979 },
]

export default function EBITDAChart({
  data = defaultData,
  title = '조정 EBITDA 성장 추이',
  height = 300,
  label = '조정 EBITDA (천 CAD)',
  barColor = 'rgb(34, 197, 94)',
}: EBITDAChartProps) {
  return (
    <div className="my-8 w-full">
      {title && <h4 className="mb-4 text-center text-lg font-semibold">{title}</h4>}
      <ResponsiveContainer width="100%" height={height}>
        <BarChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" className="stroke-gray-300 dark:stroke-gray-700" />
          <XAxis dataKey="quarter" className="text-sm" />
          <YAxis className="text-sm" />
          <Tooltip
            contentStyle={{
              backgroundColor: 'rgba(255, 255, 255, 0.95)',
              border: '1px solid #ccc',
              borderRadius: '8px',
            }}
            formatter={(value: number) => `$${value.toLocaleString()}`}
          />
          <Bar dataKey="ebitda" fill={barColor} name={label} radius={[8, 8, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
