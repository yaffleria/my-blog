import { genPageMetadata } from 'app/seo'
import SocialIcon from '@/components/ui/social-icons'

export const metadata = genPageMetadata({ title: 'Contact' })

export default function ContactPage() {
  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700">
      <div className="space-y-2 pt-6 pb-8 md:space-y-5">
        <h1 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14 dark:text-gray-100">
          Contact
        </h1>
        <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
          Questions or feedback are always welcome!
        </p>
      </div>
      <div className="pt-8 pb-8">
        <div className="prose dark:prose-invert max-w-none">
          <h2>📬 How to Reach Me</h2>
          <p>
            Please contact me via the methods below, and I will get back to you as soon as possible:
          </p>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {/* Email Card */}
          <div className="rounded-lg border border-gray-200 p-6 dark:border-gray-700">
            <div className="mb-4 flex items-center">
              <SocialIcon kind="mail" href="mailto:yaffleria@gmail.com" size={8} />
              <h3 className="ml-3 text-xl font-bold text-gray-900 dark:text-gray-100">Email</h3>
            </div>
            <p className="mb-4 text-gray-600 dark:text-gray-400">
              General inquiries, collaboration proposals, error reports, etc. are all welcome.
            </p>
            <a
              href="mailto:yaffleria@gmail.com"
              className="bg-primary-500 hover:bg-primary-600 inline-block rounded-lg px-4 py-2 text-white transition-colors"
            >
              yaffleria@gmail.com
            </a>
          </div>

          {/* X(Twitter) Card */}
          <div className="rounded-lg border border-gray-200 p-6 dark:border-gray-700">
            <div className="mb-4 flex items-center">
              <SocialIcon kind="x" href="https://x.com/nenyacat" size={8} />
              <h3 className="ml-3 text-xl font-bold text-gray-900 dark:text-gray-100">
                X (Twitter)
              </h3>
            </div>
            <p className="mb-4 text-gray-600 dark:text-gray-400">
              For quick communication or simple questions, please contact me on X.
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
          <h2>💬 Inquiry Types</h2>
          <p>I accept the following types of inquiries:</p>
          <ul>
            <li>
              <strong>Content Related</strong>: Error corrections, additional info requests, topic
              suggestions
            </li>
            <li>
              <strong>Collaboration</strong>: Contributions, interviews, content partnerships
            </li>
            <li>
              <strong>Technical</strong>: Bug reports, accessibility issues
            </li>
            <li>
              <strong>Privacy</strong>: Personal information requests (access, deletion, etc.)
            </li>
            <li>
              <strong>Other</strong>: Any other inquiries
            </li>
          </ul>

          <h2>⏰ Response Time</h2>
          <p>
            Generally, I respond within <strong>1-3 days</strong>. Responses may be delayed on
            weekends or holidays.
          </p>

          <h2>📌 Notes</h2>
          <ul>
            <li>
              I do not provide individual investment consultations. Please consult a professional
              for investment decisions.
            </li>
            <li>Ads and spam emails will not be answered.</li>
            <li>
              Content quotation/sharing is free if the source is specified; no separate contact is
              needed.
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
