'use client'

import React, { useState } from 'react'

interface Scenario {
  id: 'positive' | 'negative' | 'neutral'
  title: string
  subtitle: string
  keyPoints: string[]
  krakenImpact: string
  stockImplication: string
  risks: string[]
  catalysts: string[]
}

interface ThreeScenarioAnalysisProps {
  locale?: 'ko' | 'en'
}

const TEXTS = {
  ko: {
    title: '시나리오 분석',
    description: '세 가지 가능한 미래',
    labels: {
      assumptions: '핵심 가정',
      impact: 'Kraken 영향',
      stock: '주가 시사점',
      risks: '리스크',
      catalysts: '촉매제',
    },
    footer: '각 시나리오는 상호 배타적이지 않으며, 복합적으로 전개될 수 있습니다.',
    scenarios: {
      positive: {
        title: 'Bull Case',
        subtitle: '방어 중심 군사 강화 지속',
        keyPoints: [
          '글로벌 군사비 CAGR 7.4% 유지',
          'NATO 2% GDP 목표 압박',
          'AUKUS Ghost Shark 일정대로',
          '미국 자율시스템 예산 집행',
        ],
        krakenImpact: 'Anduril 파트너십 확대로 매출 급성장',
        stockImplication: '현재 밸류 대비 업사이드',
        risks: ['군사 매출 집중', '생산능력 확장'],
        catalysts: ['Anduril 대형계약', 'Ghost Shark 생산', '미해군 수주'],
      },
      negative: {
        title: 'Bear Case',
        subtitle: '규제 및 데탕트 리스크',
        keyPoints: ['자율무기 국제규제', '엘빗 윤리 비판', '지정학 긴장 완화', 'ESG 배제 압력'],
        krakenImpact: '윤리 백래시로 계약 영향',
        stockImplication: '밸류 디스카운트',
        risks: ['국제규제', '캐나다수출정책', 'ESG철회'],
        catalysts: ['평화협정', '예산재배분', 'UN규제'],
      },
      neutral: {
        title: 'Base Case',
        subtitle: '듀얼유즈 균형성장',
        keyPoints: ['군사/상업 균형', '해저탐사 수요', '환경모니터링 확대', 'RaaS 현금흐름'],
        krakenImpact: '민간시장 확장',
        stockImplication: '안정 성장',
        risks: ['대형경쟁사', '기술범용화'],
        catalysts: ['민간계약', '북극프로그램', 'M&A'],
      },
    },
  },
  en: {
    title: 'Scenario Analysis',
    description: 'Three possible futures',
    labels: {
      assumptions: 'Key Assumptions',
      impact: 'Kraken Impact',
      stock: 'Stock Implication',
      risks: 'Risks',
      catalysts: 'Catalysts',
    },
    footer: 'Each scenario may unfold in a complex manner.',
    scenarios: {
      positive: {
        title: 'Bull Case',
        subtitle: 'Sustained Defense Buildup',
        keyPoints: [
          'Global mil. CAGR 7.4%',
          'NATO 2% GDP pressure',
          'AUKUS on schedule',
          'US autonomy budget ramp',
        ],
        krakenImpact: 'Revenue surge via Anduril',
        stockImplication: 'Significant upside',
        risks: ['Defense concentration', 'Capacity speed'],
        catalysts: ['Anduril contract', 'Ghost Shark prod', 'Navy orders'],
      },
      negative: {
        title: 'Bear Case',
        subtitle: 'Regulation & Detente',
        keyPoints: [
          'Autonomous weapons regulation',
          'Elbit ethics criticism',
          'Geopolitical easing',
          'ESG exclusion',
        ],
        krakenImpact: 'Backlash affects contracts',
        stockImplication: 'Valuation discount',
        risks: ['Intl regulation', 'Export policy', 'ESG withdrawal'],
        catalysts: ['Peace treaties', 'Budget realloc', 'UN regulation'],
      },
      neutral: {
        title: 'Base Case',
        subtitle: 'Dual-Use Balance',
        keyPoints: [
          'Mil/commercial balance',
          'Subsea survey demand',
          'Monitoring expansion',
          'RaaS cash flow',
        ],
        krakenImpact: 'Civil market expansion',
        stockImplication: 'Stable growth',
        risks: ['Large competitors', 'Tech commoditization'],
        catalysts: ['Commercial contract', 'Arctic program', 'M&A'],
      },
    },
  },
}

