import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: 'Privacy Policy' })

export default function PrivacyPage() {
  return (
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
          Charlotte&apos;s Blog (hereinafter referred to as &quot;this site&quot;) may automatically
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

        <h2>5. Cookie Management</h2>
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

        <h2>6. User Rights</h2>
        <p>
          This site does not directly collect personal information through membership registration
          or newsletters. The information collected is anonymized statistical data automatically
          collected through third-party services like Vercel Analytics.
        </p>
        <p>Users can limit data collection in the following ways:</p>
        <ul>
          <li>
            <strong>Refuse Cookies</strong>: You can refuse or delete cookies in your browser
            settings (see &quot;5. Cookie Management&quot; above).
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

        <h2>7. Contact</h2>
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

        <h2>8. Changes to Privacy Policy</h2>
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
}
