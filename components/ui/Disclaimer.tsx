import Link from 'next/link'

interface DisclaimerProps {
  isEnglish?: boolean
}

export default function Disclaimer({ isEnglish = false }: DisclaimerProps) {
  return (
    <aside className="my-8 rounded-lg bg-gray-50 p-4 text-sm text-gray-600 dark:bg-gray-900/50 dark:text-gray-400">
      <div className="flex items-start gap-3">
        <div className="space-y-1">
          <p className="font-semibold text-gray-800 dark:text-gray-200">
            {isEnglish ? 'Disclaimer' : '면책 조항 (Disclaimer)'}
          </p>
          {isEnglish ? (
            <div className="space-y-2">
              <p className="leading-relaxed">
                All content on this blog is for informational purposes only and represents personal
                investment records. It does not constitute a recommendation to buy or sell. All
                investment responsibilities lie with the investor, and there is no guarantee that
                the provided data or information is always accurate or up-to-date.
              </p>
            </div>
          ) : (
            <div className="space-y-1">
              <p className="leading-relaxed">
                본 블로그의 모든 콘텐츠는 정보 제공을 목적으로 하는 개인적인 투자 기록이며,
                매수/매도 추천이 아닙니다. 투자에 대한 모든 책임은 투자자 본인에게 있으며, 제공된
                데이터나 정보가 항상 정확하거나 최신임을 보장하지 않습니다.
              </p>
              <p className="pt-2 text-xs text-gray-500">
                * This content is for informational purposes only and does not constitute financial
                advice.
              </p>
            </div>
          )}
        </div>
      </div>
    </aside>
  )
}
