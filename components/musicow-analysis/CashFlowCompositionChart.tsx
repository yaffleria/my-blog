'use client'

import React, { useEffect, useState } from 'react'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Cell,
} from 'recharts'

interface CashFlowData {
  name: string
  전송: number
  방송: number
  공연: number
  type: 'good' | 'bad'
}

interface CashFlowCompositionChartProps {
  data?: CashFlowData[]
  title?: string
  height?: number
}

const defaultData: CashFlowData[] = [
  { name: 'god\n(추천)', 전송: 99, 방송: 0.5, 공연: 0.5, type: 'good' },
  { name: '차태현\n(추천)', 전송: 98, 방송: 1, 공연: 1, type: 'good' },
  { name: '쏜애플\n(추천)', 전송: 97, 방송: 2, 공연: 1, type: 'good' },
  { name: '방송형\n(비추)', 전송: 45, 방송: 50, 공연: 5, type: 'bad' },
  { name: '이벤트형\n(비추)', 전송: 30, 방송: 20, 공연: 50, type: 'bad' },
]

export default function CashFlowCompositionChart({
  data = defaultData,
  title = '저작권료 구성 비교: 전송 비중이 핵심이다',
  height = 400,
}: CashFlowCompositionChartProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="my-8 w-full">
        {title && <h4 className="mb-4 text-center text-lg font-semibold">{title}</h4>}
        <div style={{ height }} className="animate-pulse rounded-xl bg-gray-100 dark:bg-gray-800" />
      </div>
    )
  }

  return (
    <div className="my-10 w-full rounded-2xl bg-gradient-to-br from-white/80 to-gray-50/80 p-6 shadow-lg ring-1 ring-gray-200/50 backdrop-blur-sm dark:from-gray-900/80 dark:to-gray-800/80 dark:ring-gray-700/50">
      {title && (
        <h4 className="mb-6 text-center text-xl font-bold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h4>
      )}
      <ResponsiveContainer width="100%" height={height}>
        <BarChart
          data={data}
          layout="vertical"
          margin={{ top: 20, right: 30, left: 80, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" className="stroke-gray-200 dark:stroke-gray-700" />
          <XAxis
            type="number"
            domain={[0, 100]}
            tickFormatter={(value) => `${value}%`}
            className="text-sm"
          />
          <YAxis
            dataKey="name"
            type="category"
            width={70}
            className="text-sm"
            tick={{ fontSize: 12 }}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: 'rgba(255, 255, 255, 0.98)',
              border: 'none',
              borderRadius: '12px',
              boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)',
              padding: '12px 16px',
            }}
            formatter={(value: number) => [`${value}%`, '']}
            labelStyle={{ fontWeight: 'bold', marginBottom: '8px' }}
          />
          <Legend
            wrapperStyle={{ paddingTop: '20px' }}
            formatter={(value) => <span className="text-sm font-medium">{value}</span>}
          />
          <Bar
            dataKey="전송"
            stackId="a"
            fill="#10B981"
            name="전송 (스트리밍)"
            radius={[0, 0, 0, 0]}
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-streaming-${index}`}
                fill={entry.type === 'good' ? '#10B981' : '#6EE7B7'}
                opacity={entry.type === 'good' ? 1 : 0.5}
              />
            ))}
          </Bar>
          <Bar dataKey="방송" stackId="a" fill="#F59E0B" name="방송" radius={[0, 0, 0, 0]}>
            {data.map((entry, index) => (
              <Cell
                key={`cell-broadcast-${index}`}
                fill={entry.type === 'good' ? '#F59E0B' : '#FBBF24'}
                opacity={entry.type === 'good' ? 1 : 0.8}
              />
            ))}
          </Bar>
          <Bar dataKey="공연" stackId="a" fill="#EF4444" name="공연" radius={[0, 4, 4, 0]}>
            {data.map((entry, index) => (
              <Cell
                key={`cell-concert-${index}`}
                fill={entry.type === 'good' ? '#EF4444' : '#F87171'}
                opacity={entry.type === 'good' ? 1 : 0.8}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
      <p className="mt-4 text-center text-sm text-gray-600 dark:text-gray-400">
        💡 <strong className="text-emerald-600 dark:text-emerald-400">초록색(전송)</strong> 비중이
        90% 이상인 곡만 매수하세요
      </p>
    </div>
  )
}
