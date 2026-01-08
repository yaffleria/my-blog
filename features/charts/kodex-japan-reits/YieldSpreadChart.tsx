'use client'

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
  Cell,
} from 'recharts'

const data = [
  {
    name: '금리차 확대',
    subtitle: '(현재)',
    reitYield: 4.0,
    hedgePremium: 2.5,
    total: 6.5,
  },
  {
    name: '금리차 유지',
    subtitle: '',
    reitYield: 4.0,
    hedgePremium: 2.0,
    total: 6.0,
  },
  {
    name: '금리차 축소',
    subtitle: '',
    reitYield: 4.0,
    hedgePremium: 0.5,
    total: 4.5,
  },
  {
    name: '금리 역전',
    subtitle: '',
    reitYield: 4.0,
    hedgePremium: -1.0,
    total: 3.0,
  },
]

interface TooltipPayloadItem {
  value: number
}

interface CustomTooltipProps {
  active?: boolean
  payload?: TooltipPayloadItem[]
  label?: string
}

const CustomTooltip = ({ active, payload, label }: CustomTooltipProps) => {
  if (active && payload && payload.length) {
    return (
      <div className="rounded border border-gray-200 bg-white p-3 shadow-lg dark:border-gray-700 dark:bg-gray-800">
        <p className="mb-2 font-bold text-gray-900 dark:text-gray-100">{label}</p>
        <p className="text-sm text-blue-600">REIT 배당: {payload[0].value.toFixed(1)}%</p>
        <div className="mb-2 text-sm">
          {payload[1].value >= 0 ? (
            <span className="text-green-600">헤지 프리미엄: +{payload[1].value.toFixed(1)}%</span>
          ) : (
            <span className="text-red-500">헤지 비용: {payload[1].value.toFixed(1)}%</span>
          )}
        </div>
        <div className="border-t border-gray-200 pt-2 dark:border-gray-700">
          <p className="font-bold text-gray-900 dark:text-white">
            총 분배율: {(payload[0].value + payload[1].value).toFixed(1)}%
          </p>
        </div>
      </div>
    )
  }
  return null
}

// 커스텀 X축 틱 - 2줄로 표시
interface CustomXAxisTickProps {
  x?: number
  y?: number
  payload?: { value: string }
}

const CustomXAxisTick = ({ x, y, payload }: CustomXAxisTickProps) => {
  const item = data.find((d) => d.name === payload?.value)
  return (
    <g transform={`translate(${x},${y})`}>
      <text
        x={0}
        y={0}
        dy={12}
        textAnchor="middle"
        fill="#9CA3AF"
        fontSize={11}
        fontWeight={item?.subtitle ? 600 : 400}
      >
        {payload?.value}
      </text>
      {item?.subtitle && (
        <text x={0} y={0} dy={26} textAnchor="middle" fill="#6B7280" fontSize={10}>
          {item.subtitle}
        </text>
      )}
    </g>
  )
}

export default function YieldSpreadChart() {
  return (
    <div className="w-full rounded-lg bg-gray-50 p-4 font-sans shadow-sm dark:bg-gray-900">
      <h3 className="mb-2 text-center text-base font-bold text-gray-900 sm:text-lg dark:text-white">
        금리차 시나리오별 예상 분배율
      </h3>
      <div className="mb-3 text-center text-xs text-gray-500">
        J-REIT 배당수익률 4.0% 가정 · 예시 데이터
      </div>

      {/* 범례 */}
      <div className="mb-3 flex justify-center gap-6 text-xs sm:text-sm">
        <div className="flex items-center gap-1.5">
          <div className="h-3 w-3 rounded-sm bg-blue-500"></div>
          <span className="text-gray-600 dark:text-gray-400">REIT 배당</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="h-3 w-3 rounded-sm bg-emerald-500"></div>
          <span className="text-gray-600 dark:text-gray-400">헤지 손익</span>
        </div>
      </div>

      <div className="h-[260px] w-full sm:h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{
              top: 10,
              right: 15,
              left: -5,
              bottom: 25,
            }}
            stackOffset="sign"
          >
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#374151" opacity={0.2} />
            <XAxis
              dataKey="name"
              tick={<CustomXAxisTick />}
              axisLine={false}
              tickLine={false}
              interval={0}
            />
            <YAxis
              tick={{ fill: '#6B7280', fontSize: 11 }}
              axisLine={false}
              tickLine={false}
              unit="%"
              width={32}
              domain={[-4, 10]}
              ticks={[-3, 0, 3, 6, 9]}
            />
            <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(107, 114, 128, 0.1)' }} />
            <ReferenceLine y={0} stroke="#6B7280" strokeWidth={1} />
            <Bar dataKey="reitYield" stackId="a" radius={[0, 0, 4, 4]} barSize={36}>
              {data.map((_, index) => (
                <Cell key={`reit-${index}`} fill="#3B82F6" />
              ))}
            </Bar>
            <Bar dataKey="hedgePremium" stackId="a" radius={[4, 4, 0, 0]} barSize={36}>
              {data.map((entry, index) => (
                <Cell
                  key={`hedge-${index}`}
                  fill={entry.hedgePremium >= 0 ? '#10B981' : '#EF4444'}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
