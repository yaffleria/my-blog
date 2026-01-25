import Link from 'next/link'
import {
  Building2,
  BarChart2,
  TrendingUp,
  FileText,
  Newspaper,
  ArrowRight,
  BookOpen,
} from 'lucide-react'

type IconType = 'company' | 'earnings' | 'analysis' | 'news' | 'forecast'

interface RelatedArticle {
  title: string
  href: string
  icon?: IconType
}

interface RelatedArticlesProps {
  articles: RelatedArticle[]
  title?: string
}

const iconMap = {
  company: Building2,
  earnings: BarChart2,
  analysis: FileText,
  news: Newspaper,
  forecast: TrendingUp,
}

export default function RelatedArticles({ articles, title = 'Read More' }: RelatedArticlesProps) {
  return (
    <div className="not-prose my-6 rounded-lg border border-gray-200 bg-gray-50 p-4 dark:border-gray-700 dark:bg-gray-800/50">
      <div className="mb-2 flex items-center gap-1.5 text-sm font-semibold text-gray-700 dark:text-gray-300">
        <BookOpen className="h-4 w-4" />
        <span>{title}</span>
      </div>
      <ul className="space-y-2">
        {articles.map((article, index) => {
          const Icon = article.icon ? iconMap[article.icon] : FileText
          return (
            <li key={index}>
              <Link
                href={article.href}
                className="group hover:text-primary-600 dark:hover:text-primary-400 flex items-center text-sm text-gray-900 dark:text-gray-100"
              >
                <Icon className="mr-2 h-4 w-4 shrink-0 text-gray-500 dark:text-gray-400" />
                <span className="flex-1">{article.title}</span>
                <ArrowRight className="group-hover:text-primary-600 dark:group-hover:text-primary-400 ml-2 h-4 w-4 shrink-0 text-gray-400 transition-transform group-hover:translate-x-1" />
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
