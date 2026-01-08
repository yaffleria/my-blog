import Link from './Link'

interface BreadcrumbsProps {
  breadcrumbs: {
    label: string
    href?: string
  }[]
}

const Breadcrumbs = ({ breadcrumbs }: BreadcrumbsProps) => {
  return (
    <nav className="mb-4 flex text-sm text-gray-500 dark:text-gray-400">
      <ol className="flex items-center space-x-2">
        {breadcrumbs.map((breadcrumb, index) => (
          <li key={index} className="flex items-center">
            {index > 0 && <span className="mx-2 text-gray-400">/</span>}
            {breadcrumb.href ? (
              <Link
                href={breadcrumb.href}
                className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
              >
                {breadcrumb.label}
              </Link>
            ) : (
              <span className="font-medium text-gray-900 dark:text-gray-100">
                {breadcrumb.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}

export default Breadcrumbs
