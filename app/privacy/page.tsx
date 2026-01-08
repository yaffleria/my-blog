import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: '개인정보 처리방침' })

import ContentLanguageSwitcher from '@/components/ui/ContentLanguageSwitcher'

export default function PrivacyPage() {
  const koreanContent = (
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
          Yaffleria&apos;s Blog(이하 &quot;본 사이트&quot;)은 서비스 제공을 위해 다음과 같은 정보를
          자동으로 수집할 수 있습니다:
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

  const englishContent = (
    <div className="divide-y divide-gray-200 dark:divide-gray-700">
      <div className="space-y-2 pt-6 pb-8 md:space-y-5">
        <h1 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14 dark:text-gray-100">
          Privacy Policy
        </h1>
        <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
          Last Updated: January 3, 2026
        </p>
      </div>
      <div className="prose dark:prose-invert max-w-none pt-8 pb-8">
        <h2>1. Information We Collect</h2>
        <p>
          Yaffleria&apos;s Blog (hereinafter referred to as &quot;this site&quot;) may automatically
          collect the following information to provide services:
        </p>
        <ul>
          <li>
            <strong>Visit Information</strong>: IP address, browser type, operating system, visit
            time, pages visited.
          </li>
          <li>
            <strong>Device Information</strong>: Device type, screen resolution, language settings.
          </li>
          <li>
            <strong>Usage Information</strong>: Time spent on page, click patterns, referral
            sources.
          </li>
        </ul>

        <h2>2. How We Collect Information</h2>
        <p>This site collects information through the following methods:</p>
        <ul>
          <li>
            <strong>Google Analytics</strong>: We use Google Analytics to analyze website traffic.
            Google Analytics collects anonymized visit data via cookies.
          </li>
          <li>
            <strong>Vercel Analytics</strong>: We use Vercel Analytics for website performance
            monitoring.
          </li>
          <li>
            <strong>Cookies</strong>: We may use cookies to improve user experience.
          </li>
        </ul>

        <h2>3. Purpose of Information Use</h2>
        <p>Collected information is used solely for the following purposes:</p>
        <ul>
          <li>Analyzing website usage and improving services</li>
          <li>Statistical analysis to improve content quality</li>
          <li>Optimizing website performance</li>
        </ul>

        <h2>4. Disclosure to Third Parties</h2>
        <p>
          This site does not provide user&apos;s personal information to third parties in principle.
          However, exceptions are made in the following cases:
        </p>
        <ul>
          <li>When the user has agreed in advance</li>
          <li>
            When required by law or requested by investigative agencies according to procedures and
            methods prescribed by law
          </li>
        </ul>

        <h2>5. Analytics Services and Ads</h2>
        <h3>5.1 Google Analytics</h3>
        <p>
          This site uses Google Analytics to analyze website traffic. For details on how Google
          Analytics handles personal information, please refer to the{' '}
          <a
            href="https://policies.google.com/privacy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
          >
            Google Privacy Policy
          </a>
          .
        </p>
        <h3>5.2 Future Advertising Services</h3>
        <p>
          This site may introduce advertising services such as Google AdSense in the future. Upon
          introduction, the service provider may use cookies to provide personalized ads, and
          details will be updated in this policy.
        </p>

        <h2>6. Cookie Management</h2>
        <p>
          Users can refuse or delete cookies through browser settings. However, refusing cookies may
          limit the use of some services.
        </p>
        <ul>
          <li>
            <strong>Chrome</strong>: Settings → Privacy and security → Cookies and other site data
          </li>
          <li>
            <strong>Firefox</strong>: Settings → Privacy & Security → Cookies and Site Data
          </li>
          <li>
            <strong>Safari</strong>: Preferences → Privacy → Manage Website Data
          </li>
        </ul>

        <h2>7. User Rights</h2>
        <p>
          This site does not directly collect personal information through membership registration
          or newsletters. The information collected is anonymized statistical data automatically
          collected through third-party services like Google Analytics and Vercel Analytics.
        </p>
        <p>Users can limit data collection in the following ways:</p>
        <ul>
          <li>
            <strong>Refuse Cookies</strong>: You can refuse or delete cookies in your browser
            settings (see &quot;6. Cookie Management&quot; above).
          </li>
          <li>
            <strong>Google Analytics Opt-out</strong>: You can install the{' '}
            <a
              href="https://tools.google.com/dlpage/gaoptout"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            >
              Google Analytics Opt-out Browser Add-on
            </a>{' '}
            to block Google Analytics data collection.
          </li>
          <li>
            <strong>Do Not Track</strong>: You can enable the &quot;Do Not Track&quot; feature in
            your browser.
          </li>
        </ul>
        <p>
          If you have other inquiries regarding personal information, please contact{' '}
          <a
            href="mailto:yaffleria@gmail.com"
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
          >
            yaffleria@gmail.com
          </a>
          .
        </p>

        <h2>8. Contact</h2>
        <p>If you have any questions regarding this Privacy Policy, please contact us at:</p>
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

        <h2>9. Changes to Privacy Policy</h2>
        <p>
          This Privacy Policy may be amended due to changes in laws, policies, or services. Changes
          will be announced on the website.
        </p>

        <hr className="my-8" />

        <p className="text-sm text-gray-500 dark:text-gray-400">
          This Privacy Policy is effective from January 3, 2026.
        </p>
      </div>
    </div>
  )

  return <ContentLanguageSwitcher korean={koreanContent} english={englishContent} />
}
