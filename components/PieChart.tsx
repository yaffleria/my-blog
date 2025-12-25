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

const RADIAN = Math.PI / 180

const renderInnerLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
}: {
  cx: number
  cy: number
  midAngle: number
  innerRadius: number
  outerRadius: number
  percent: number
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5
  const x = cx + radius * Math.cos(-midAngle * RADIAN)
  const y = cy + radius * Math.sin(-midAngle * RADIAN)

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor="middle"
      dominantBaseline="central"
      className="text-xs font-bold"
      style={{ textShadow: '0px 0px 3px rgba(0,0,0,0.5)' }}
    >
      {`${(percent * 100).toFixed(1)}%`}
    </text>
  )
}

const renderOuterLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  name,
}: {
  cx: number
  cy: number
  midAngle: number
  innerRadius: number
  outerRadius: number
  name: string
}) => {
  const RADIAN = Math.PI / 180
  const radius = outerRadius * 1.15
  const x = cx + radius * Math.cos(-midAngle * RADIAN)
  const y = cy + radius * Math.sin(-midAngle * RADIAN)

  // Calculate coordinates for the leader line (인출선)
  const lineStartRadius = outerRadius
  const lineEndRadius = outerRadius * 1.12

  const sx = cx + lineStartRadius * Math.cos(-midAngle * RADIAN)
  const sy = cy + lineStartRadius * Math.sin(-midAngle * RADIAN)

  const ex = cx + lineEndRadius * Math.cos(-midAngle * RADIAN)
  const ey = cy + lineEndRadius * Math.sin(-midAngle * RADIAN)

  return (
    <g>
      <path
        d={`M${sx},${sy}L${ex},${ey}`}
        stroke="#9ca3af" // Gray-400 equivalent for visibility in both modes (or customize as needed)
        fill="none"
      />
      <text
        x={x}
        y={y}
        fill="#374151"
        textAnchor={x > cx ? 'start' : 'end'}
        dominantBaseline="central"
        className="text-sm font-medium dark:fill-gray-300"
      >
        {name}
      </text>
    </g>
  )
}

const PieChart: React.FC<PieChartProps> = ({ data, outerRadius = 130, innerRadius = 0, title }) => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="flex flex-col items-center justify-center p-4">
        {title && <h3 className="mb-4 text-lg font-bold">{title}</h3>}
        <div
          style={{ width: '100%', height: 450 }}
          className="rounded-lg bg-gray-200 dark:bg-gray-700"
        />
      </div>
    )
  }

  return (
    <div className="flex flex-col items-center justify-center p-4">
      {title && <h3 className="mb-4 text-lg font-bold">{title}</h3>}
      <div style={{ width: '100%', height: 450 }}>
        <ResponsiveContainer width="100%" height="100%">
          <RechartsPieChart>
            {/* Main Pie with Colors and Inner Percentage */}
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              startAngle={90}
              endAngle={-270}
              labelLine={false}
              outerRadius={outerRadius}
              innerRadius={innerRadius}
              fill="#8884d8"
              dataKey="value"
              label={renderInnerLabel}
              isAnimationActive={false}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>

            {/* Transparent Pie for Outer Labels (Names) with Lines */}
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              startAngle={90}
              endAngle={-270}
              outerRadius={outerRadius}
              innerRadius={outerRadius - 1}
              fill="none"
              stroke="none"
              dataKey="value"
              label={renderOuterLabel}
              labelLine={false}
              isAnimationActive={false}
            />

            <Tooltip formatter={(value: number) => value.toLocaleString()} />
          </RechartsPieChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default PieChart
