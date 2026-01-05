'use client'

import React from 'react'

interface FlowStep {
  title: string
  subtitle: string
  color: string
}

interface ConnectionFlowDiagramProps {
  locale?: 'ko' | 'en'
}

type TextContent = {
  steps: {
    tension: FlowStep
    rearm: FlowStep
    demand: FlowStep
    uuv: FlowStep
    tech: FlowStep
    kraken: FlowStep
  }
}

const TEXTS: Record<'ko' | 'en', TextContent> = {
  ko: {
    steps: {
      tension: {
        title: '지정학적 긴장',
        subtitle: '남중국해, 발틱해, 북극',
        color: 'from-red-500 to-rose-600',
      },
      rearm: {
        title: '서방 진영 재무장',
        subtitle: '2024: $2.718T (SIPRI 역대 최고)',
        color: 'from-orange-500 to-amber-600',
      },
      demand: {
        title: '비대칭 전력 수요',
        subtitle: '무인화, 소모성 플랫폼',
        color: 'from-yellow-500 to-lime-600',
      },
      uuv: {
        title: 'UUV/XLUUV 시장',
        subtitle: '2030: $5.6B~$11B 전망',
        color: 'from-emerald-500 to-teal-600',
      },
      tech: {
        title: '병목 기술 수요',
        subtitle: '배터리, 소나, LiDAR',
        color: 'from-cyan-500 to-blue-600',
      },
      kraken: {
        title: 'Kraken Robotics',
        subtitle: '핵심 공급자',
        color: 'from-violet-500 to-purple-600',
      },
    },
  },
  en: {
    steps: {
      tension: {
        title: 'Geopolitical Tension',
        subtitle: 'S.China Sea, Baltic, Arctic',
        color: 'from-red-500 to-rose-600',
      },
      rearm: {
        title: 'Western Rearmament',
        subtitle: '2024: $2.718T (Record High)',
        color: 'from-orange-500 to-amber-600',
      },
      demand: {
        title: 'Asymmetric Demand',
        subtitle: 'Unmanned, Expendable',
        color: 'from-yellow-500 to-lime-600',
      },
      uuv: {
        title: 'UUV/XLUUV Market',
        subtitle: '2030: $5.6B~$11B Forecast',
        color: 'from-emerald-500 to-teal-600',
      },
      tech: {
        title: 'Bottleneck Tech',
        subtitle: 'Battery, Sonar, LiDAR',
        color: 'from-cyan-500 to-blue-600',
      },
      kraken: {
        title: 'Kraken Robotics',
        subtitle: 'Key Supplier',
        color: 'from-violet-500 to-purple-600',
      },
    },
  },
}

const getSteps = (t: TextContent): FlowStep[] => [
  t.steps.tension,
  t.steps.rearm,
  t.steps.demand,
  t.steps.uuv,
  t.steps.tech,
  t.steps.kraken,
]

export default function ConnectionFlowDiagram({ locale = 'ko' }: ConnectionFlowDiagramProps) {
  const t = TEXTS[locale]
  const steps = getSteps(t)
  return (
    <div className="my-8 overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 shadow-xl dark:border-gray-700 dark:bg-gray-900">
      <div className="flex flex-col items-center gap-2">
        {steps.map((step, index) => (
          <React.Fragment key={step.title}>
            <div
              className={`w-full max-w-md rounded-xl bg-linear-to-r ${step.color} p-4 text-center shadow-lg transition-transform hover:scale-[1.02]`}
            >
              <div className="font-bold text-white">{step.title}</div>
              <div className="mt-1 text-sm text-white/80">{step.subtitle}</div>
            </div>
            {index < steps.length - 1 && (
              <div className="flex h-8 w-8 items-center justify-center">
                <svg
                  className="h-6 w-6 text-gray-400 dark:text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                  />
                </svg>
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  )
}
