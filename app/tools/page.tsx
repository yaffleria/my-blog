import { genPageMetadata } from 'app/seo'
import Link from 'next/link'
import { Stone } from 'lucide-react'

export const metadata = genPageMetadata({ title: 'Tools' })

const tools = [
  {
    title: 'KRX 금 시세 프리미엄 계산기',
    description: 'KRX 금 시세와 국제 금 시세를 비교하여 프리미엄을 확인합니다',
    href: '/tools/krx-gold-premium',
    icon: Stone,
    color: 'text-yellow-500 dark:text-yellow-400',
  },
]

export default function ToolsPage() {
  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700">
      <div className="space-y-2 pt-6 pb-8 md:space-y-5">
        <h1 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 dark:text-gray-100">
          도구 모음
        </h1>
        <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
          다양한 금융 및 투자 도구를 제공합니다
        </p>
      </div>
      <div className="container py-12">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {tools.map((tool) => (
            <Link
              key={tool.href}
              href={tool.href}
              className="group hover:border-primary-500 dark:hover:border-primary-500 rounded-lg border border-gray-200 p-6 transition-all hover:shadow-lg dark:border-gray-700"
            >
              <div className="mb-4 flex items-center justify-between">
                <h2 className="group-hover:text-primary-500 dark:group-hover:text-primary-400 text-xl font-bold text-gray-900 dark:text-gray-100">
                  {tool.title}
                </h2>
                <tool.icon
                  className={`h-8 w-8 transition-colors ${
                    tool.color
                      ? tool.color
                      : 'group-hover:text-primary-500 dark:group-hover:text-primary-400 text-gray-500 dark:text-gray-400'
                  }`}
                />
              </div>
              <p className="text-gray-600 dark:text-gray-400">{tool.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
