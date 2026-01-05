'use client'

import React, { useState } from 'react'

interface ConnectionNode {
  id: string
  label: string
  sublabel?: string
  color: string
  gradient: string
  icon: string
  x: number
  y: number
  details: string[]
}

interface ArrowConnection {
  from: string
  to: string
  label: string
  color: string
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
    title: '🔗 지정학적 연결고리 다이어그램',
    instruction: '노드를 클릭하여 각 요소의 상세 정보를 확인하세요',
    close: '닫기',
    nodes: {
      geopolitics: {
        label: '지정학적 긴장',
        sublabel: '남중국해, 발틱해, 북극',
        details: [
          '• 남중국해: 미-중 해상 패권 경쟁',
          '• 발틱해: 러시아 해저 케이블 위협',
          '• 북극: 자원 확보 경쟁 심화',
          '• 대만해협: 긴장 고조',
        ],
      },
      military: {
        label: '군사비 증가',
        sublabel: '역대 최고 $2.718T',
        details: [
          '• 2024년 글로벌 $2.718T (+9.4%)',
          '• NATO 2% GDP 압박',
          '• 중국 +13% YoY',
          '• 미국 FY2026 자율성 $13.4B',
        ],
      },
      unmanned: {
        label: '무인화 트렌드',
        sublabel: 'UUV/USV 수요 폭발',
        details: [
          '• 인명 손실 최소화 요구',
          '• 비용 효율적 전력 확보',
          '• 2032년 UUV 시장 $8.14B',
          '• CAGR 13.5% 성장',
        ],
      },
      infrastructure: {
        label: '해저 인프라 보호',
        sublabel: '케이블, 파이프라인',
        details: [
          '• 해저 케이블: 인터넷 95%',
          '• 에너지 파이프라인 감시',
          '• Nord Stream 사보타주',
          '• NATO 해저 감시 강화',
        ],
      },
      aukus: {
        label: 'AUKUS 동맹',
        sublabel: '호주-영국-미국',
        details: [
          '• Ghost Shark 프로그램 $1.7B',
          '• 호주 핵잠수함 도입',
          '• 공동 기술 개발',
          '• 인도-태평양 억지력',
        ],
      },
      kraken: {
        label: 'Kraken Robotics',
        sublabel: '핵심 공급자',
        details: [
          '• SeaPower 배터리 독점',
          '• AquaPix SAS 소나',
          '• Anduril 파트너십',
          '• NATO 브레이크아웃',
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
    title: '🔗 Geopolitical Connection Diagram',
    instruction: 'Click on nodes to view detailed information',
    close: 'Close',
    nodes: {
      geopolitics: {
        label: 'Geopolitics',
        sublabel: 'S.China Sea, Baltic, Arctic',
        details: [
          '• S.China Sea: US-China Supremacy',
          '• Baltic: Subsea Cable Threats',
          '• Arctic: Resource Competition',
          '• Taiwan Strait: Rising Tensions',
        ],
      },
      military: {
        label: 'Mil. Spending',
        sublabel: 'Record High $2.718T',
        details: [
          '• 2024 Global $2.718T (+9.4%)',
          '• NATO 2% GDP Target',
          '• China +13% YoY',
          '• US FY2026 Autonomy $13.4B',
        ],
      },
      unmanned: {
        label: 'Unmanned Trend',
        sublabel: 'UUV/USV Demand Boom',
        details: [
          '• Minimize Life Loss',
          '• Cost-Effective Power',
          '• 2032 UUV Market $8.14B',
          '• CAGR 13.5% Growth',
        ],
      },
      infrastructure: {
        label: 'Infra Protection',
        sublabel: 'Cables, Pipelines',
        details: [
          '• Subsea Cables: 95% Internet',
          '• Pipeline Surveillance',
          '• Nord Stream Sabotage',
          '• NATO Undersea Surveillance',
        ],
      },
      aukus: {
        label: 'AUKUS Alliance',
        sublabel: 'AU-UK-US',
        details: [
          '• Ghost Shark Program $1.7B',
          '• AU Nuclear Subs',
          '• Joint Tech Development',
          '• Indo-Pacific Deterrence',
        ],
      },
      kraken: {
        label: 'Kraken Robotics',
        sublabel: 'Key Supplier',
        details: [
          '• SeaPower Battery Monopoly',
          '• AquaPix SAS Sonar',
          '• Anduril Partnership',
          '• NATO Breakout',
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
    color: '#ef4444',
    gradient: 'from-red-500 to-rose-600',
    icon: '🌍',
    x: 50,
    y: 10,
    details: t.nodes.geopolitics.details,
  },
  {
    id: 'military',
    label: t.nodes.military.label,
    sublabel: t.nodes.military.sublabel,
    color: '#f97316',
    gradient: 'from-orange-500 to-amber-600',
    icon: '💰',
    x: 15,
    y: 35,
    details: t.nodes.military.details,
  },
  {
    id: 'unmanned',
    label: t.nodes.unmanned.label,
    sublabel: t.nodes.unmanned.sublabel,
    color: '#8b5cf6',
    gradient: 'from-violet-500 to-purple-600',
    icon: '🤖',
    x: 85,
    y: 35,
    details: t.nodes.unmanned.details,
  },
  {
    id: 'infrastructure',
    label: t.nodes.infrastructure.label,
    sublabel: t.nodes.infrastructure.sublabel,
    color: '#06b6d4',
    gradient: 'from-cyan-500 to-teal-600',
    icon: '🔌',
    x: 15,
    y: 65,
    details: t.nodes.infrastructure.details,
  },
  {
    id: 'aukus',
    label: t.nodes.aukus.label,
    sublabel: t.nodes.aukus.sublabel,
    color: '#3b82f6',
    gradient: 'from-blue-500 to-indigo-600',
    icon: '🤝',
    x: 85,
    y: 65,
    details: t.nodes.aukus.details,
  },
  {
    id: 'kraken',
    label: t.nodes.kraken.label,
    sublabel: t.nodes.kraken.sublabel,
    color: '#10b981',
    gradient: 'from-emerald-500 to-green-600',
    icon: '🦑',
    x: 50,
    y: 85,
    details: t.nodes.kraken.details,
  },
]

const getConnections = (t: TextContent): ArrowConnection[] => [
  { from: 'geopolitics', to: 'military', label: t.connections.trigger, color: '#ef4444' },
  { from: 'geopolitics', to: 'unmanned', label: t.connections.demand, color: '#ef4444' },
  { from: 'military', to: 'infrastructure', label: t.connections.investment, color: '#f97316' },
  { from: 'unmanned', to: 'aukus', label: t.connections.cooperation, color: '#8b5cf6' },
  { from: 'infrastructure', to: 'kraken', label: t.connections.contract, color: '#06b6d4' },
  { from: 'aukus', to: 'kraken', label: t.connections.supply, color: '#3b82f6' },
  { from: 'military', to: 'kraken', label: t.connections.budget, color: '#f97316' },
  { from: 'unmanned', to: 'kraken', label: t.connections.tech, color: '#8b5cf6' },
]

export default function GeopoliticalConnectionDiagram({
  locale = 'ko',
}: GeopoliticalConnectionDiagramProps) {
  const [selectedNode, setSelectedNode] = useState<string | null>(null)
  const [hoveredNode, setHoveredNode] = useState<string | null>(null)

  const t = TEXTS[locale]
  const nodes = getNodes(t)
  const connections = getConnections(t)

  const selectedNodeData = nodes.find((n) => n.id === selectedNode)

  return (
    <div className="my-8 overflow-hidden rounded-2xl border border-gray-200 bg-linear-to-br from-slate-900 via-slate-800 to-slate-900 p-6 shadow-xl dark:border-gray-700">
      <div className="mb-6 text-center">
        <h3 className="text-2xl font-bold text-white">{t.title}</h3>
        <p className="mt-2 text-sm text-gray-400">{t.instruction}</p>
      </div>

      <div className="relative mx-auto h-[500px] max-w-4xl">
        {/* Connection Lines - SVG */}
        <svg className="absolute inset-0 h-full w-full" style={{ zIndex: 0 }}>
          <defs>
            <marker
              id="arrowhead"
              markerWidth="10"
              markerHeight="7"
              refX="9"
              refY="3.5"
              orient="auto"
            >
              <polygon points="0 0, 10 3.5, 0 7" fill="#6b7280" />
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
                  stroke={isActive ? conn.color : '#4b5563'}
                  strokeWidth={isActive ? 3 : 1.5}
                  strokeDasharray={isActive ? '0' : '5,5'}
                  markerEnd="url(#arrowhead)"
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
            className={`absolute -translate-x-1/2 -translate-y-1/2 transform cursor-pointer rounded-xl bg-linear-to-br p-4 ${node.gradient} border-2 shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-2xl ${
              selectedNode === node.id || hoveredNode === node.id
                ? 'scale-110 border-white shadow-2xl'
                : 'border-transparent'
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
              <span className="text-2xl">{node.icon}</span>
              <p className="mt-1 text-sm font-bold whitespace-nowrap text-white">{node.label}</p>
              {node.sublabel && (
                <p className="text-xs whitespace-nowrap text-white/80">{node.sublabel}</p>
              )}
            </div>
          </button>
        ))}
      </div>

      {/* Detail Panel */}
      {selectedNodeData && (
        <div
          className={`mt-6 rounded-xl bg-linear-to-r p-5 ${selectedNodeData.gradient} shadow-lg`}
        >
          <div className="flex items-start justify-between">
            <div>
              <h4 className="flex items-center gap-2 text-lg font-bold text-white">
                {selectedNodeData.icon} {selectedNodeData.label}
              </h4>
              <p className="text-sm text-white/80">{selectedNodeData.sublabel}</p>
            </div>
            <button
              onClick={() => setSelectedNode(null)}
              className="rounded-full bg-white/20 px-3 py-1 text-sm text-white hover:bg-white/30"
            >
              {t.close}
            </button>
          </div>
          <div className="mt-4 grid gap-2">
            {selectedNodeData.details.map((detail, idx) => (
              <p key={idx} className="text-sm text-white/90">
                {detail}
              </p>
            ))}
          </div>
        </div>
      )}

      {/* Legend */}
      <div className="mt-6 flex flex-wrap justify-center gap-3">
        {nodes.map((node) => (
          <div key={node.id} className="flex items-center gap-1.5">
            <span className="h-3 w-3 rounded-full" style={{ backgroundColor: node.color }}></span>
            <span className="text-xs text-gray-400">{node.label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
