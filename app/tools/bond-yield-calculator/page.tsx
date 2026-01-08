import { genPageMetadata } from 'app/seo'
import BondYieldCalculator from '@/features/calculators/BondYieldCalculator'

export const metadata = genPageMetadata({
  title: '미국 장기채(TLT) 수익률 계산기 | 듀레이션 시뮬레이션',
  description:
    '미국 장기 국채 ETF(TLT)의 금리 변동에 따른 기대 수익률을 계산해보세요. 듀레이션(Duration) 공식을 활용하여 자본 차익과 배당 수익을 시뮬레이션합니다.',
  keywords: [
    'TLT',
    '미국 국채',
    '장기채',
    '채권 투자',
    '듀레이션',
    'Duration',
    '채권 수익률 계산기',
    'TLT 주가 예상',
    '금리 인하',
  ],
})

export default function BondYieldCalculatorPage() {
  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: '미국 장기채(TLT) 수익률 계산기',
      description:
        '금리 변동 시나리오에 따른 TLT 기대 수익률 시뮬레이션 도구. 듀레이션 효과를 시각적으로 확인하세요.',
      applicationCategory: 'FinanceApplication',
      operatingSystem: 'Any',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'KRW',
      },
      featureList: [
        '금리 변화에 따른 채권 가격 예측',
        '듀레이션(Duration) 기반 자본 차익 계산',
        '배당 수익을 포함한 총 수익(Total Return) 시뮬레이션',
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: '채권 듀레이션(Duration)이란 무엇인가요?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '듀레이션은 금리가 1% 변할 때 채권 가격이 약 몇 % 변동하는지를 나타내는 민감도 지표입니다. 예를 들어 듀레이션이 16년인 채권은 금리가 1% 하락하면 가격이 약 16% 상승합니다.',
          },
        },
        {
          '@type': 'Question',
          name: 'TLT 투자 시 수익은 어떻게 계산되나요?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'TLT 투자의 총 수익(Total Return)은 "자본 차익(Capital Gain)"과 "배당 수익(Dividend/Interest)"의 합입니다. 자본 차익은 금리 하락 시 듀레이션 효과로 발생하며, 배당 수익은 보유 기간 동안 받는 이자 분배금입니다.',
          },
        },
      ],
    },
  ]

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 dark:text-gray-100">
            채권 수익률 시뮬레이터
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            금리 변화에 따른 채권 가격 변동과 총 수익을 미리 계산해보세요
          </p>
        </div>
        <div className="container py-8">
          <div className="mx-auto max-w-4xl">
            <BondYieldCalculator />

            <div className="mt-12 space-y-8 text-gray-600 dark:text-gray-300">
              <section>
                <h3 className="mb-4 text-xl font-bold text-gray-900 dark:text-gray-100">
                  💡 듀레이션(Duration)이란?
                </h3>
                <p>
                  듀레이션은 <strong>금리가 1% 변할 때 채권 가격이 몇 % 변하는지</strong>를 나타내는
                  민감도 지표입니다. TLT의 듀레이션이 약 16년이라면, 금리가 1% 떨어질 때 채권 가격은
                  약 16% 상승합니다. (반대로 금리가 오르면 가격은 하락합니다)
                </p>
              </section>

              <section>
                <h3 className="mb-4 text-xl font-bold text-gray-900 dark:text-gray-100">
                  📊 계산 공식
                </h3>
                <ul className="list-inside list-disc space-y-2">
                  <li>
                    <strong>자본 차익:</strong> -1 × 듀레이션 × (목표 금리 - 현재 금리)
                  </li>
                  <li>
                    <strong>배당 수익:</strong> 투자금 × 현재 연 배당 수익률 (단순 가정)
                  </li>
                  <li>
                    <strong>총 수익:</strong> 자본 차익 + 배당 수익
                  </li>
                </ul>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
