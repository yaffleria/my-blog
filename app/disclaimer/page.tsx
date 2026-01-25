import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: 'Disclaimer' })

export default function DisclaimerPage() {
  return (
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

        <h2>5. Affiliates</h2>
        <ul>
          <li>
            This site may include affiliate links in some content. We may receive a small commission
            for purchases made through these links.
          </li>
          <li>Affiliate relationships do not affect the objectivity or accuracy of the content.</li>
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
}