export default function ThreeScenarioAnalysis({ locale = 'en' }: ThreeScenarioAnalysisProps) {
  const [selected, setSelected] = useState<'positive' | 'negative' | 'neutral'>('positive')
  const t = TEXTS[locale]
  const scenarios: Scenario[] = [
    { id: 'positive', ...t.scenarios.positive },
    { id: 'neutral', ...t.scenarios.neutral },
    { id: 'negative', ...t.scenarios.negative },
  ]
  const current = scenarios.find((s) => s.id === selected)!

  const tabStyle = (id: string) =>
    selected === id
      ? id === 'positive'
        ? 'border-rose-500 bg-rose-950/50 text-rose-400'
        : id === 'negative'
          ? 'border-neutral-600 bg-neutral-800 text-neutral-300'
          : 'border-amber-600 bg-amber-950/50 text-amber-400'
      : 'border-neutral-700 bg-neutral-800/50 text-neutral-500 hover:bg-neutral-800'

  const accent =
    selected === 'positive'
      ? 'text-rose-400'
      : selected === 'negative'
        ? 'text-neutral-400'
        : 'text-amber-400'

  return (
    <div className="my-8 rounded-2xl border border-neutral-800 bg-neutral-900 p-6 shadow-2xl">
      <div className="mb-6 text-center">
        <h3 className="text-xl font-bold text-white">{t.title}</h3>
        <p className="mt-2 text-sm text-neutral-500">{t.description}</p>
      </div>
      <div className="mb-6 flex flex-wrap justify-center gap-3">
        {scenarios.map((s) => (
          <button
            key={s.id}
            onClick={() => setSelected(s.id)}
            className={`cursor-pointer rounded-lg border-2 px-5 py-2.5 text-sm font-semibold transition-all ${tabStyle(s.id)}`}
          >
            {s.title}
          </button>
        ))}
      </div>
      <div className="rounded-xl border border-neutral-700 bg-neutral-800/50 p-6">
        <h4 className={`text-xl font-bold ${accent}`}>{current.title}</h4>
        <p className="mb-4 text-sm text-neutral-400">{current.subtitle}</p>
        <div className="mb-4">
          <h5 className="mb-2 font-semibold text-neutral-200">{t.labels.assumptions}</h5>
          <ul className="grid gap-1.5 md:grid-cols-2">
            {current.keyPoints.map((p, i) => (
              <li key={i} className="flex items-center gap-2 text-sm text-neutral-300">
                <span className={accent}>→</span>
                {p}
              </li>
            ))}
          </ul>
        </div>
        <div className="mb-4 grid gap-4 md:grid-cols-2">
          <div className="rounded-lg border border-neutral-700 bg-neutral-800 p-4">
            <h5 className="mb-2 font-semibold text-neutral-200">{t.labels.impact}</h5>
            <p className="text-sm text-neutral-300">{current.krakenImpact}</p>
          </div>
          <div className="rounded-lg border border-neutral-700 bg-neutral-800 p-4">
            <h5 className="mb-2 font-semibold text-neutral-200">{t.labels.stock}</h5>
            <p className="text-sm text-neutral-300">{current.stockImplication}</p>
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-lg border border-neutral-700 bg-neutral-800 p-4">
            <h5 className="mb-2 font-semibold text-neutral-400">{t.labels.risks}</h5>
            <ul className="space-y-1">
              {current.risks.map((r, i) => (
                <li key={i} className="text-sm text-neutral-400">
                  • {r}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-lg border border-rose-900/30 bg-rose-950/20 p-4">
            <h5 className="mb-2 font-semibold text-rose-400">{t.labels.catalysts}</h5>
            <ul className="space-y-1">
              {current.catalysts.map((c, i) => (
                <li key={i} className="text-sm text-neutral-300">
                  <span className="text-rose-500">⚡</span> {c}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="mt-6 text-center text-xs text-neutral-600">{t.footer}</div>
    </div>
  )
}
