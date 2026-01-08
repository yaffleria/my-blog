'use client'

import React, { useState } from 'react'

interface Scenario {
  id: 'positive' | 'negative' | 'neutral'
  title: string
  subtitle: string
  color: string
  bgColor: string
  borderColor: string
  keyPoints: string[]
  krakenImpact: string
  stockImplication: string
  risks: string[]
  catalysts: string[]
}

interface ThreeScenarioAnalysisProps {
  locale?: 'ko' | 'en'
}

type ScenarioContent = Omit<Scenario, 'id' | 'color' | 'bgColor' | 'borderColor'>

type TextContent = {
  title: string
  description: string
  labels: {
    assumptions: string
    impact: string
    stock: string
    risks: string
    catalysts: string
  }
  footer: string
  scenarios: {
    positive: ScenarioContent
    negative: ScenarioContent
    neutral: ScenarioContent
  }
}

const TEXTS: Record<'ko' | 'en', TextContent> = {
  ko: {
    title: '삼중 시나리오 분석',
    description: '내가 보는 Kraken의 세 가지 가능한 미래',
    labels: {
      assumptions: '핵심 가정',
      impact: 'Kraken 영향',
      stock: '주가 시사점',
      risks: '리스크',
      catalysts: '촉매제',
    },
    footer: '각 시나리오는 상호 배타적이지 않으며, 실제로는 복합적으로 전개될 수 있습니다.',
    scenarios: {
      positive: {
        title: '긍정적 시나리오',
        subtitle: '방어 중심 군사 강화 지속',
        keyPoints: [
          '글로벌 군사비 CAGR 7.4% 수준 유지',
          'NATO 국방비 GDP 2% 목표 달성 압박 강화',
          'AUKUS Ghost Shark 프로그램 일정대로 진행',
          '미국 자율 시스템 예산 집행 본격화',
        ],
        krakenImpact: 'Anduril 파트너십 확대로 Dive-LD, Ghost Shark 공급 본격화. 매출 급성장 가능',
        stockImplication: '현재 밸류에이션 대비 상당한 업사이드 잠재력',
        risks: ['군사 매출 의존도 집중', '생산 능력 확장 속도'],
        catalysts: ['Anduril 대형 계약 발표', 'Ghost Shark 생산 착수', '미 해군 추가 수주'],
      },
      negative: {
        title: '부정적 시나리오',
        subtitle: '규제 및 데탕트 리스크',
        keyPoints: [
          '자율 무기 확산에 대한 국제 규제 강화',
          '엘빗 시스템즈 과거 거래 관련 윤리적 비판',
          '지정학적 긴장 완화로 군사비 증가세 둔화',
          'ESG 투자 배제 압력 확대',
        ],
        krakenImpact: '윤리적 백래시로 일부 계약 영향 가능. 상업 부문 강화 필요',
        stockImplication: '밸류에이션 디스카운트 적용, 주가 변동성 확대',
        risks: ['국제 규제 동향', '캐나다 수출 정책 변화', 'ESG 펀드 투자 철회'],
        catalysts: ['주요국 평화 협정 체결', '기후 관련 예산 재배분', 'UN 자율무기 규제 논의 진전'],
      },
      neutral: {
        title: '중립적 시나리오',
        subtitle: '듀얼 유즈 균형 성장',
        keyPoints: [
          '군사용과 상업용 매출 균형 유지',
          '오프쇼어 윈드팜 등 해저 탐사 수요 성장',
          '환경 모니터링 시장 확대',
          'RaaS 모델로 현금흐름 안정화',
        ],
        krakenImpact: 'SeaPower 배터리 민간 시장 확장. 기술 라이센싱 수익 다변화',
        stockImplication: '안정적인 성장 궤도. 예측 가능한 수익 흐름',
        risks: ['Teledyne, Lockheed 등 대형 경쟁사', '기술 범용화로 해자 약화'],
        catalysts: ['민간 해저 탐사 대형 계약', '캐나다 북극 프로그램', '전략적 M&A 가능성'],
      },
    },
  },
  en: {
    title: 'Three Scenario Analysis',
    description: 'Three possible futures for Kraken that I see',
    labels: {
      assumptions: 'Key Assumptions',
      impact: 'Kraken Impact',
      stock: 'Stock Implication',
      risks: 'Risks',
      catalysts: 'Catalysts',
    },
    footer:
      'Each scenario is not mutually exclusive and may unfold in a complex manner in reality.',
    scenarios: {
      positive: {
        title: 'Positive Scenario',
        subtitle: 'Sustained Defense-Led Buildup',
        keyPoints: [
          'Global mil. spending maintains 7.4% CAGR',
          'NATO pressure for 2% GDP target intensifies',
          'AUKUS Ghost Shark program on schedule',
          'US autonomous systems budget execution ramps up',
        ],
        krakenImpact:
          'Revenue surge via Anduril partnership (Dive-LD, Ghost Shark supply acceleration).',
        stockImplication: 'Significant upside potential vs current valuation',
        risks: ['Concentration on defense revenue', 'Capacity expansion speed'],
        catalysts: [
          'Major Anduril contract',
          'Ghost Shark production start',
          'Addl. US Navy orders',
        ],
      },
      negative: {
        title: 'Negative Scenario',
        subtitle: 'Regulation & Detente Risk',
        keyPoints: [
          'Strengthened intl. regulation on autonomous weapons',
          'Ethical criticism re: past Elbit Systems deals',
          'Geopolitical easing slows military spending',
          'ESG exclusion pressure increases',
        ],
        krakenImpact:
          'Ethical backlash affects some contracts. Commercial sector reinforcement needed.',
        stockImplication: 'Valuation discount applied, increased volatility',
        risks: ['Intl. regulation trends', 'Canada export policy change', 'ESG fund withdrawal'],
        catalysts: [
          'Major peace treaties',
          'Climate budget reallocation',
          'UN autonomous weapon regulation',
        ],
      },
      neutral: {
        title: 'Neutral Scenario',
        subtitle: 'Dual-Use Balanced Growth',
        keyPoints: [
          'Balance between military and commercial revenue',
          'Growing demand for subsea survey (Offshore Wind)',
          'Environmental monitoring market expansion',
          'Cash flow stabilization via RaaS model',
        ],
        krakenImpact: 'SeaPower battery civil expansion. Tech licensing diversification.',
        stockImplication: 'Stable growth trajectory. Predictable cash flow',
        risks: ['Large competitors (Teledyne, Lockheed)', 'Moat weakening due to commoditization'],
        catalysts: ['Major commercial survey contract', 'Canada Arctic program', 'Strategic M&A'],
      },
    },
  },
}

