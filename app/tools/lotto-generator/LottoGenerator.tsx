'use client'

import { useState } from 'react'
import { Shuffle, Sparkles } from 'lucide-react'

export default function LottoGenerator() {
  const [numbers, setNumbers] = useState<number[]>([])
  const [isAnimating, setIsAnimating] = useState(false)
  const [history, setHistory] = useState<number[][]>([])

  const generateNumbers = () => {
    if (isAnimating) return

    setIsAnimating(true)

    // Animation effect: rapidly change numbers before settling
    const interval = setInterval(() => {
      const tempNumbers = new Set<number>()
      while (tempNumbers.size < 6) {
        tempNumbers.add(Math.floor(Math.random() * 45) + 1)
      }
      setNumbers(Array.from(tempNumbers).sort((a, b) => a - b))
    }, 50)

    setTimeout(() => {
      clearInterval(interval)
      const finalNumbers = new Set<number>()
      while (finalNumbers.size < 6) {
        finalNumbers.add(Math.floor(Math.random() * 45) + 1)
      }
      const sortedNumbers = Array.from(finalNumbers).sort((a, b) => a - b)
      setNumbers(sortedNumbers)
      setHistory((prev) => [sortedNumbers, ...prev].slice(0, 5)) // Keep last 5
      setIsAnimating(false)
    }, 800)
  }

  const getBallColor = (num: number) => {
    if (num <= 10)
      return 'from-yellow-400 to-yellow-500 border-yellow-600 text-white shadow-yellow-500/50'
    if (num <= 20) return 'from-blue-500 to-blue-600 border-blue-700 text-white shadow-blue-500/50'
    if (num <= 30) return 'from-red-500 to-red-600 border-red-700 text-white shadow-red-500/50'
    if (num <= 40)
      return 'from-slate-500 to-slate-600 border-slate-700 text-white shadow-slate-500/50'
    return 'from-green-500 to-green-600 border-green-700 text-white shadow-green-500/50'
  }

  return (
    <div className="mx-auto max-w-2xl text-center">
      <div className="mb-12 rounded-3xl bg-white p-8 shadow-2xl ring-1 ring-gray-200 dark:bg-gray-800 dark:ring-gray-700">
        <div className="mb-8 flex min-h-[120px] flex-wrap justify-center gap-4 sm:gap-6">
          {numbers.length === 0 ? (
            <div className="flex w-full flex-col items-center justify-center space-y-4 text-gray-400">
              <Sparkles className="h-12 w-12 opacity-50" />
              <p className="text-lg">행운의 번호를 생성해보세요!</p>
            </div>
          ) : (
            numbers.map((num, idx) => (
              <div
                key={`${idx}-${num}`}
                className={`flex h-16 w-16 items-center justify-center rounded-full border-b-4 bg-gradient-to-br text-2xl font-bold shadow-lg transition-transform hover:scale-110 sm:h-20 sm:w-20 sm:text-3xl ${getBallColor(
                  num
                )}`}
                style={{ animationDuration: '0.5s', animationDelay: `${idx * 0.1}s` }}
              >
                {num}
              </div>
            ))
          )}
        </div>

        <button
          onClick={generateNumbers}
          disabled={isAnimating}
          className={`group from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 hover:shadow-primary-500/30 focus:ring-primary-300 dark:focus:ring-primary-800 relative inline-flex items-center justify-center overflow-hidden rounded-full bg-gradient-to-r px-8 py-4 text-lg font-bold text-white shadow-lg transition-all hover:scale-105 focus:ring-4 focus:outline-none ${
            isAnimating ? 'cursor-not-allowed opacity-80' : 'cursor-pointer'
          }`}
        >
          <span className="mr-2">
            <Shuffle className={`h-6 w-6 ${isAnimating ? 'animate-spin' : ''}`} />
          </span>
          {isAnimating ? '생성 중...' : '번호 생성하기'}
        </button>
      </div>

      {history.length > 0 && (
        <div className="animate-fade-in mt-8">
          <h3 className="mb-4 text-xl font-semibold text-gray-900 dark:text-gray-100">
            최근 생성 기록
          </h3>
          <div className="space-y-3">
            {history.map((record, idx) => (
              <div
                key={idx}
                className="flex items-center justify-center gap-3 rounded-xl bg-gray-50 px-4 py-3 dark:bg-gray-900"
              >
                <span className="mr-2 text-sm font-medium text-gray-500">
                  #{history.length - idx}
                </span>
                {record.map((num, nIdx) => (
                  <span
                    key={nIdx}
                    className={`flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold text-white shadow-sm ${
                      num <= 10
                        ? 'bg-yellow-500'
                        : num <= 20
                          ? 'bg-blue-500'
                          : num <= 30
                            ? 'bg-red-500'
                            : num <= 40
                              ? 'bg-gray-500'
                              : 'bg-green-500'
                    }`}
                  >
                    {num}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
