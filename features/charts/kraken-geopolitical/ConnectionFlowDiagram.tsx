'use client'

import React from 'react'

interface FlowStep {
  title: string
  subtitle: string
  isHighlight?: boolean
}

interface ConnectionFlowDiagramProps {
  locale?: 'ko' | 'en'
}

const TEXTS = {
  ko: {
    steps: [
      { title: '지정학적 긴장', subtitle: '남중국해, 발틱해, 북극' },
      { title: '서방 진영 재무장', subtitle: '2024: $2.718T (역대 최고)' },
      { title: '비대칭 전력 수요', subtitle: '무인화, 소모성 플랫폼' },
      { title: 'UUV/XLUUV 시장', subtitle: '2030: $5.6B~$11B 전망' },
      { title: '병목 기술 수요', subtitle: '배터리, 소나, LiDAR' },
      { title: 'Kraken Robotics', subtitle: '핵심 공급자', isHighlight: true },
    ],
  },
  en: {
    steps: [
      { title: 'Geopolitical Tension', subtitle: 'S.China Sea, Baltic, Arctic' },
      { title: 'Western Rearmament', subtitle: '2024: $2.718T (Record High)' },
      { title: 'Asymmetric Demand', subtitle: 'Unmanned, Expendable' },
      { title: 'UUV/XLUUV Market', subtitle: '2030: $5.6B~$11B Forecast' },
      { title: 'Bottleneck Tech', subtitle: 'Battery, Sonar, LiDAR' },
      { title: 'Kraken Robotics', subtitle: 'Key Supplier', isHighlight: true },
    ],
  },
}

export default function ConnectionFlowDiagram({ locale = 'en' }: ConnectionFlowDiagramProps) {
  const steps: FlowStep[] = TEXTS[locale].steps

  return (
    <div className="my-8 overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900 p-6 shadow-2xl">
      <div className="flex flex-col items-center gap-2">
        {steps.map((step, index) => (
          <React.Fragment key={step.title}>
            <div
              className={`w-full max-w-md rounded-lg border p-4 text-center shadow-lg transition-transform hover:scale-[1.02] ${
                step.isHighlight
                  ? 'border-rose-700 bg-rose-950/50'
                  : 'border-neutral-700 bg-neutral-800'
              }`}
            >
              <div className={`font-bold ${step.isHighlight ? 'text-rose-400' : 'text-white'}`}>
                {step.title}
              </div>
              <div className="mt-1 text-sm text-neutral-400">{step.subtitle}</div>
            </div>
            {index < steps.length - 1 && (
              <div className="flex h-8 w-8 items-center justify-center">
                <svg
                  className="h-5 w-5 text-rose-600"
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
