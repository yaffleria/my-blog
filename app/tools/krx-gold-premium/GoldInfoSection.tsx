import React from 'react'

export default function GoldInfoSection() {
  return (
    <div className="prose dark:prose-invert mx-auto max-w-3xl px-4 py-12">
      <div className="mb-12 border-t border-gray-200 pt-12 dark:border-gray-800">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
          KRX 금시장과 프리미엄 가이드
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          대한민국 대표 금 거래 시장인 KRX 금시장의 특징과, 국제 시세와의 가격 차이(프리미엄)가
          발생하는 이유를 알아보세요. 현명한 금 투자를 위한 필수 정보입니다.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        <div className="rounded-2xl bg-gray-50 p-6 dark:bg-gray-800/50">
          <h3 className="mb-3 text-lg font-bold text-gray-900 dark:text-gray-100">
            🥇 KRX 금시장의 장점
          </h3>
          <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
            <li className="flex gap-2">
              <span className="text-primary-500">✓</span>
              <span>
                <strong>양도소득세 비과세:</strong> 매매차익에 대한 세금이 없습니다.
                (금융소득종합과세 제외)
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-primary-500">✓</span>
              <span>
                <strong>부가가치세 면제:</strong> 거래 시 부가세(10%)가 면제됩니다. (실물 인출
                시에는 부과)
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-primary-500">✓</span>
              <span>
                <strong>저렴한 수수료:</strong> 증권사 온라인 매매 수수료가 약 0.2~0.3% 수준으로
                저렴합니다.
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-primary-500">✓</span>
              <span>
                <strong>소액 투자:</strong> 1g 단위로 소액 투자가 가능합니다.
              </span>
            </li>
          </ul>
        </div>

        <div className="rounded-2xl bg-gray-50 p-6 dark:bg-gray-800/50">
          <h3 className="mb-3 text-lg font-bold text-gray-900 dark:text-gray-100">
            📊 김치 프리미엄이란?
          </h3>
          <p className="mb-3 text-sm text-gray-600 dark:text-gray-400">
            국내 금 시세가 국제 금 시세(환율 적용)보다 높거나 낮은 현상을 말합니다.
          </p>
          <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
            <li className="flex gap-2">
              <span className="text-blue-500">•</span>
              <span>
                <strong>(+) 양수:</strong> 국내 금값이 국제 시세보다 비싼 상태. 국내 수요가 많거나
                환율 변동성이 클 때 발생합니다.
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-blue-500">•</span>
              <span>
                <strong>(-) 음수:</strong> 국내 금값이 더 저렴한 상태. 소위 '역프리미엄'이라 하며
                매수 기회로 여겨지기도 합니다.
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
              KRX 금 시세는 어떻게 결정되나요?
              <span className="ml-2 text-gray-400 transition-transform group-open:rotate-180">
                ▼
              </span>
            </summary>
            <div className="mt-3 text-sm text-gray-600 dark:text-gray-400">
              KRX 금시장의 시세는 주식 시장처럼 매수자와 매도자의 주문이 만나는 지점에서 실시간으로
              결정됩니다. 국제 금값과 원/달러 환율의 영향을 가장 크게 받지만, 국내의 수급 상황(금
              수요 등)에 따라 국제 가격과 괴리(프리미엄)가 발생할 수 있습니다.
            </div>
          </details>

          <details className="group rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-800">
            <summary className="flex cursor-pointer items-center justify-between font-medium text-gray-900 focus:outline-none dark:text-gray-100">
              국제 금 시세와 가격이 다른 이유는 무엇인가요?
              <span className="ml-2 text-gray-400 transition-transform group-open:rotate-180">
                ▼
              </span>
            </summary>
            <div className="mt-3 text-sm text-gray-600 dark:text-gray-400">
              이론적으로는 '국제 금값(USD/oz) × 환율(KRW/USD)'가 국내 금값이어야 하지만, 실제로는
              국내 시장 참여자들의 심리, 수급 불균형, 거래 시간의 차이 등으로 인해 가격 차이가
              발생합니다. 이 차이를 '프리미엄'이라고 부르며, 이를 확인하고 투자하는 것이 중요합니다.
            </div>
          </details>

          <details className="group rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-800">
            <summary className="flex cursor-pointer items-center justify-between font-medium text-gray-900 focus:outline-none dark:text-gray-100">
              금 1돈은 몇 그램(g)인가요?
              <span className="ml-2 text-gray-400 transition-transform group-open:rotate-180">
                ▼
              </span>
            </summary>
            <div className="mt-3 text-sm text-gray-600 dark:text-gray-400">
              금 1돈은 정확히 <strong>3.75g</strong>입니다. 국제 시장에서는 트로이온스(Troy Ounce,
              약 31.1g) 단위를 주로 사용하며, KRX 금시장은 1g 단위로 거래됩니다. 본 계산기에서는
              1g과 1돈 단위 가격을 모두 제공합니다.
            </div>
          </details>
        </div>
      </div>
    </div>
  )
}
