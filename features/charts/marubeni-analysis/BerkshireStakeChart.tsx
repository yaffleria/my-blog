'use client'

import React from 'react'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LabelList,
} from 'recharts'

export default function BerkshireStakeChart() {
  const data = [
    { period: 'Initial (2020)', stake: 5.0 },
    { period: 'Apr 2023', stake: 7.4 },
    { period: 'Feb 2024', stake: 9.0 },
    { period: 'Aug 2025', stake: 10.2 },
  ]

  return (
    <div className="my-8 w-full">
      <h4 className="mb-4 text-center text-lg font-semibold">
        Berkshire Hathaway Stake in Japanese Trading Houses
      </h4>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="period" tick={{ fontSize: 12 }} />
          <YAxis domain={[0, 12]} tickFormatter={(value) => `${value}%`} tick={{ fontSize: 12 }} />
          <Tooltip
            cursor={{ fill: 'transparent' }}
            formatter={(value: number) => [`${value}%`, 'Stake']}
            contentStyle={{ borderRadius: '8px' }}
          />
          <Bar dataKey="stake" fill="#1e3a8a" radius={[4, 4, 0, 0]} barSize={50}>
            <LabelList dataKey="stake" position="top" formatter={(value: number) => `${value}%`} />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
      <div className="mt-2 text-center text-sm text-gray-500">
        *Data Source: Berkshire Hathaway Filings (Approximate average stakes, with Mitsubishi
        peaking {'>'}10% in 2025)*
      </div>
    </div>
  )
}
