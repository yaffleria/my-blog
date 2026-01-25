import Link from 'next/link'

export default function Disclaimer() {
  return (
    <aside className="my-8 border-l-2 border-gray-300 pl-4 text-xs text-gray-500 dark:border-gray-700 dark:text-gray-400">
      <p className="mb-1 font-semibold text-gray-900 dark:text-gray-100">Disclaimer</p>
      <div className="space-y-1 leading-normal">
        <p>
          This content is for <strong>informational purposes only</strong> and represents personal
          opinions. It is not financial advice or a recommendation to buy/sell any security.
        </p>
        <p>
          Investing involves risk, including the potential loss of principal. Accuracy of
          information is not guaranteed. Consult a qualified professional before making any
          investment decisions.
        </p>
      </div>
    </aside>
  )
}
