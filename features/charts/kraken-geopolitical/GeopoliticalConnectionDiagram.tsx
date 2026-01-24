'use client'

import React, { useState } from 'react'

interface ConnectionNode {
  id: string
  label: string
  sublabel?: string
  x: number
  y: number
  details: string[]
}

interface ArrowConnection {
  from: string
  to: string
  label: string
}

interface GeopoliticalConnectionDiagramProps {
  locale?: 'ko' | 'en'
}

type NodeContent = {
  label: string
  sublabel: string
  details: string[]
}

type TextContent = {
  title: string
  instruction: string
  close: string
  nodes: {
    [key: string]: NodeContent
  }
  connections: {
    [key: string]: string
  }
}

const TEXTS: Record<'ko' | 'en', TextContent> = {
  ko: {
    title: '지정학적 연결고리',
    instruction: '노드를 클릭하여 상세 정보 확인',
    close: '닫기',
    nodes: {
      geopolitics: {
        label: '지정학적 긴장',
        sublabel: '남중국해, 발틱해, 북극',
        details: [
          '남중국해: 미-중 해상 패권 경쟁',
          '발틱해: 러시아 해저 케이블 위협',
          '북극: 자원 확보 경쟁 심화',
          '대만해협: 긴장 고조',
        ],
      },
      military: {
        label: '군사비 증가',
        sublabel: '역대 최고 $2.718T',
        details: [
          '2024년 글로벌 $2.718T (+9.4%)',
          'NATO 2% GDP 압박',
          '중국 +13% YoY',
          '미국 FY2026 자율성 $13.4B',
        ],
      },
      unmanned: {
        label: '무인화 트렌드',
        sublabel: 'UUV/USV 수요 폭발',
        details: [
          '인명 손실 최소화 요구',
          '비용 효율적 전력 확보',
          '2032년 UUV 시장 $8.14B',
          'CAGR 13.5% 성장',
        ],
      },
      infrastructure: {
        label: '해저 인프라 보호',
        sublabel: '케이블, 파이프라인',
        details: [
          '해저 케이블: 인터넷 95%',
          '에너지 파이프라인 감시',
          'Nord Stream 사보타주',
          'NATO 해저 감시 강화',
        ],
      },
      aukus: {
        label: 'AUKUS 동맹',
        sublabel: '호주-영국-미국',
        details: [
          'Ghost Shark 프로그램 $1.7B',
          '호주 핵잠수함 도입',
          '공동 기술 개발',
          '인도-태평양 억지력',
        ],
      },
      kraken: {
        label: 'Kraken Robotics',
        sublabel: '핵심 공급자',
        details: [
          'SeaPower 배터리 독점',
          'AquaPix SAS 소나',
          'Anduril 파트너십',
          'NATO 브레이크아웃',
        ],
      },
    },
    connections: {
      trigger: '촉발',
      demand: '수요 창출',
      investment: '투자 확대',
      cooperation: '협력 강화',
      contract: '계약 수주',
      supply: '공급 계약',
      budget: '예산 배정',
      tech: '기술 수요',
    },
  },
  en: {
    title: 'Geopolitical Connection Map',
    instruction: 'Click nodes to view details',
    close: 'Close',
    nodes: {
      geopolitics: {
        label: 'Geopolitics',
        sublabel: 'S.China Sea, Baltic, Arctic',
        details: [
          'S.China Sea: US-China Supremacy',
          'Baltic: Subsea Cable Threats',
          'Arctic: Resource Competition',
          'Taiwan Strait: Rising Tensions',
        ],
      },
      military: {
        label: 'Mil. Spending',
        sublabel: 'Record High $2.718T',
        details: [
          '2024 Global $2.718T (+9.4%)',
          'NATO 2% GDP Target',
          'China +13% YoY',
          'US FY2026 Autonomy $13.4B',
        ],
      },
      unmanned: {
        label: 'Unmanned Trend',
        sublabel: 'UUV/USV Demand Boom',
        details: [
          'Minimize Life Loss',
          'Cost-Effective Power',
          '2032 UUV Market $8.14B',
          'CAGR 13.5% Growth',
        ],
      },
      infrastructure: {
        label: 'Infra Protection',
        sublabel: 'Cables, Pipelines',
        details: [
          'Subsea Cables: 95% Internet',
          'Pipeline Surveillance',
          'Nord Stream Sabotage',
          'NATO Undersea Surveillance',
        ],
      },
      aukus: {
        label: 'AUKUS Alliance',
        sublabel: 'AU-UK-US',
        details: [
          'Ghost Shark Program $1.7B',
          'AU Nuclear Subs',
          'Joint Tech Development',
          'Indo-Pacific Deterrence',
        ],
      },
      kraken: {
        label: 'Kraken Robotics',
        sublabel: 'Key Supplier',
        details: [
          'SeaPower Battery Monopoly',
          'AquaPix SAS Sonar',
          'Anduril Partnership',
          'NATO Breakout',
        ],
      },
    },
    connections: {
      trigger: 'Trigger',
      demand: 'Demand',
      investment: 'Investment',
      cooperation: 'Cooperation',
      contract: 'Contract',
      supply: 'Supply',
      budget: 'Budget',
      tech: 'Tech Demand',
    },
  },
}