const getScenarios = (t: TextContent): Scenario[] => [
  {
    id: 'positive',
    ...t.scenarios.positive,
    color: 'text-emerald-600 dark:text-emerald-400',
    bgColor: 'bg-emerald-50 dark:bg-emerald-900/30',
    borderColor: 'border-emerald-500',
  },
  {
    id: 'negative',
    ...t.scenarios.negative,
    color: 'text-red-600 dark:text-red-400',
    bgColor: 'bg-red-50 dark:bg-red-900/30',
    borderColor: 'border-red-500',
  },
  {
    id: 'neutral',
    ...t.scenarios.neutral,
    color: 'text-blue-600 dark:text-blue-400',
    bgColor: 'bg-blue-50 dark:bg-blue-900/30',
    borderColor: 'border-blue-500',
  },
]

export default function ThreeScenarioAnalysis({ locale = 'ko' }: ThreeScenarioAnalysisProps) {
  const [selectedScenario, setSelectedScenario] = useState<'positive' | 'negative' | 'neutral'>(
    'positive'
  )

  const t = TEXTS[locale]
  const scenarios = getScenarios(t)
  const currentScenario = scenarios.find((s) => s.id === selectedScenario)!

  return (
    <div className="my-8 rounded-2xl border border-gray-200 bg-linear-to-br from-gray-50 to-gray-100 p-6 shadow-lg dark:border-gray-700 dark:from-gray-800 dark:to-gray-900">
      <div className="mb-6 text-center">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{t.title}</h3>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{t.description}</p>
      </div>

      {/* Scenario Tabs */}
      <div className="mb-6 flex flex-wrap justify-center gap-3">
        {scenarios.map((scenario) => (
          <button
            key={scenario.id}
            onClick={() => setSelectedScenario(scenario.id)}
            className={`flex cursor-pointer items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-all ${
              selectedScenario === scenario.id
                ? `${scenario.bgColor} ${scenario.color} border-2 ${scenario.borderColor}`
                : 'border-2 border-transparent bg-gray-200 text-gray-600 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-400 dark:hover:bg-gray-600'
            }`}
          >
            {scenario.title}
          </button>
        ))}
      </div>

      {/* Selected Scenario Detail */}
      <div
        className={`rounded-xl border-2 ${currentScenario.borderColor} ${currentScenario.bgColor} p-6`}
      >
        <div className="mb-4">
          <h4 className={`text-xl font-bold ${currentScenario.color}`}>{currentScenario.title}</h4>
          <p className="text-sm text-gray-600 dark:text-gray-400">{currentScenario.subtitle}</p>
        </div>

        {/* Key Points */}
        <div className="mb-4">
          <h5 className="mb-2 font-semibold text-gray-800 dark:text-gray-200">
            {t.labels.assumptions}
          </h5>
          <ul className="grid gap-1.5 md:grid-cols-2">
            {currentScenario.keyPoints.map((point, idx) => (
              <li
                key={idx}
                className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300"
              >
                <span className="text-emerald-500">•</span>
                {point}
              </li>
            ))}
          </ul>
        </div>

        {/* Impact & Implication */}
        <div className="mb-4 grid gap-4 md:grid-cols-2">
          <div className="rounded-lg bg-white/60 p-4 dark:bg-black/30">
            <h5 className="mb-2 font-semibold text-gray-800 dark:text-gray-200">
              {t.labels.impact}
            </h5>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              {currentScenario.krakenImpact}
            </p>
          </div>
          <div className="rounded-lg bg-white/60 p-4 dark:bg-black/30">
            <h5 className="mb-2 font-semibold text-gray-800 dark:text-gray-200">
              {t.labels.stock}
            </h5>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              {currentScenario.stockImplication}
            </p>
          </div>
        </div>

        {/* Risks & Catalysts */}
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-lg border border-red-200 bg-red-50/50 p-4 dark:border-red-800 dark:bg-red-900/20">
            <h5 className="mb-2 font-semibold text-red-700 dark:text-red-400">{t.labels.risks}</h5>
            <ul className="space-y-1">
              {currentScenario.risks.map((risk, idx) => (
                <li
                  key={idx}
                  className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300"
                >
                  <span>•</span>
                  {risk}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-lg border border-green-200 bg-green-50/50 p-4 dark:border-green-800 dark:bg-green-900/20">
            <h5 className="mb-2 font-semibold text-green-700 dark:text-green-400">
              {t.labels.catalysts}
            </h5>
            <ul className="space-y-1">
              {currentScenario.catalysts.map((catalyst, idx) => (
                <li
                  key={idx}
                  className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300"
                >
                  <span>•</span>
                  {catalyst}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Note */}
      <div className="mt-6 text-center text-xs text-gray-500 dark:text-gray-400">{t.footer}</div>
    </div>
  )
}
