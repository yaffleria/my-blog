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

const PieChart: React.FC<PieChartProps> = ({
  data,
  outerRadius: propsOuterRadius = 130,
  innerRadius = 0,
  title,
}) => {
  const [mounted, setMounted] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    setMounted(true)
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Adjust radius and height for mobile
  // On mobile, names can be long, so we need extra space for labels
  const effectiveOuterRadius = isMobile ? 80 : propsOuterRadius
  const containerHeight = isMobile ? 250 : 300

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
        className={isMobile ? 'text-[10px] font-bold' : 'text-xs font-bold'}
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
    outerRadius,
    name,
  }: {
    cx: number
    cy: number
    midAngle: number
    outerRadius: number
    name: string
  }) => {
    const radius = outerRadius * (isMobile ? 1.12 : 1.15)
    const x = cx + radius * Math.cos(-midAngle * RADIAN)
    const y = cy + radius * Math.sin(-midAngle * RADIAN)

    const lineStartRadius = outerRadius
    const lineEndRadius = outerRadius * (isMobile ? 1.08 : 1.12)

    const sx = cx + lineStartRadius * Math.cos(-midAngle * RADIAN)
    const sy = cy + lineStartRadius * Math.sin(-midAngle * RADIAN)

    const ex = cx + lineEndRadius * Math.cos(-midAngle * RADIAN)
    const ey = cy + lineEndRadius * Math.sin(-midAngle * RADIAN)

    return (
      <g>
        <path d={`M${sx},${sy}L${ex},${ey}`} stroke="#9ca3af" fill="none" strokeWidth={1} />
        <text
          x={x}
          y={y}
          fill="#374151"
          textAnchor={x > cx ? 'start' : 'end'}
          dominantBaseline="central"
          className={`${isMobile ? 'text-[11px]' : 'text-sm'} font-medium dark:fill-gray-300`}
        >
          {name}
        </text>
      </g>
    )
  }

  if (!mounted) {
    return (
      <div className="my-8 flex flex-col items-center justify-center p-4">
        {title && (
          <h3 className="mb-6 text-center text-xl font-bold text-gray-800 dark:text-gray-100">
            {title}
          </h3>
        )}
        <div
          style={{ width: '100%', height: containerHeight }}
          className="rounded-xl bg-gray-50 dark:bg-gray-800/50"
        />
      </div>
    )
  }

  return (
    <div className="my-10 flex flex-col items-center justify-center rounded-2xl bg-white/50 p-6 shadow-sm ring-1 ring-gray-100 backdrop-blur-sm dark:bg-gray-900/50 dark:ring-gray-800">
      {title && (
        <h3 className="mb-2 text-center text-xl font-bold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h3>
      )}
      <div style={{ width: '100%', height: containerHeight }}>
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
              outerRadius={effectiveOuterRadius}
              innerRadius={innerRadius}
              fill="#8884d8"
              dataKey="value"
              label={renderInnerLabel}
              isAnimationActive={mounted}
              animationDuration={1000}
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                  stroke="rgba(255,255,255,0.2)"
                  strokeWidth={2}
                />
              ))}
            </Pie>

            {/* Transparent Pie for Outer Labels (Names) with Lines */}
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              startAngle={90}
              endAngle={-270}
              outerRadius={effectiveOuterRadius}
              innerRadius={effectiveOuterRadius - 1}
              fill="none"
              stroke="none"
              dataKey="value"
              label={renderOuterLabel}
              labelLine={false}
              isAnimationActive={false}
            />

            <Tooltip
              contentStyle={{
                backgroundColor: 'rgba(255, 255, 255, 0.98)',
                borderRadius: '12px',
                border: 'none',
                boxShadow:
                  '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
                padding: '12px',
              }}
              itemStyle={{ fontWeight: '600', color: '#111827' }}
              formatter={(value: number) => [`${value.toFixed(1)}%`, 'Portion']}
            />
          </RechartsPieChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default PieChart