const getNodes = (t: TextContent): ConnectionNode[] => [
  {
    id: 'geopolitics',
    label: t.nodes.geopolitics.label,
    sublabel: t.nodes.geopolitics.sublabel,
    x: 50,
    y: 8,
    details: t.nodes.geopolitics.details,
  },
  {
    id: 'military',
    label: t.nodes.military.label,
    sublabel: t.nodes.military.sublabel,
    x: 15,
    y: 35,
    details: t.nodes.military.details,
  },
  {
    id: 'unmanned',
    label: t.nodes.unmanned.label,
    sublabel: t.nodes.unmanned.sublabel,
    x: 85,
    y: 35,
    details: t.nodes.unmanned.details,
  },
  {
    id: 'infrastructure',
    label: t.nodes.infrastructure.label,
    sublabel: t.nodes.infrastructure.sublabel,
    x: 15,
    y: 65,
    details: t.nodes.infrastructure.details,
  },
  {
    id: 'aukus',
    label: t.nodes.aukus.label,
    sublabel: t.nodes.aukus.sublabel,
    x: 85,
    y: 65,
    details: t.nodes.aukus.details,
  },
  {
    id: 'kraken',
    label: t.nodes.kraken.label,
    sublabel: t.nodes.kraken.sublabel,
    x: 50,
    y: 88,
    details: t.nodes.kraken.details,
  },
]

const getConnections = (): ArrowConnection[] => [
  { from: 'geopolitics', to: 'military', label: '' },
  { from: 'geopolitics', to: 'unmanned', label: '' },
  { from: 'military', to: 'infrastructure', label: '' },
  { from: 'unmanned', to: 'aukus', label: '' },
  { from: 'infrastructure', to: 'kraken', label: '' },
  { from: 'aukus', to: 'kraken', label: '' },
  { from: 'military', to: 'kraken', label: '' },
  { from: 'unmanned', to: 'kraken', label: '' },
]

