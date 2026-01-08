'use client'

import React, { useState } from 'react'

interface Partner {
  name: string
  type: 'prime' | 'government' | 'alliance'
  color: string
  bgColor: string
  initial: string
  description: string
  products: string[]
  value: string
  status: 'active' | 'growing' | 'potential'
}

interface PartnershipEcosystemProps {
  locale?: 'ko' | 'en'
}

type PartnerContent = {
  description: string
  value: string
}

type TextContent = {
  title: string
  subtitle: string
  labels: {
    products: string
    value: string
    status: {
      growing: string
      active: string
      potential: string
    }
  }
  partners: {
    anduril: PartnerContent
    hii: PartnerContent
    ran: PartnerContent
    nato: PartnerContent
  }
}

const TEXTS: Record<'ko' | 'en', TextContent> = {
  ko: {
    title: 'Kraken 파트너십 생태계',
    subtitle: '핵심 고객사와 공급 관계',
    labels: {
      products: '공급 제품',
      value: '규모',
      status: {
        growing: '성장중',
        active: '활성',
        potential: '잠재',
      },
    },
    partners: {
      anduril: {
        description: '방산계의 테슬라, Kraken 성장의 핵심 파트너',
        value: '주요 수익원, 대당 $250-300만',
      },
      hii: {
        description: '미국 최대 군함 제조사',
        value: '안정적 기반 매출',
      },
      ran: {
        description: 'Ghost Shark 프로그램',
        value: 'AUD $1.7B 프로그램',
      },
      nato: {
        description: '유럽 해양 안보 수요 급증',
        value: 'Baltic Sentry 등',
      },
    },
  },
  en: {
    title: 'Kraken Partnership Ecosystem',
    subtitle: 'Key Customers and Supply Relationships',
    labels: {
      products: 'Products',
      value: 'Value',
      status: {
        growing: 'Growing',
        active: 'Active',
        potential: 'Potential',
      },
    },
    partners: {
      anduril: {
        description: 'The Tesla of Defense, Key Growth Partner',
        value: 'Major Revenue, $2.5-3M/unit',
      },
      hii: {
        description: 'Largest US Warship Manufacturer',
        value: 'Stable Base Revenue',
      },
      ran: {
        description: 'Ghost Shark Program',
        value: 'AUD $1.7B Program',
      },
      nato: {
        description: 'Surging European Maritime Security Demand',
        value: 'Baltic Sentry, etc.',
      },
    },
  },
}

const getPartners = (t: TextContent): Partner[] => [
  {
    name: 'Anduril Industries',
    type: 'prime',
    color: 'from-violet-500 to-purple-600',
    bgColor: 'bg-violet-100 dark:bg-violet-900/30',
    initial: 'A',
    description: t.partners.anduril.description,
    products: ['Dive-LD Battery/Sonar', 'Ghost Shark', 'Copperhead'],
    value: t.partners.anduril.value,
    status: 'growing',
  },
  {
    name: 'HII (Huntington Ingalls)',
    type: 'prime',
    color: 'from-blue-500 to-cyan-600',
    bgColor: 'bg-blue-100 dark:bg-blue-900/30',
    initial: 'H',
    description: t.partners.hii.description,
    products: ['REMUS UUV Sonar'],
    value: t.partners.hii.value,
    status: 'active',
  },
  {
    name: 'Royal Australian Navy',
    type: 'government',
    color: 'from-emerald-500 to-teal-600',
    bgColor: 'bg-emerald-100 dark:bg-emerald-900/30',
    initial: 'AU',
    description: t.partners.ran.description,
    products: ['Ghost Shark XLUUV'],
    value: t.partners.ran.value,
    status: 'growing',
  },
  {
    name: 'NATO',
    type: 'alliance',
    color: 'from-sky-500 to-blue-600',
    bgColor: 'bg-sky-100 dark:bg-sky-900/30',
    initial: 'N',
    description: t.partners.nato.description,
    products: ['USV System', 'Subsea Surveil.'],
    value: t.partners.nato.value,
    status: 'active',
  },
]

const StatusBadge = ({
  status,
  labels,
}: {
  status: string
  labels: { growing: string; active: string; potential: string }
}) => {
  const styles = {
    growing: 'bg-green-100 text-green-700 dark:bg-green-900/50 dark:text-green-300',
    active: 'bg-blue-100 text-blue-700 dark:bg-blue-900/50 dark:text-blue-300',
    potential: 'bg-amber-100 text-amber-700 dark:bg-amber-900/50 dark:text-amber-300',
  }
  return (
    <span
      className={`rounded-full px-2 py-0.5 text-xs font-medium ${styles[status as keyof typeof styles]}`}
    >
      {labels[status as keyof typeof labels]}
    </span>
  )
}

export default function PartnershipEcosystem({ locale = 'ko' }: PartnershipEcosystemProps) {
  const [selected, setSelected] = useState<Partner | null>(null)
  const t = TEXTS[locale]
  const partners = getPartners(t)

  return (
    <div className="my-8 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-xl dark:border-gray-700 dark:bg-gray-900">
      <div className="dark:to-gray-850 border-b border-gray-200 bg-linear-to-r from-gray-50 to-gray-100 px-6 py-4 dark:border-gray-700 dark:from-gray-800">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white">{t.title}</h3>
        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">{t.subtitle}</p>
      </div>
      <div className="grid gap-4 p-6 md:grid-cols-2">
        {partners.map((p) => (
          <button
            key={p.name}
            onClick={() => setSelected(selected?.name === p.name ? null : p)}
            className={`group cursor-pointer rounded-xl border border-gray-200 p-4 text-left transition-all duration-200 hover:border-gray-300 hover:shadow-lg dark:border-gray-700 dark:hover:border-gray-600 ${
              selected?.name === p.name
                ? 'ring-2 ring-blue-500 ring-offset-2 dark:ring-offset-gray-900'
                : ''
            } bg-white dark:bg-gray-800`}
          >
            <div className="flex items-start gap-4">
              <div
                className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-linear-to-br ${p.color} text-lg font-bold text-white shadow-lg`}
              >
                {p.initial}
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2">
                  <h4 className="truncate font-semibold text-gray-900 dark:text-white">{p.name}</h4>
                  <StatusBadge status={p.status} labels={t.labels.status} />
                </div>
                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">{p.description}</p>
              </div>
            </div>
          </button>
        ))}
      </div>
      {selected && (
        <div className={`mx-6 mb-6 rounded-xl ${selected.bgColor} p-4`}>
          <div className="flex items-center gap-3">
            <div
              className={`flex h-8 w-8 items-center justify-center rounded-lg bg-linear-to-br ${selected.color} text-sm font-bold text-white`}
            >
              {selected.initial}
            </div>
            <h4 className="font-semibold text-gray-900 dark:text-white">{selected.name}</h4>
          </div>
          <div className="mt-3 grid gap-2 text-sm">
            <div>
              <span className="font-medium text-gray-700 dark:text-gray-300">
                {t.labels.products}:
              </span>
              <span className="ml-2 text-gray-600 dark:text-gray-400">
                {selected.products.join(', ')}
              </span>
            </div>
            <div>
              <span className="font-medium text-gray-700 dark:text-gray-300">
                {t.labels.value}:
              </span>
              <span className="ml-2 text-gray-600 dark:text-gray-400">{selected.value}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
