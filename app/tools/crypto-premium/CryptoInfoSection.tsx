'use client'

import React from 'react'

export default function CryptoInfoSection() {
  return (
    <div className="prose dark:prose-invert mx-auto max-w-3xl px-4 py-12">
      <div className="mb-12 border-t border-gray-200 pt-12 dark:border-gray-800">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
          비트코인 김치프리미엄(김프) 가이드
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          대한민국 암호화폐 시장의 독특한 현상인 김치프리미엄의 원인과 특징, 그리고 실시간 시세
          차이의 의미를 알아보세요. 스마트한 코인 투자를 위한 필수 지표입니다.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        <div className="rounded-2xl bg-gray-50 p-6 dark:bg-gray-800/50">
          <h3 className="mb-3 text-lg font-bold text-gray-900 dark:text-gray-100">
            🌏 김치프리미엄 발생 원인
          </h3>
          <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
            <li className="flex gap-2">
              <span className="text-primary-500">✓</span>
              <span>
                <strong>외국환 거래법 제한:</strong> 재정거래(차익거래)를 위한 외화 송금이 까다로워
                국가 간 가격 차이가 즉시 해소되지 않습니다.
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-primary-500">✓</span>
              <span>
                <strong>높은 국내 수요:</strong> 한국의 개인 투자자 비중이 높고 투기적 수요가 강해
                상승장에서 프리미엄이 확대되는 경향이 있습니다.
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-primary-500">✓</span>
              <span>
                <strong>거래소 간 이동 장벽:</strong> 트래블룰(Travel Rule) 등으로 인해 거래소 간
                자산 이동이 자유롭지 않아 일시적인 가격 괴리가 발생합니다.
              </span>
            </li>
          </ul>
        </div>

        <div className="rounded-2xl bg-gray-50 p-6 dark:bg-gray-800/50">
          <h3 className="mb-3 text-lg font-bold text-gray-900 dark:text-gray-100">
            📊 김프 활용 전략
          </h3>
          <p className="mb-3 text-sm text-gray-600 dark:text-gray-400">
            김치프리미엄 지표는 시장의 과열 여부를 판단하는 중요한 보조지표로 활용될 수 있습니다.
          </p>
          <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
            <li className="flex gap-2">
              <span className="text-blue-500">•</span>
              <span>
                <strong>과열 신호:</strong> 김프가 역사적 평균(보통 3~5%)보다 과도하게 높으면 단기
                고점일 가능성을 염두에 두어야 합니다.
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-blue-500">•</span>
              <span>
                <strong>역프리미엄:</strong> 김프가 마이너스(역프)라면 국내 가격이 해외보다 저렴한
                상태로, 매수 기회로 여겨지기도 합니다.
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-12 space-y-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">자주 묻는 질문 (FAQ)</h3>

        <div className="space-y-4">
          <details className="group rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-800">
            <summary className="flex cursor-pointer items-center justify-between font-medium text-gray-900 focus:outline-none dark:text-gray-100">
              김치프리미엄은 어떻게 계산되나요?
              <span className="ml-2 text-gray-400 transition-transform group-open:rotate-180">
                ▼
              </span>
            </summary>
            <div className="mt-3 text-sm text-gray-600 dark:text-gray-400">
              김치프리미엄(%) = ((국내 시세 / (해외 시세 × 환율)) - 1) × 100.
              <br />본 사이트에서는 국내 시세(Upbit)와 해외 시세(Binance)를 실시간 환율로 환산하여
              가장 정확한 프리미엄 수치를 제공합니다.
            </div>
          </details>

          <details className="group rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-800">
            <summary className="flex cursor-pointer items-center justify-between font-medium text-gray-900 focus:outline-none dark:text-gray-100">
              USDT(테더) 김프는 왜 확인하나요?
              <span className="ml-2 text-gray-400 transition-transform group-open:rotate-180">
                ▼
              </span>
            </summary>
            <div className="mt-3 text-sm text-gray-600 dark:text-gray-400">
              비트코인이 변동성이 심한 반면, USDT는 스테이블 코인으로서 달러($1) 가치에 연동됩니다.
              따라서 USDT의 김치프리미엄은 순수한 '환율 + 한국 시장의 프리미엄'을 나타내는 더욱
              정직한 지표로 활용되기도 합니다.
            </div>
          </details>

          <details className="group rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-800">
            <summary className="flex cursor-pointer items-center justify-between font-medium text-gray-900 focus:outline-none dark:text-gray-100">
              재정거래(차익거래)가 가능한가요?
              <span className="ml-2 text-gray-400 transition-transform group-open:rotate-180">
                ▼
              </span>
            </summary>
            <div className="mt-3 text-sm text-gray-600 dark:text-gray-400">
              이론적으로는 가능하지만, 개인의 경우 외국환 거래법상 해외 거래소로의 송금 한도가 있고
              절차가 복잡하여 즉각적인 무위험 차익거래(Arbitrage)는 쉽지 않습니다. 주로 유학생이나
              해외 거주자들이 제한적으로나마 활용하는 경우가 있습니다.
            </div>
          </details>
        </div>
      </div>
    </div>
  )
}
