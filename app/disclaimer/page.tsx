import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: '면책조항' })

export default function DisclaimerPage() {
  return (
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

        <h2>6. 건강 및 의료 정보</h2>
        <p>본 사이트에 게시된 건강 관련 정보는:</p>
        <ul>
          <li>일반적인 정보 제공 목적이며, 의료 진단이나 치료를 대체하지 않습니다.</li>
          <li>건강 문제가 있는 경우 반드시 의료 전문가와 상담하시기 바랍니다.</li>
          <li>개인의 건강 상태나 상황에 따라 적절하지 않을 수 있습니다.</li>
        </ul>

        <h2>7. 요리 레시피</h2>
        <p>본 사이트에 게시된 요리 레시피는:</p>
        <ul>
          <li>개인적인 경험을 바탕으로 작성되었습니다.</li>
          <li>알레르기, 식이 제한 등 개인의 상황을 고려하지 않았을 수 있습니다.</li>
          <li>식품 안전 및 개인 건강 상황은 이용자 본인이 확인해야 합니다.</li>
        </ul>

        <h2>8. 면책 안내</h2>
        <p>
          본 사이트는 개인이 운영하는 무료 블로그입니다. 본 사이트의 콘텐츠를 참고하여 내리신
          결정(투자, 건강 관련 행동 등)의 결과에 대해 운영자는 법적 책임을 지지 않습니다.
        </p>

        <h2>9. 이용 동의</h2>
        <p>
          본 사이트를 이용함으로써, 이용자는 본 면책조항에 동의하는 것으로 간주됩니다. 본 면책조항에
          동의하지 않는 경우 사이트 이용을 중단해 주시기 바랍니다.
        </p>

        <h2>10. 문의</h2>
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
}
