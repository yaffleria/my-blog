# Yaffleria's Blog

개인 투자자를 위한 기업 분석과 투자 인사이트를 제공하는 **Yaffleria**의 소스 코드 저장소입니다.

## 🌟 프로젝트 개요

이 프로젝트는 **Next.js** 기반의 정적 블로그 및 금융 도구 플랫폼입니다.
사용자에게 깊이 있는 투자 분석 리포트와 실시간 금융 데이터를 시각화하는 도구를 제공하는 것을 목표로 합니다.

주요 특징:

- **MDX 기반 블로그**: 투자 리포트를 Markdown(MDX)으로 작성하여 풍부한 시각화와 함께 제공
- **금융 도구**: 금 시세 프리미엄 계산기, 비트코인 김치프리미엄 확인 등 실용적인 도구 내장
- **데이터 시각화**: Recharts를 활용한 동적인 차트 및 데이터 표현

---

## 🏗️ 기술적 구조 (Project Architecture)

이 프로젝트는 확장성과 유지보수성을 위해 **하이브리드 버티컬 아키텍처(Hybrid Vertical Architecture)**를 따르고 있습니다.
기능(Feature) 중심의 구조와 명확한 역할 분리를 통해 코드의 복잡도를 관리합니다.

### 📂 디렉토리 구조 (Directory Overview)

#### `/app`

Next.js App Router의 핵심 구조입니다.

- **`(blog)`**: 블로그 관련 페이지 라우트 그룹
- **`(tools)`**: 금융 도구 및 유틸리티 관련 라우트 그룹
  - `tools/`
    - `_components/`: 도구 섹션 전용 컴포넌트 (Shared within Tools)
    - `_services/`: 도구 섹션 전용 서비스/유틸리티 로직
    - `[tool-name]/`: 개별 도구의 페이지 및 로직

#### `/features`

특정 도메인이나 기능에 종속된 코드를 수직적으로 격리하여 관리합니다.

- **`charts/`**: 특정 기업 분석이나 리포트에 사용되는 차트 컴포넌트 모음
  - `[domain-name]/`: 개별 분석 주제별 서브 디렉토리 (예: `kraken-geopolitical`, `mastercard-earnings`)

#### `/components`

전역에서 사용되는 재사용 가능한 컴포넌트입니다.

- **`layout/`**: 글로벌 레이아웃 (Header, Footer, Navigation 등)
- **`ui/`**: 범용 UI 컴포넌트 (Button, Card, Link, Tag 등 Design System 요소)
- **`mdx/`**: 블로그 포스트 내에서 사용되는 MDX 전용 컴포넌트

#### `/lib` & `/data`

- **`/lib`**: 공유 유틸리티 함수 및 설정
- **`/data`**: 사이트 메타데이터, 내비게이션 링크 등 정적 데이터

### 📐 핵심 설계 원칙 (Key Design Principles)

1.  **Vertical Slicing (수직적 분리)**
    - 특정 기능(예: 특정 리포트의 차트들)과 관련된 코드는 `/features` 폴더 내에 함께 배치하여 응집도를 높입니다.
    - 이를 통해 기능 추가/수정 시 영향 범위를 최소화합니다.

2.  **Clear Scope (명확한 범위)**
    - `src/components`는 **전역적(Global)**으로 사용되는 UI 요소만 포함합니다.
    - 특정 기능에만 쓰이는 UI는 `features` 또는 해당 도구 폴더(`app/tools/_components`)에 위치시킵니다.

3.  **Tool Isolation (도구의 독립성)**
    - `app/tools` 내의 각 도구는 가능한 한 독립적인 컴포넌트와 서비스를 가지도록 설계하여, 도구 간의 의존성을 줄입니다.
