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
  ReferenceLine,
  Cell,
} from 'recharts'

interface TaxOptimizationData {
  name: string
  dividend: number
  tax: number
  net: number
}

interface TaxOptimizationChartProps {
  title?: string
  height?: number
}

const concentratedData: TaxOptimizationData[] = [
  { name: '종목 A (몰빵)', dividend: 15000, tax: 2310, net: 12690 },
]

const distributedData: TaxOptimizationData[] = [
  { name: '종목 A', dividend: 5000, tax: 0, net: 5000 },
  { name: '종목 B', dividend: 4500, tax: 0, net: 4500 },
  { name: '종목 C', dividend: 3000, tax: 0, net: 3000 },
  { name: '종목 D', dividend: 2500, tax: 0, net: 2500 },
]

export default function TaxOptimizationChart({
  title = '세금 최적화: 분산 투자의 마법',
  height = 350,
}: TaxOptimizationChartProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="my-8 w-full">
        {title && <h4 className="mb-4 text-center text-lg font-semibold">{title}</h4>}
        <div
          style={{ height: height * 2 + 100 }}
          className="animate-pulse rounded-xl bg-gray-100 dark:bg-gray-800"
        />
      </div>
    )
  }

  const concentratedTotal = concentratedData.reduce((sum, d) => sum + d.dividend, 0)
  const concentratedTax = concentratedData.reduce((sum, d) => sum + d.tax, 0)
  const concentratedNet = concentratedData.reduce((sum, d) => sum + d.net, 0)

  const distributedTotal = distributedData.reduce((sum, d) => sum + d.dividend, 0)
  const distributedTax = distributedData.reduce((sum, d) => sum + d.tax, 0)
  const distributedNet = distributedData.reduce((sum, d) => sum + d.net, 0)

  return (
    <div className="my-10 w-full rounded-2xl bg-linear-to-br from-white/80 to-gray-50/80 p-6 shadow-lg ring-1 ring-gray-200/50 backdrop-blur-sm dark:from-gray-900/80 dark:to-gray-800/80 dark:ring-gray-700/50">
      {title && (
        <h4 className="mb-6 text-center text-xl font-bold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h4>
      )}

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* 집중 투자 (세금 발생) */}
        <div className="rounded-xl bg-red-50/50 p-4 ring-1 ring-red-200/50 dark:bg-red-900/20 dark:ring-red-800/50">
          <h5 className="mb-4 flex items-center gap-2 text-lg font-semibold text-red-700 dark:text-red-400">
            <span>❌</span> 집중 투자 (100만원 → 1종목)
          </h5>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={concentratedData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid
                strokeDasharray="3 3"
                className="stroke-gray-200 dark:stroke-gray-700"
              />
              <XAxis dataKey="name" className="text-xs" />
              <YAxis
                className="text-xs"
                tickFormatter={(value) => `${(value / 1000).toFixed(0)}K`}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: 'rgba(255, 255, 255, 0.98)',
                  border: 'none',
                  borderRadius: '12px',
                  boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)',
                }}
                formatter={(value: number) => [`₩${value.toLocaleString()}`, '']}
              />
              <ReferenceLine
                y={7000}
                stroke="#F59E0B"
                strokeDasharray="5 5"
                label={{ value: '7,000원 기준', position: 'right', fontSize: 10 }}
              />
              <Bar dataKey="dividend" fill="#3B82F6" name="월 배당" radius={[4, 4, 0, 0]} />
              <Bar dataKey="tax" fill="#EF4444" name="세금 (15.4%)" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
          <div className="mt-4 rounded-lg bg-white/80 p-3 dark:bg-gray-800/80">
            <div className="grid grid-cols-3 gap-2 text-center text-sm">
              <div>
                <p className="text-gray-500">총 배당</p>
                <p className="font-bold text-blue-600">₩{concentratedTotal.toLocaleString()}</p>
              </div>
              <div>
                <p className="text-gray-500">세금</p>
                <p className="font-bold text-red-600">-₩{concentratedTax.toLocaleString()}</p>
              </div>
              <div>
                <p className="text-gray-500">실수령</p>
                <p className="font-bold text-gray-900 dark:text-white">
                  ₩{concentratedNet.toLocaleString()}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 분산 투자 (세금 0원) */}
        <div className="rounded-xl bg-emerald-50/50 p-4 ring-1 ring-emerald-200/50 dark:bg-emerald-900/20 dark:ring-emerald-800/50">
          <h5 className="mb-4 flex items-center gap-2 text-lg font-semibold text-emerald-700 dark:text-emerald-400">
            <span>✅</span> 분산 투자 (100만원 → 4종목)
          </h5>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={distributedData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid
                strokeDasharray="3 3"
                className="stroke-gray-200 dark:stroke-gray-700"
              />
              <XAxis dataKey="name" className="text-xs" />
              <YAxis
                className="text-xs"
                tickFormatter={(value) => `${(value / 1000).toFixed(0)}K`}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: 'rgba(255, 255, 255, 0.98)',
                  border: 'none',
                  borderRadius: '12px',
                  boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)',
                }}
                formatter={(value: number) => [`₩${value.toLocaleString()}`, '']}
              />
              <ReferenceLine
                y={7000}
                stroke="#F59E0B"
                strokeDasharray="5 5"
                label={{ value: '7,000원 기준', position: 'right', fontSize: 10 }}
              />
              <Bar dataKey="dividend" name="월 배당" radius={[4, 4, 0, 0]}>
                {distributedData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill="#10B981" />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
          <div className="mt-4 rounded-lg bg-white/80 p-3 dark:bg-gray-800/80">
            <div className="grid grid-cols-3 gap-2 text-center text-sm">
              <div>
                <p className="text-gray-500">총 배당</p>
                <p className="font-bold text-blue-600">₩{distributedTotal.toLocaleString()}</p>
              </div>
              <div>
                <p className="text-gray-500">세금</p>
                <p className="font-bold text-emerald-600">₩{distributedTax}</p>
              </div>
              <div>
                <p className="text-gray-500">실수령</p>
                <p className="font-bold text-gray-900 dark:text-white">
                  ₩{distributedNet.toLocaleString()}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 비교 요약 */}
      <div className="mt-6 rounded-xl bg-linear-to-r from-amber-50 to-yellow-50 p-4 ring-1 ring-amber-200/50 dark:from-amber-900/20 dark:to-yellow-900/20 dark:ring-amber-800/50">
        <div className="flex flex-col items-center justify-center gap-4 md:flex-row">
          <div className="text-center">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              같은 100만원 투자, 같은 15,000원 배당
            </p>
            <p className="mt-1 text-2xl font-bold text-amber-700 dark:text-amber-400">
              세금 차이: ₩{(concentratedTax - distributedTax).toLocaleString()}
            </p>
          </div>
          <div className="rounded-lg bg-white/80 px-6 py-3 text-center dark:bg-gray-800/80">
            <p className="text-sm text-gray-500">실질 수익률 상승</p>
            <p className="text-3xl font-black text-emerald-600">
              +{((concentratedTax / concentratedNet) * 100).toFixed(1)}%
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