export default function GeopoliticalConnectionDiagram({
  locale = 'ko',
}: GeopoliticalConnectionDiagramProps) {
  const [selectedNode, setSelectedNode] = useState<string | null>(null)
  const [hoveredNode, setHoveredNode] = useState<string | null>(null)

  const t = TEXTS[locale]
  const nodes = getNodes(t)
  const connections = getConnections()

  const selectedNodeData = nodes.find((n) => n.id === selectedNode)
  const isKraken = (id: string) => id === 'kraken'

  return (
    <div className="my-8 overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900 p-6 shadow-2xl">
      <div className="mb-6 text-center">
        <h3 className="text-xl font-bold text-white">{t.title}</h3>
        <p className="mt-2 text-sm text-neutral-500">{t.instruction}</p>
      </div>

      <div className="relative mx-auto h-[450px] max-w-4xl">
        {/* Connection Lines */}
        <svg className="absolute inset-0 h-full w-full" style={{ zIndex: 0 }}>
          <defs>
            <marker
              id="arrowhead-red"
              markerWidth="10"
              markerHeight="7"
              refX="9"
              refY="3.5"
              orient="auto"
            >
              <polygon points="0 0, 10 3.5, 0 7" fill="#dc2626" />
            </marker>
            <marker
              id="arrowhead-gray"
              markerWidth="10"
              markerHeight="7"
              refX="9"
              refY="3.5"
              orient="auto"
            >
              <polygon points="0 0, 10 3.5, 0 7" fill="#525252" />
            </marker>
          </defs>
          {connections.map((conn, idx) => {
            const fromNode = nodes.find((n) => n.id === conn.from)
            const toNode = nodes.find((n) => n.id === conn.to)
            if (!fromNode || !toNode) return null

            const isActive = hoveredNode === conn.from || hoveredNode === conn.to

            return (
              <g key={idx}>
                <line
                  x1={`${fromNode.x}%`}
                  y1={`${fromNode.y + 5}%`}
                  x2={`${toNode.x}%`}
                  y2={`${toNode.y - 3}%`}
                  stroke={isActive ? '#dc2626' : '#404040'}
                  strokeWidth={isActive ? 2 : 1}
                  strokeDasharray={isActive ? '0' : '4,4'}
                  markerEnd={isActive ? 'url(#arrowhead-red)' : 'url(#arrowhead-gray)'}
                  className="transition-all duration-300"
                />
              </g>
            )
          })}
        </svg>

        {/* Nodes */}
        {nodes.map((node) => (
          <button
            key={node.id}
            className={`absolute -translate-x-1/2 -translate-y-1/2 transform cursor-pointer rounded-lg border-2 px-4 py-3 shadow-lg transition-all duration-300 hover:scale-105 ${
              isKraken(node.id)
                ? 'border-rose-600 bg-rose-950 hover:bg-rose-900'
                : 'border-neutral-700 bg-neutral-800 hover:border-neutral-600 hover:bg-neutral-700'
            } ${
              selectedNode === node.id || hoveredNode === node.id
                ? isKraken(node.id)
                  ? 'scale-105 border-rose-500 shadow-xl shadow-rose-500/20'
                  : 'scale-105 border-amber-500 shadow-xl shadow-amber-500/20'
                : ''
            }`}
            style={{
              left: `${node.x}%`,
              top: `${node.y}%`,
              zIndex: selectedNode === node.id ? 20 : 10,
            }}
            onClick={() => setSelectedNode(selectedNode === node.id ? null : node.id)}
            onMouseEnter={() => setHoveredNode(node.id)}
            onMouseLeave={() => setHoveredNode(null)}
          >
            <div className="text-center">
              <p
                className={`text-sm font-bold whitespace-nowrap ${isKraken(node.id) ? 'text-rose-400' : 'text-white'}`}
              >
                {node.label}
              </p>
              {node.sublabel && (
                <p className="text-xs whitespace-nowrap text-neutral-400">{node.sublabel}</p>
              )}
            </div>
          </button>
        ))}
      </div>

      {/* Detail Panel */}
      {selectedNodeData && (
        <div
          className={`mt-6 rounded-xl border p-5 ${isKraken(selectedNodeData.id) ? 'border-rose-800 bg-rose-950/50' : 'border-neutral-700 bg-neutral-800'}`}
        >
          <div className="flex items-start justify-between">
            <div>
              <h4
                className={`text-lg font-bold ${isKraken(selectedNodeData.id) ? 'text-rose-400' : 'text-white'}`}
              >
                {selectedNodeData.label}
              </h4>
              <p className="text-sm text-neutral-400">{selectedNodeData.sublabel}</p>
            </div>
            <button
              onClick={() => setSelectedNode(null)}
              className="rounded-full bg-neutral-700 px-3 py-1 text-sm text-neutral-300 hover:bg-neutral-600"
            >
              {t.close}
            </button>
          </div>
          <div className="mt-4 grid gap-2">
            {selectedNodeData.details.map((detail, idx) => (
              <p key={idx} className="flex items-center gap-2 text-sm text-neutral-300">
                <span className="text-rose-500">→</span>
                {detail}
              </p>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
