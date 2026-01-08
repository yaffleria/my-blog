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
  Cell,
  Line,
  ComposedChart,
} from 'recharts'

const data = [
  { year: '2011', count: 130 },
  { year: '2012', count: 142 },
  { year: '2013', count: 163 },
  { year: '2014', count: 167 },
  { year: '2015', count: 182 },
  { year: '2016', count: 211 },
  { year: '2017', count: 242 },
  { year: '2018', count: 278 },
  { year: '2019', count: 323 },
  { year: '2020', count: 354 },
  { year: '2021', count: 393 },
  { year: '2022', count: 424 },
  { year: '2023', count: 456 },
  { year: '2024', count: 461 },
  { year: '2025', count: 476 },
]

export default function RichGrowthChart() {
  return (
    <div className="my-8 w-full">
      <h4 className="mb-4 text-center text-lg font-semibold">한국 부자 수 추이 (2011~2025)</h4>
      <ResponsiveContainer width="100%" height={350}>
        <ComposedChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" className="stroke-gray-300 dark:stroke-gray-700" />
          <XAxis dataKey="year" className="text-xs" interval={0} />
          <YAxis unit="천명" className="text-sm" domain={[0, 600]} />
          <Tooltip
            contentStyle={{
              backgroundColor: 'rgba(255, 255, 255, 0.95)',
              border: '1px solid #ccc',
              borderRadius: '8px',
              color: '#333', // 텍스트 가시성을 위해 강제 검정
            }}
            itemStyle={{ color: '#333' }}
            formatter={(value: number) => [`${value}천명`, '부자 수']}
            labelStyle={{ color: '#333', fontWeight: 'bold' }}
          />
          <Bar
            dataKey="count"
            name="부자 수"
            // barSize removed to let it scale automatically with more data points
            fill="#FFB300" // 좀 더 진한 금색 (Amber 600)
            radius={[4, 4, 0, 0]}
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={index >= 13 ? '#FF8F00' : '#FFC107'} // 미래/최근(2024, 2025)는 더 진한 색
              />
            ))}
          </Bar>
          {/* Line은 그래픽 요소로만 사용하고 툴팁에서는 제외하기 위해 name을 비우거나 legendType을 none으로 설정하지만, 
              Tooltip formatter에서 배열을 리턴하여 하나만 제어하는 것이 확실함. 
              여기서는 Line에 tooltipType="none"을 추가해봄 (Recharts 지원시 동작).
              만약 지원하지 않으면 formatter 로직에 의존. */}
          <Line
            type="monotone"
            dataKey="count"
            stroke="#E65100" // 아주 진한 주황/갈색 (Orange 900)
            strokeWidth={3}
            dot={{ r: 3, fill: '#E65100' }}
            activeDot={{ r: 5 }}
            name="추세선" // 이름 변경해서 구분
            tooltipType="none"
          />
        </ComposedChart>
      </ResponsiveContainer>
      <p className="mt-4 text-center text-sm text-gray-600 dark:text-gray-400">
        지난 15년간 한국 부자의 수는 매년 10% 가량 꾸준히 증가해왔습니다.
      </p>
    </div>
  )
}
