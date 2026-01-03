import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: '개인정보 처리방침' })

export default function PrivacyPage() {
  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700">
      <div className="space-y-2 pt-6 pb-8 md:space-y-5">
        <h1 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14 dark:text-gray-100">
          개인정보 처리방침
        </h1>
        <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
          최종 수정일: 2026년 1월 3일
        </p>
      </div>
      <div className="prose dark:prose-invert max-w-none pt-8 pb-8">
        <h2>1. 개인정보 수집 항목</h2>
        <p>
          NenyaCastle(이하 &quot;본 사이트&quot;)은 서비스 제공을 위해 다음과 같은 정보를 자동으로
          수집할 수 있습니다:
        </p>
        <ul>
          <li>
            <strong>방문 정보</strong>: IP 주소, 브라우저 종류, 운영체제, 방문 일시, 방문 페이지
          </li>
          <li>
            <strong>기기 정보</strong>: 기기 유형, 화면 해상도, 언어 설정
          </li>
          <li>
            <strong>사용 정보</strong>: 페이지 체류 시간, 클릭 패턴, 유입 경로
          </li>
        </ul>

        <h2>2. 개인정보 수집 방법</h2>
        <p>본 사이트는 다음과 같은 방법으로 정보를 수집합니다:</p>
        <ul>
          <li>
            <strong>Google Analytics</strong>: 웹사이트 트래픽 분석을 위해 Google Analytics를
            사용합니다. Google Analytics는 쿠키를 통해 익명화된 방문 데이터를 수집합니다.
          </li>
          <li>
            <strong>Vercel Analytics</strong>: 웹사이트 성능 모니터링을 위해 Vercel Analytics를
            사용합니다.
          </li>
          <li>
            <strong>쿠키(Cookies)</strong>: 사용자 경험 향상을 위해 쿠키를 사용할 수 있습니다.
          </li>
        </ul>

        <h2>3. 개인정보 이용 목적</h2>
        <p>수집된 정보는 다음 목적으로만 사용됩니다:</p>
        <ul>
          <li>웹사이트 이용 현황 분석 및 서비스 개선</li>
          <li>콘텐츠 품질 향상을 위한 통계 분석</li>
          <li>웹사이트 성능 최적화</li>
        </ul>

        <h2>4. 개인정보 제3자 제공</h2>
        <p>
          본 사이트는 원칙적으로 이용자의 개인정보를 제3자에게 제공하지 않습니다. 다만, 다음의
          경우에는 예외로 합니다:
        </p>
        <ul>
          <li>이용자가 사전에 동의한 경우</li>
          <li>
            법령의 규정에 의거하거나, 수사 목적으로 법령에 정해진 절차와 방법에 따라 요청이 있는
            경우
          </li>
        </ul>

        <h2>5. 분석 서비스 및 광고</h2>
        <h3>5.1 Google Analytics</h3>
        <p>
          본 사이트는 Google Analytics를 사용하여 웹사이트 트래픽을 분석합니다. Google Analytics의
          개인정보 처리에 대한 자세한 내용은{' '}
          <a
            href="https://policies.google.com/privacy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
          >
            Google 개인정보 처리방침
          </a>
          을 참조하시기 바랍니다.
        </p>
        <h3>5.2 향후 광고 서비스</h3>
        <p>
          본 사이트는 향후 Google AdSense 등의 광고 서비스를 도입할 수 있습니다. 광고 서비스 도입
          시, 해당 서비스 제공업체가 쿠키를 사용하여 맞춤 광고를 제공할 수 있으며, 이에 대한 상세
          내용은 본 방침에 업데이트됩니다.
        </p>

        <h2>6. 쿠키 관리</h2>
        <p>
          이용자는 브라우저 설정을 통해 쿠키 저장을 거부하거나 삭제할 수 있습니다. 다만, 쿠키 저장을
          거부할 경우 일부 서비스 이용에 제한이 있을 수 있습니다.
        </p>
        <ul>
          <li>
            <strong>Chrome</strong>: 설정 → 개인정보 및 보안 → 쿠키 및 기타 사이트 데이터
          </li>
          <li>
            <strong>Firefox</strong>: 설정 → 개인정보 및 보안 → 쿠키 및 사이트 데이터
          </li>
          <li>
            <strong>Safari</strong>: 환경설정 → 개인정보 보호 → 쿠키 및 웹사이트 데이터 관리
          </li>
        </ul>

        <h2>7. 이용자의 권리</h2>
        <p>
          본 사이트는 회원가입, 뉴스레터 구독 등을 통해 이용자의 개인정보를 직접 수집하지 않습니다.
          수집되는 정보는 Google Analytics, Vercel Analytics 등 제3자 서비스를 통해 자동으로
          수집되는 익명화된 통계 데이터입니다.
        </p>
        <p>이용자는 다음과 같은 방법으로 데이터 수집을 제한할 수 있습니다:</p>
        <ul>
          <li>
            <strong>쿠키 거부</strong>: 브라우저 설정에서 쿠키를 거부하거나 삭제할 수 있습니다 (위
            &quot;6. 쿠키 관리&quot; 참조).
          </li>
          <li>
            <strong>Google Analytics 옵트아웃</strong>:{' '}
            <a
              href="https://tools.google.com/dlpage/gaoptout"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            >
              Google Analytics 옵트아웃 브라우저 부가기능
            </a>
            을 설치하여 Google Analytics 데이터 수집을 차단할 수 있습니다.
          </li>
          <li>
            <strong>Do Not Track</strong>: 브라우저의 &quot;Do Not Track&quot; 기능을 활성화할 수
            있습니다.
          </li>
        </ul>
        <p>
          기타 개인정보 관련 문의사항이 있으시면{' '}
          <a
            href="mailto:yaffleria@gmail.com"
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
          >
            yaffleria@gmail.com
          </a>
          으로 연락해 주시기 바랍니다.
        </p>

        <h2>8. 연락처</h2>
        <p>개인정보 관련 문의사항이 있으시면 아래로 연락해 주시기 바랍니다:</p>
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

        <h2>9. 개인정보 처리방침 변경</h2>
        <p>
          본 개인정보 처리방침은 법령, 정책 또는 서비스의 변경에 따라 수정될 수 있습니다. 변경
          사항은 웹사이트를 통해 공지됩니다.
        </p>

        <hr className="my-8" />

        <p className="text-sm text-gray-500 dark:text-gray-400">
          본 개인정보 처리방침은 2026년 1월 3일부터 적용됩니다.
        </p>
      </div>
    </div>
  )
}
