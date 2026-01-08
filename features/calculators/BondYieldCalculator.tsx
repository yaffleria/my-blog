'use client'

import React, { useState, useEffect } from 'react'

const BondYieldCalculator = () => {
  // 기본값: TLT ETF의 대략적인 듀레이션(16년) 설정
  const [currentPrice, setCurrentPrice] = useState(94.5) // 현재 TLT 가격
  const [currentYield, setCurrentYield] = useState(4.4) // 현재 20년물 국채 금리
  const [targetYield, setTargetYield] = useState(3.5) // 목표 금리
  const [investmentAmount, setInvestmentAmount] = useState(10000000) // 투자금 (1천만원)
  const [duration, setDuration] = useState(16.5) // 수정 듀레이션

  const [result, setResult] = useState({
    priceChangePct: 0,
    expectedPrice: 0,
    capitalGain: 0,
    totalReturn: 0,
    totalReturnPct: 0,
  })

  useEffect(() => {
    // 채권 가격 변동률 근사 공식: -Duration * (TargetYield - CurrentYield)
    // 금리가 1% 떨어지면 가격은 Duration % 만큼 오름
    const yieldDiff = targetYield - currentYield // 예: 3.5 - 4.5 = -1.0%
    const priceChangePct = -1 * duration * yieldDiff // 예: -1 * 16.5 * -1.0 = +16.5%

    // 예상 주가
    const expectedPrice = currentPrice * (1 + priceChangePct / 100)

    // 자본 차익 (Capital Gain)
    const capitalGain = investmentAmount * (priceChangePct / 100)

    // 배당 수익 (이자 수익) - 대략적으로 현재 금리만큼 1년 보유했다고 가정
    // 실제로는 복잡하지만, 단순화하여 (투자금 * 현재금리)로 계산
    const dividentIncome = investmentAmount * (currentYield / 100)

    // 총 수익
    const totalReturn = capitalGain + dividentIncome
    const totalReturnPct = (totalReturn / investmentAmount) * 100

    setResult({
      priceChangePct,
      expectedPrice,
      capitalGain,
      totalReturn,
      totalReturnPct,
    })
  }, [currentPrice, currentYield, targetYield, investmentAmount, duration])

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('ko-KR', {
      style: 'currency',
      currency: 'KRW',
      maximumFractionDigits: 0,
    }).format(val)
  }

  const formatUSD = (val: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(val)
  }

  return (
    <div className="my-8 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-lg dark:border-gray-700 dark:bg-gray-800">
      {/* Header */}
      <div className="bg-linear-to-r from-blue-600 to-blue-800 p-6 text-white md:p-8">
        <h1 className="text-xl font-bold md:text-2xl">💰 미국 장기채(TLT) 수익률 시뮬레이터</h1>
        <p className="mt-2 text-sm text-blue-100 opacity-90 md:text-base">
          금리가 1% 변하면 내 수익률은? 듀레이션 공식을 통해 확인해보세요.
        </p>
      </div>

      <div className="p-4 md:p-6">
        {/* Input Section */}
        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-4">
            <div>
              <label
                htmlFor="investmentAmount"
                className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                투자 금액 (KRW)
              </label>
              <input
                id="investmentAmount"
                type="number"
                inputMode="numeric"
                pattern="[0-9]*"
                value={investmentAmount}
                onChange={(e) => setInvestmentAmount(Number(e.target.value))}
                className="w-full rounded-lg border border-gray-300 p-3 text-lg text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                placeholder="예: 10000000"
              />
            </div>
            <div>
              <label
                htmlFor="currentYield"
                className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                현재 미국채 20년물 금리 (%)
              </label>
              <div className="flex items-center space-x-2">
                <input
                  id="currentYield"
                  type="number"
                  inputMode="decimal"
                  step="0.01"
                  value={currentYield}
                  onChange={(e) => setCurrentYield(Number(e.target.value))}
                  className="w-full rounded-lg border border-gray-300 p-3 text-lg text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                />
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <label
                htmlFor="currentPrice"
                className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                TLT 현재 주가 ($)
              </label>
              <input
                id="currentPrice"
                type="number"
                inputMode="decimal"
                step="0.01"
                value={currentPrice}
                onChange={(e) => setCurrentPrice(Number(e.target.value))}
                className="w-full rounded-lg border border-gray-300 p-3 text-lg text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
              />
            </div>
            <div>
              <label
                htmlFor="targetYield"
                className="mb-1 block text-sm font-bold text-blue-600 dark:text-blue-400"
              >
                목표 금리 (예상 시나리오) (%)
              </label>
              <input
                id="targetYield"
                type="number"
                inputMode="decimal"
                step="0.1"
                value={targetYield}
                onChange={(e) => setTargetYield(Number(e.target.value))}
                className="w-full rounded-lg border-2 border-blue-500 bg-blue-50 p-3 text-lg font-bold text-gray-900 focus:ring-blue-500 dark:border-blue-500 dark:bg-gray-800 dark:text-white"
              />
              <input
                type="range"
                aria-label="목표 금리 조절 슬라이더"
                min="2.0"
                max="6.0"
                step="0.1"
                value={targetYield}
                onChange={(e) => setTargetYield(Number(e.target.value))}
                className="mt-4 h-6 w-full cursor-pointer appearance-none rounded-lg bg-gray-200 dark:bg-gray-700"
              />
            </div>
          </div>
        </div>

        {/* Divider with Duration Info */}
        <div className="my-6">
          <div className="rounded-lg bg-gray-50 p-3 text-xs text-gray-500 dark:bg-gray-900/50">
            * 계산 기준: TLT 수정 듀레이션(Effective Duration) 약 {duration}년을 적용했습니다. (금리
            1% 하락 시 채권 가격 약 {duration}% 상승 공식 활용)
          </div>
        </div>

        {/* Result Section */}
        <div className="rounded-xl bg-gray-50 p-6 dark:bg-gray-900">
          <h4 className="mb-4 text-center font-semibold text-gray-900 dark:text-white">
            시뮬레이션 결과
          </h4>
          <div className="grid grid-cols-2 gap-4 text-center">
            <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-gray-800">
              <p className="text-sm text-gray-500 dark:text-gray-400">예상 주가 변동</p>
              <p
                className={`mt-1 text-2xl font-bold ${
                  result.priceChangePct >= 0 ? 'text-red-500' : 'text-blue-500' // 한국은 상승이 빨간색
                }`}
              >
                {result.priceChangePct > 0 ? '+' : ''}
                {result.priceChangePct.toFixed(2)}%
              </p>
              <p className="text-xs text-gray-400">
                {formatUSD(currentPrice)} → {formatUSD(result.expectedPrice)}
              </p>
            </div>
            <div className="rounded-lg bg-white p-4 shadow-sm dark:bg-gray-800">
              <p className="text-sm text-gray-500 dark:text-gray-400">총 예상 수익률 (1년)</p>
              <p
                className={`mt-1 text-2xl font-bold ${
                  result.totalReturnPct >= 0 ? 'text-red-500' : 'text-blue-500'
                }`}
              >
                {result.totalReturnPct > 0 ? '+' : ''}
                {result.totalReturnPct.toFixed(2)}%
              </p>
              <p className="text-xs text-gray-400">자본차익 + 배당수익 포함</p>
            </div>
          </div>

          <div className="mt-4 rounded-lg border border-red-100 bg-red-50 p-4 text-center dark:border-red-900/30 dark:bg-red-900/10">
            <p className="text-sm text-gray-600 dark:text-gray-300">내 예상 수익금</p>
            <p className="mt-1 text-3xl font-extrabold text-red-600 dark:text-red-400">
              {formatCurrency(result.totalReturn)}
            </p>
          </div>
        </div>

        {/* Disclaimer */}
        <p className="mt-4 text-xs leading-relaxed text-gray-400">
          <strong>면책 조항:</strong> 본 계산기는 채권 듀레이션 공식을 활용한 단순 시뮬레이션
          도구입니다. 실제 TLT 가격은 금리 외에도 수급, 경제 지표 등 다양한 변수에 의해 결정됩니다.
          이 결과는 투자를 권유하거나 수익을 보장하지 않으며, 투자 판단의 책임은 본인에게 있습니다.
        </p>
      </div>
    </div>
  )
}

export default BondYieldCalculator
