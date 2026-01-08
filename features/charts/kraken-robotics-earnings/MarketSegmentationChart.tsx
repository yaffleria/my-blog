'use client'

import React from 'react'
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts'

interface MarketSegmentData {
  name: string
  value: number
}

interface MarketSegmentationChartProps {
  data?: MarketSegmentData[]
  title?: string
  height?: number
  colors?: string[]
  outerRadius?: number
}

const defaultData: MarketSegmentData[] = [
  { name: '방산 (Defense)', value: 70 },
  { name: '상업 (Commercial)', value: 30 },
]

const defaultColors = ['rgba(239, 68, 68, 0.8)', 'rgba(59, 130, 246, 0.8)']

export default function MarketSegmentationChart({
  data = defaultData,
  title = '시장별 매출 구성 (Q3 2025)',
  height = 300,
  colors = defaultColors,
  outerRadius = 100,
}: MarketSegmentationChartProps) {
  // 외부 라벨 (이름만)
  const renderOuterLabel = ({
    cx,
    cy,
    midAngle,
    outerRadius,
    name,
  }: {
    cx: number
    cy: number
    midAngle: number
    outerRadius: number
    name: string
  }) => {
    const RADIAN = Math.PI / 180
    const radius = outerRadius + 30
    const x = cx + radius * Math.cos(-midAngle * RADIAN)
    const y = cy + radius * Math.sin(-midAngle * RADIAN)

    return (
      <text
        x={x}
        y={y}
        fill="currentColor"
        className="fill-gray-700 dark:fill-gray-300"
        textAnchor={x > cx ? 'start' : 'end'}
        dominantBaseline="central"
      >
        {name}
      </text>
    )
  }

  // 내부 라벨 (비중만)
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
    const RADIAN = Math.PI / 180
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
        className="text-lg font-bold"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    )
  }

  return (
    <div className="my-8 w-full">
      {title && <h4 className="mb-4 text-center text-lg font-semibold">{title}</h4>}
      <ResponsiveContainer width="100%" height={height}>
        <PieChart>
          {/* 메인 파이 - 외부 라벨과 라벨 라인 */}
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={true}
            label={renderOuterLabel}
            outerRadius={outerRadius}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
            ))}
          </Pie>
          {/* 투명 오버레이 - 내부 비중 표시 */}
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderInnerLabel}
            outerRadius={outerRadius}
            fill="transparent"
            dataKey="value"
            stroke="none"
            isAnimationActive={false}
          >
            {data.map((entry, index) => (
              <Cell key={`inner-${index}`} fill="transparent" />
            ))}
          </Pie>
          <Tooltip formatter={(value: number) => `${value}%`} />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}
