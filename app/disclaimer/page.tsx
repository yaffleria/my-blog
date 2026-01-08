import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: '면책조항' })

import ContentLanguageSwitcher from '@/components/ui/ContentLanguageSwitcher'

export default function DisclaimerPage() {
  const koreanContent = (
    <div className="divide-y divide-gray-200 dark:divide-gray-700">
      <div className="space-y-2 pt-6 pb-8 md:space-y-5">
        <h1 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14 dark:text-gray-100">
          면책조항
        </h1>
        <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
          최종 수정일: 2026년 1월 3일
        </p>
      </div>
      <div className="prose dark:prose-invert max-w-none pt-8 pb-8">
        <div className="rounded-lg border-l-4 border-yellow-500 bg-yellow-50 p-4 dark:bg-yellow-900/20">
          <p className="font-semibold text-yellow-800 dark:text-yellow-200">
            ⚠️ 중요 안내: 본 사이트의 모든 콘텐츠는 정보 제공 목적으로만 작성되었으며, 전문적인 투자
            조언, 법률 자문, 의료 조언 등을 대체하지 않습니다.
          </p>
        </div>

        <h2>1. 투자 관련 면책</h2>
        <p>
          본 사이트에 게시된 투자, 주식, 경제 관련 콘텐츠는 <strong>정보 제공 목적</strong>
          으로만 작성되었습니다:
        </p>
        <ul>
          <li>
            <strong>투자 권유 아님:</strong> 특정 금융 상품, 주식, ETF, 채권 등에 대한 매수/매도
            권유나 투자 추천이 아닙니다.
          </li>
          <li>
            <strong>원금 손실 위험:</strong> 모든 투자에는 원금 손실 위험이 있습니다. 과거 수익률이
            미래 수익을 보장하지 않습니다.
          </li>
          <li>
            <strong>본인 책임:</strong> 투자 결정은 본인의 재무 상황, 투자 목적, 리스크 허용도를
            종합적으로 고려하여 본인의 판단과 책임 하에 이루어져야 합니다.
          </li>
          <li>
            <strong>전문가 상담 권장:</strong> 중요한 투자 결정 전에는 공인 재무설계사, 투자 상담사
            등 전문가와 상담하시기 바랍니다.
          </li>
        </ul>

        <h2>2. 정보의 정확성</h2>
        <p>본 사이트는 정확한 정보를 제공하기 위해 노력하지만:</p>
        <ul>
          <li>제공되는 정보의 정확성, 완전성, 적시성을 보장하지 않습니다.</li>
          <li>정보는 작성 시점을 기준으로 하며, 이후 변경되었을 수 있습니다.</li>
          <li>오류, 누락, 오타 등이 있을 수 있으며, 이로 인한 손해에 대해 책임지지 않습니다.</li>
        </ul>

        <h2>3. 개인 의견</h2>
        <p>
          본 사이트에 게시된 콘텐츠는 운영자의 <strong>개인적인 의견과 분석</strong>을 담고
          있습니다:
        </p>
        <ul>
          <li>전문적인 투자 자문이나 법적 조언이 아닙니다.</li>
          <li>다른 전문가나 기관의 의견과 다를 수 있습니다.</li>
          <li>시간이 지남에 따라 운영자의 의견이 변경될 수 있습니다.</li>
        </ul>

        <h2>4. 외부 링크</h2>
        <p>본 사이트에는 이용자 편의를 위해 외부 웹사이트로의 링크가 포함될 수 있습니다:</p>
        <ul>
          <li>외부 사이트의 콘텐츠, 정확성, 개인정보 처리방침에 대해 책임지지 않습니다.</li>
          <li>외부 링크 클릭은 이용자의 선택이며, 해당 사이트의 이용약관이 적용됩니다.</li>
          <li>특정 외부 사이트나 서비스를 보증하거나 추천하는 것이 아닙니다.</li>
        </ul>

        <h2>5. 제휴 및 광고</h2>
        <ul>
          <li>
            본 사이트는 일부 콘텐츠에서 제휴 링크(Affiliate Links)를 포함할 수 있습니다. 해당 링크를
            통한 구매 시 소정의 수수료를 받을 수 있습니다.
          </li>
          <li>제휴 관계가 콘텐츠의 객관성이나 정확성에 영향을 미치지 않습니다.</li>
          <li>
            향후 광고 서비스(Google AdSense 등)가 게재될 수 있으며, 광고 내용은 본 사이트의 의견과
            무관합니다.
          </li>
        </ul>

        <h2>6. 면책 안내</h2>
        <p>
          본 사이트는 개인이 운영하는 무료 블로그입니다. 본 사이트의 콘텐츠를 참고하여 내리신
          결정(투자, 건강 관련 행동 등)의 결과에 대해 운영자는 법적 책임을 지지 않습니다.
        </p>

        <h2>7. 이용 동의</h2>
        <p>
          본 사이트를 이용함으로써, 이용자는 본 면책조항에 동의하는 것으로 간주됩니다. 본 면책조항에
          동의하지 않는 경우 사이트 이용을 중단해 주시기 바랍니다.
        </p>

        <h2>8. 문의</h2>
        <p>면책조항에 대한 문의사항은 아래 연락처로 연락해 주시기 바랍니다:</p>
        <ul>
          <li>
            <strong>이메일</strong>:{' '}
            <a
              href="mailto:yaffleria@gmail.com"
              className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            >
              yaffleria@gmail.com
            </a>
          </li>
        </ul>

        <hr className="my-8" />

        <p className="text-sm text-gray-500 dark:text-gray-400">
          본 면책조항은 2026년 1월 3일부터 적용됩니다.
        </p>
      </div>
    </div>
  )

  const englishContent = (
    <div className="divide-y divide-gray-200 dark:divide-gray-700">
      <div className="space-y-2 pt-6 pb-8 md:space-y-5">
        <h1 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14 dark:text-gray-100">
          Disclaimer
        </h1>
        <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
          Last Updated: January 3, 2026
        </p>
      </div>
      <div className="prose dark:prose-invert max-w-none pt-8 pb-8">
        <div className="rounded-lg border-l-4 border-yellow-500 bg-yellow-50 p-4 dark:bg-yellow-900/20">
          <p className="font-semibold text-yellow-800 dark:text-yellow-200">
            ⚠️ Important Notice: All content on this site is for informational purposes only and
            does not substitute for professional investment advice, legal advice, or medical advice.
          </p>
        </div>

        <h2>1. Investment Disclaimer</h2>
        <p>
          Investment, stock, and economic content posted on this site is for{' '}
          <strong>informational purposes only</strong>:
        </p>
        <ul>
          <li>
            <strong>Not Investment Advice:</strong> It is not a recommendation or investment advice
            to buy/sell specific financial products, stocks, ETFs, bonds, etc.
          </li>
          <li>
            <strong>Risk of Loss:</strong> All investments involve the risk of principal loss. Past
            performance does not guarantee future results.
          </li>
          <li>
            <strong>Personal Responsibility:</strong> Investment decisions must be made under your
            own judgment and responsibility, comprehensively considering your financial situation,
            investment objectives, and risk tolerance.
          </li>
          <li>
            <strong>Consult a Professional:</strong> Before making significant investment decisions,
            please consult with a certified financial planner, investment advisor, or other
            professional.
          </li>
        </ul>

        <h2>2. Accuracy of Information</h2>
        <p>This site strives to provide accurate information, but:</p>
        <ul>
          <li>
            We do not guarantee the accuracy, completeness, or timeliness of the provided
            information.
          </li>
          <li>Information is based on the time of writing and may have changed since then.</li>
          <li>
            There may be errors, omissions, or typos, and we are not responsible for any damages
            resulting from them.
          </li>
        </ul>

        <h2>3. Personal Opinion</h2>
        <p>
          The content posted on this site reflects the operator&apos;s{' '}
          <strong>personal opinions and analysis</strong>:
        </p>
        <ul>
          <li>It is not professional investment advice or legal advice.</li>
          <li>It may differ from the opinions of other experts or institutions.</li>
          <li>The operator&apos;s opinion may change over time.</li>
        </ul>

        <h2>4. External Links</h2>
        <p>This site may include links to external websites for user convenience:</p>
        <ul>
          <li>
            We are not responsible for the content, accuracy, or privacy policies of external sites.
          </li>
          <li>
            Clicking on external links is your choice, and the terms of use of that site apply.
          </li>
          <li>We do not endorse or recommend specific external sites or services.</li>
        </ul>

        <h2>5. Affiliates and Ads</h2>
        <ul>
          <li>
            This site may include affiliate links in some content. We may receive a small commission
            for purchases made through these links.
          </li>
          <li>Affiliate relationships do not affect the objectivity or accuracy of the content.</li>
          <li>
            Advertising services (such as Google AdSense) may be displayed in the future, and the
            content of the ads is independent of the opinions of this site.
          </li>
        </ul>

        <h2>6. Indemnification</h2>
        <p>
          This site is a free blog operated by an individual. The operator bears no legal
          responsibility for the consequences of decisions (investment, health-related actions,
          etc.) made based on the content of this site.
        </p>

        <h2>7. Acceptance of Terms</h2>
        <p>
          By using this site, you are deemed to agree to this Disclaimer. If you do not agree to
          this Disclaimer, please stop using the site.
        </p>

        <h2>8. Contact</h2>
        <p>If you have any questions regarding this Disclaimer, please contact us at:</p>
        <ul>
          <li>
            <strong>Email</strong>:{' '}
            <a
              href="mailto:yaffleria@gmail.com"
              className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            >
              yaffleria@gmail.com
            </a>
          </li>
        </ul>

        <hr className="my-8" />

        <p className="text-sm text-gray-500 dark:text-gray-400">
          This Disclaimer is effective from January 3, 2026.
        </p>
      </div>
    </div>
  )

  return <ContentLanguageSwitcher korean={koreanContent} english={englishContent} />
}
