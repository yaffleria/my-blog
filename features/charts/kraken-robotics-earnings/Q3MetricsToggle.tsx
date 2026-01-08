'use client'

import React, { useState } from 'react'
import QuarterlyRevenueChart from './QuarterlyRevenueChart'
import GrossMarginChart from './GrossMarginChart'
import EBITDAChart from './EBITDAChart'

export default function Q3MetricsToggle() {
  const [view, setView] = useState<'table' | 'chart'>('table')

  const isTable = view === 'table'

  return (
    <div className="my-8 w-full">
      {/* Toggle Switch */}
      <div className="mb-4 flex justify-center">
        <div className="flex rounded-full bg-gray-100 p-1 dark:bg-gray-800">
          <button
            onClick={() => setView('table')}
            className={`cursor-pointer rounded-full px-4 py-1.5 text-sm font-medium transition-all ${
              isTable
                ? 'bg-white text-gray-900 shadow-sm dark:bg-gray-700 dark:text-gray-100'
                : 'text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200'
            }`}
          >
            테이블
          </button>
          <button
            onClick={() => setView('chart')}
            className={`cursor-pointer rounded-full px-4 py-1.5 text-sm font-medium transition-all ${
              !isTable
                ? 'bg-white text-gray-900 shadow-sm dark:bg-gray-700 dark:text-gray-100'
                : 'text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200'
            }`}
          >
            차트
          </button>
        </div>
      </div>

      {/* Table View */}
      {isTable && (
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead>
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase dark:text-gray-400">
                  항목
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium tracking-wider text-gray-500 uppercase dark:text-gray-400">
                  Q3 2025
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium tracking-wider text-gray-500 uppercase dark:text-gray-400">
                  Q3 2024
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium tracking-wider text-gray-500 uppercase dark:text-gray-400">
                  성장률 &#40;YoY&#41;
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white dark:divide-gray-700 dark:bg-gray-900">
              <tr className="hover:bg-gray-50 dark:hover:bg-gray-800">
                <td className="px-6 py-4 text-sm font-bold whitespace-nowrap text-gray-900 dark:text-gray-100">
                  총매출 &#40;Revenue&#41;
                </td>
                <td className="px-6 py-4 text-right text-sm whitespace-nowrap text-gray-900 dark:text-gray-100">
                  $31,298
                </td>
                <td className="px-6 py-4 text-right text-sm whitespace-nowrap text-gray-900 dark:text-gray-100">
                  $19,550
                </td>
                <td className="px-6 py-4 text-right text-sm font-bold whitespace-nowrap text-green-600 dark:text-green-400">
                  +60%
                </td>
              </tr>
              <tr className="hover:bg-gray-50 dark:hover:bg-gray-800">
                <td className="px-6 py-4 pl-10 text-sm whitespace-nowrap text-gray-700 dark:text-gray-300">
                  제품 매출 &#40;Product&#41;
                </td>
                <td className="px-6 py-4 text-right text-sm whitespace-nowrap text-gray-900 dark:text-gray-100">
                  $18,258
                </td>
                <td className="px-6 py-4 text-right text-sm whitespace-nowrap text-gray-900 dark:text-gray-100">
                  $12,492
                </td>
                <td className="px-6 py-4 text-right text-sm whitespace-nowrap text-green-600 dark:text-green-400">
                  +46%
                </td>
              </tr>
              <tr className="hover:bg-gray-50 dark:hover:bg-gray-800">
                <td className="px-6 py-4 pl-10 text-sm whitespace-nowrap text-gray-700 dark:text-gray-300">
                  서비스 매출 &#40;Service&#41;
                </td>
                <td className="px-6 py-4 text-right text-sm whitespace-nowrap text-gray-900 dark:text-gray-100">
                  $13,040
                </td>
                <td className="px-6 py-4 text-right text-sm whitespace-nowrap text-gray-900 dark:text-gray-100">
                  $7,058
                </td>
                <td className="px-6 py-4 text-right text-sm whitespace-nowrap text-green-600 dark:text-green-400">
                  +85%
                </td>
              </tr>
              <tr className="hover:bg-gray-50 dark:hover:bg-gray-800">
                <td className="px-6 py-4 text-sm font-bold whitespace-nowrap text-gray-900 dark:text-gray-100">
                  매출총이익 &#40;Gross Profit&#41;
                </td>
                <td className="px-6 py-4 text-right text-sm whitespace-nowrap text-gray-900 dark:text-gray-100">
                  $18,579
                </td>
                <td className="px-6 py-4 text-right text-sm whitespace-nowrap text-gray-900 dark:text-gray-100">
                  $10,257
                </td>
                <td className="px-6 py-4 text-right text-sm font-bold whitespace-nowrap text-green-600 dark:text-green-400">
                  +81%
                </td>
              </tr>
              <tr className="hover:bg-gray-50 dark:hover:bg-gray-800">
                <td className="px-6 py-4 pl-10 text-sm whitespace-nowrap text-gray-700 dark:text-gray-300">
                  매출총이익률 &#40;Margin&#41;
                </td>
                <td className="px-6 py-4 text-right text-sm whitespace-nowrap text-gray-900 dark:text-gray-100">
                  59%
                </td>
                <td className="px-6 py-4 text-right text-sm whitespace-nowrap text-gray-900 dark:text-gray-100">
                  52%
                </td>
                <td className="px-6 py-4 text-right text-sm whitespace-nowrap text-green-600 dark:text-green-400">
                  +7%p
                </td>
              </tr>
              <tr className="hover:bg-gray-50 dark:hover:bg-gray-800">
                <td className="px-6 py-4 text-sm font-bold whitespace-nowrap text-gray-900 dark:text-gray-100">
                  조정 EBITDA
                </td>
                <td className="px-6 py-4 text-right text-sm whitespace-nowrap text-gray-900 dark:text-gray-100">
                  $7,979
                </td>
                <td className="px-6 py-4 text-right text-sm whitespace-nowrap text-gray-900 dark:text-gray-100">
                  $4,148
                </td>
                <td className="px-6 py-4 text-right text-sm font-bold whitespace-nowrap text-green-600 dark:text-green-400">
                  +92%
                </td>
              </tr>
              <tr className="hover:bg-gray-50 dark:hover:bg-gray-800">
                <td className="px-6 py-4 text-sm font-bold whitespace-nowrap text-gray-900 dark:text-gray-100">
                  순이익 &#40;Net Income&#41;
                </td>
                <td className="px-6 py-4 text-right text-sm whitespace-nowrap text-gray-900 dark:text-gray-100">
                  $3,290
                </td>
                <td className="px-6 py-4 text-right text-sm whitespace-nowrap text-gray-900 dark:text-gray-100">
                  $1,631
                </td>
                <td className="px-6 py-4 text-right text-sm font-bold whitespace-nowrap text-green-600 dark:text-green-400">
                  +101%
                </td>
              </tr>
            </tbody>
          </table>
          <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">단위: 천 CAD, 달러 표기</p>
        </div>
      )}

      {/* Chart View */}
      {!isTable && (
        <div className="space-y-4">
          <QuarterlyRevenueChart />
          <GrossMarginChart />
          <EBITDAChart />
        </div>
      )}
    </div>
  )
}
