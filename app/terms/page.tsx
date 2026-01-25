import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: 'Terms of Service' })

export default function TermsPage() {
  return (
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
          the website services provided by Charlotte&apos;s Blog (hereinafter referred to as
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
}
