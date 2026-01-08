import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: '이용약관' })

import ContentLanguageSwitcher from '@/components/ui/ContentLanguageSwitcher'

export default function TermsPage() {
  const koreanContent = (
    <div className="divide-y divide-gray-200 dark:divide-gray-700">
      <div className="space-y-2 pt-6 pb-8 md:space-y-5">
        <h1 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14 dark:text-gray-100">
          이용약관
        </h1>
        <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
          최종 수정일: 2026년 1월 3일
        </p>
      </div>
      <div className="prose dark:prose-invert max-w-none pt-8 pb-8">
        <h2>제1조 (목적)</h2>
        <p>
          본 약관은 Yaffleria&apos;s Blog(이하 &quot;본 사이트&quot;)이 제공하는 웹사이트 서비스의
          이용과 관련하여 운영자와 이용자 간의 권리, 의무 및 책임사항, 기타 필요한 사항을 규정함을
          목적으로 합니다.
        </p>

        <h2>제2조 (정의)</h2>
        <ol>
          <li>
            <strong>&quot;서비스&quot;</strong>란 본 사이트에서 제공하는 모든 콘텐츠 및 기능을
            말합니다.
          </li>
          <li>
            <strong>&quot;이용자&quot;</strong>란 본 사이트에 접속하여 서비스를 이용하는 모든
            방문자를 말합니다.
          </li>
          <li>
            <strong>&quot;콘텐츠&quot;</strong>란 본 사이트에 게시된 글, 이미지, 동영상 등 모든
            형태의 정보를 말합니다.
          </li>
        </ol>

        <h2>제3조 (약관의 효력 및 변경)</h2>
        <ol>
          <li>본 약관은 사이트에 게시함으로써 효력이 발생합니다.</li>
          <li>
            운영자는 필요한 경우 관련 법령을 위배하지 않는 범위에서 본 약관을 변경할 수 있으며, 변경
            시 사이트를 통해 공지합니다.
          </li>
          <li>이용자가 변경된 약관에 동의하지 않는 경우, 서비스 이용을 중단할 수 있습니다.</li>
        </ol>

        <h2>제4조 (서비스의 제공)</h2>
        <ol>
          <li>
            본 사이트는 다음과 같은 서비스를 제공합니다:
            <ul>
              <li>투자, 경제 관련 정보성 콘텐츠</li>
              <li>투자 관련 도서 리뷰</li>
              <li>금융 관련 유용한 도구(Tools) 제공</li>
            </ul>
          </li>
          <li>
            서비스는 연중무휴, 1일 24시간 제공을 원칙으로 하나, 시스템 점검 등의 사유로 일시 중단될
            수 있습니다.
          </li>
        </ol>

        <h2>제5조 (이용자의 의무)</h2>
        <p>이용자는 다음 행위를 하여서는 안 됩니다:</p>
        <ol>
          <li>타인의 정보를 도용하는 행위</li>
          <li>본 사이트의 콘텐츠를 무단으로 복제, 배포, 수정하는 행위</li>
          <li>본 사이트의 운영을 방해하는 행위</li>
          <li>기타 법령에 위반되는 행위</li>
        </ol>

        <h2>제6조 (지적재산권)</h2>
        <ol>
          <li>본 사이트에 게시된 모든 콘텐츠의 저작권은 운영자 또는 원저작자에게 있습니다.</li>
          <li>
            이용자는 본 사이트의 콘텐츠를 개인적인 용도로만 사용할 수 있으며, 상업적 용도로
            사용하거나 무단 복제, 배포할 수 없습니다.
          </li>
          <li>출처를 명시하고 원문 링크를 포함하는 경우, 일부 내용을 인용할 수 있습니다.</li>
        </ol>

        <h2>제7조 (면책조항)</h2>
        <ol>
          <li>
            <strong>투자 관련 면책:</strong> 본 사이트에 게시된 투자 관련 정보는 정보 제공
            목적으로만 작성되었으며, 특정 금융 상품에 대한 매수/매도 권유나 투자 조언이 아닙니다.
            모든 투자에는 원금 손실 위험이 있으며, 투자 결정은 본인의 판단과 책임 하에 이루어져야
            합니다.
          </li>
          <li>
            <strong>정보의 정확성:</strong> 본 사이트는 제공하는 정보의 정확성, 완전성, 적시성을
            보장하지 않습니다. 콘텐츠에 포함된 정보로 인해 발생하는 손해에 대해 책임지지 않습니다.
          </li>
          <li>
            <strong>외부 링크:</strong> 본 사이트에 포함된 외부 링크는 이용자 편의를 위해 제공되며,
            외부 사이트의 내용이나 정책에 대해 책임지지 않습니다.
          </li>
          <li>
            <strong>서비스 중단:</strong> 천재지변, 시스템 장애 등 불가항력적 사유로 인한 서비스
            중단에 대해 책임지지 않습니다.
          </li>
        </ol>

        <h2>제8조 (면책)</h2>
        <p>
          본 사이트는 개인이 운영하는 무료 블로그입니다. 본 사이트의 콘텐츠 이용으로 인해 발생할 수
          있는 손해에 대해 운영자는 법적 책임을 지지 않습니다.
        </p>

        <h2>제9조 (분쟁 해결)</h2>
        <ol>
          <li>
            본 약관과 관련하여 분쟁이 발생한 경우, 운영자와 이용자는 원만한 해결을 위해 성실히
            협의합니다.
          </li>
          <li>협의가 이루어지지 않는 경우, 대한민국 법률에 따라 해결합니다.</li>
        </ol>

        <h2>제10조 (연락처)</h2>
        <p>본 약관에 대한 문의사항은 아래 연락처로 연락해 주시기 바랍니다:</p>
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
          본 이용약관은 2026년 1월 3일부터 적용됩니다.
        </p>
      </div>
    </div>
  )

  const englishContent = (
    <div className="divide-y divide-gray-200 dark:divide-gray-700">
      <div className="space-y-2 pt-6 pb-8 md:space-y-5">
        <h1 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14 dark:text-gray-100">
          Terms of Service
        </h1>
        <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
          Last Updated: January 3, 2026
        </p>
      </div>
      <div className="prose dark:prose-invert max-w-none pt-8 pb-8">
        <h2>Article 1 (Purpose)</h2>
        <p>
          These Terms of Service (hereinafter referred to as &quot;Terms&quot;) aim to regulate the
          rights, obligations, and responsibilities of the operator and users regarding the use of
          the website services provided by Yaffleria&apos;s Blog (hereinafter referred to as
          &quot;this site&quot;).
        </p>

        <h2>Article 2 (Definitions)</h2>
        <ol>
          <li>
            <strong>&quot;Service&quot;</strong> refers to all content and functions provided by
            this site.
          </li>
          <li>
            <strong>&quot;User&quot;</strong> refers to any visitor who accesses this site and uses
            the services.
          </li>
          <li>
            <strong>&quot;Content&quot;</strong> refers to all forms of information such as texts,
            images, and videos posted on this site.
          </li>
        </ol>

        <h2>Article 3 (Effect and Change of Terms)</h2>
        <ol>
          <li>These Terms become effective upon posting on the site.</li>
          <li>
            The operator may change these Terms if necessary, within the scope not violating
            relevant laws, and will announce changes through the site.
          </li>
          <li>If a user does not agree to the changed terms, they may stop using the service.</li>
        </ol>

        <h2>Article 4 (Provision of Service)</h2>
        <ol>
          <li>
            This site provides the following services:
            <ul>
              <li>Informational content related to investment and economy</li>
              <li>Reviews of investment-related books</li>
              <li>Provision of useful financial tools</li>
            </ul>
          </li>
          <li>
            Service is provided 24 hours a day, 7 days a week in principle, but may be temporarily
            suspended due to system maintenance or other reasons.
          </li>
        </ol>

        <h2>Article 5 (User Obligations)</h2>
        <p>Users must not engage in the following acts:</p>
        <ol>
          <li>Stealing other people&apos;s information</li>
          <li>
            Unauthorized reproduction, distribution, or modification of this site&apos;s content
          </li>
          <li>Interfering with the operation of this site</li>
          <li>Other acts that violate laws</li>
        </ol>

        <h2>Article 6 (Intellectual Property Rights)</h2>
        <ol>
          <li>
            The copyright of all content posted on this site belongs to the operator or the original
            author.
          </li>
          <li>
            Users may use the content of this site only for personal purposes and cannot use it for
            commercial purposes or reproduce/distribute it without permission.
          </li>
          <li>
            Partial content may be quoted if the source is specified and a link to the original
            article is included.
          </li>
        </ol>

        <h2>Article 7 (Disclaimer)</h2>
        <ol>
          <li>
            <strong>Investment Disclaimer:</strong> Investment-related information posted on this
            site is for informational purposes only and is not a recommendation or investment advice
            for buying/selling specific financial products. All investments involve the risk of
            principal loss, and investment decisions must be made under the user&apos;s own judgment
            and responsibility.
          </li>
          <li>
            <strong>Accuracy of Information:</strong> This site does not guarantee the accuracy,
            completeness, or timeliness of the provided information. We are not responsible for any
            damages caused by the information contained in the content.
          </li>
          <li>
            <strong>External Links:</strong> External links included in this site are provided for
            user convenience, and we are not responsible for the content or policies of external
            sites.
          </li>
          <li>
            <strong>Service Interruption:</strong> We are not responsible for service interruptions
            due to force majeure events such as natural disasters or system failures.
          </li>
        </ol>

        <h2>Article 8 (Indemnification)</h2>
        <p>
          This site is a free blog operated by an individual. The operator bears no legal
          responsibility for any damages that may occur from the use of this site&apos;s content.
        </p>

        <h2>Article 9 (Dispute Resolution)</h2>
        <ol>
          <li>
            In case of a dispute related to these Terms, the operator and the user shall consult in
            good faith for an amicable resolution.
          </li>
          <li>
            If no agreement is reached, it shall be resolved in accordance with the laws of the
            Republic of Korea.
          </li>
        </ol>

        <h2>Article 10 (Contact)</h2>
        <p>If you have any questions regarding these Terms, please contact us at:</p>
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
          These Terms of Service are effective from January 3, 2026.
        </p>
      </div>
    </div>
  )

  return <ContentLanguageSwitcher korean={koreanContent} english={englishContent} />
}
