import { genPageMetadata } from 'app/seo'
import SocialIcon from '@/components/ui/social-icons'

export const metadata = genPageMetadata({ title: '연락처' })

export default function ContactPage() {
  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700">
      <div className="space-y-2 pt-6 pb-8 md:space-y-5">
        <h1 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14 dark:text-gray-100">
          연락처
        </h1>
        <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
          문의사항이나 피드백은 언제든 환영합니다!
        </p>
      </div>
      <div className="pt-8 pb-8">
        <div className="prose dark:prose-invert max-w-none">
          <h2>📬 연락 방법</h2>
          <p>아래 방법으로 연락해 주시면 빠른 시일 내에 답변드리겠습니다:</p>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {/* 이메일 카드 */}
          <div className="rounded-lg border border-gray-200 p-6 dark:border-gray-700">
            <div className="mb-4 flex items-center">
              <SocialIcon kind="mail" href="mailto:yaffleria@gmail.com" size={8} />
              <h3 className="ml-3 text-xl font-bold text-gray-900 dark:text-gray-100">이메일</h3>
            </div>
            <p className="mb-4 text-gray-600 dark:text-gray-400">
              일반 문의, 협업 제안, 오류 신고 등 모든 문의를 환영합니다.
            </p>
            <a
              href="mailto:yaffleria@gmail.com"
              className="bg-primary-500 hover:bg-primary-600 inline-block rounded-lg px-4 py-2 text-white transition-colors"
            >
              yaffleria@gmail.com
            </a>
          </div>

          {/* X(트위터) 카드 */}
          <div className="rounded-lg border border-gray-200 p-6 dark:border-gray-700">
            <div className="mb-4 flex items-center">
              <SocialIcon kind="x" href="https://x.com/nenyacat" size={8} />
              <h3 className="ml-3 text-xl font-bold text-gray-900 dark:text-gray-100">
                X (Twitter)
              </h3>
            </div>
            <p className="mb-4 text-gray-600 dark:text-gray-400">
              빠른 소통이나 간단한 질문은 X로 연락주세요.
            </p>
            <a
              href="https://x.com/nenyacat"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-lg bg-gray-800 px-4 py-2 text-white transition-colors hover:bg-gray-700 dark:bg-gray-700 dark:hover:bg-gray-600"
            >
              @nenyacat
            </a>
          </div>
        </div>

        <div className="prose dark:prose-invert mt-12 max-w-none">
          <h2>💬 문의 유형</h2>
          <p>다음과 같은 문의를 받고 있습니다:</p>
          <ul>
            <li>
              <strong>콘텐츠 관련</strong>: 오류 정정, 추가 정보 요청, 주제 제안
            </li>
            <li>
              <strong>협업 제안</strong>: 기고, 인터뷰, 콘텐츠 제휴
            </li>
            <li>
              <strong>기술 문의</strong>: 사이트 버그 신고, 접근성 문제
            </li>
            <li>
              <strong>개인정보</strong>: 개인정보 관련 요청 (열람, 삭제 등)
            </li>
            <li>
              <strong>기타</strong>: 위에 해당하지 않는 기타 문의
            </li>
          </ul>

          <h2>⏰ 응답 시간</h2>
          <p>
            일반적으로 <strong>1~3일 이내</strong>에 답변드리고 있습니다. 주말이나 공휴일에는 응답이
            지연될 수 있습니다.
          </p>

          <h2>📌 참고사항</h2>
          <ul>
            <li>
              투자 관련 개별 상담은 제공하지 않습니다. 투자 결정은 전문가와 상담하시기 바랍니다.
            </li>
            <li>광고, 스팸성 메일은 응답하지 않습니다.</li>
            <li>
              콘텐츠 인용/공유는 출처 명시 시 자유롭게 가능하며, 별도 연락은 필요하지 않습니다.
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
