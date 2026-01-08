'use client'

import { useState, useEffect } from 'react'

interface TableOfContentsProps {
  toc: {
    value: string
    url: string
    depth: number
  }[]
}

const TableOfContents = ({ toc }: TableOfContentsProps) => {
  const [activeId, setActiveId] = useState<string>('')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      { rootMargin: '0% 0% -80% 0%' }
    )

    toc.forEach((item) => {
      const id = item.url.slice(1)
      const element = document.getElementById(id)
      if (element) {
        observer.observe(element)
      }
    })

    return () => {
      toc.forEach((item) => {
        const id = item.url.slice(1)
        const element = document.getElementById(id)
        if (element) {
          observer.unobserve(element)
        }
      })
    }
  }, [toc])

  if (!toc || toc.length === 0) return null

  return (
    <div className="hidden pb-8 xl:block">
      <h3 className="mb-4 text-xs font-bold tracking-wide text-gray-500 uppercase dark:text-gray-400">
        Table of Contents
      </h3>
      <ul className="text-sm">
        {toc.map((item) => (
          <li key={item.url} className={`mb-2 ${item.depth > 2 ? 'ml-4' : ''}`}>
            <a
              href={item.url}
              className={`hover:text-primary-500 block truncate transition-colors duration-200 ${
                activeId === item.url.slice(1)
                  ? 'text-primary-500 font-medium'
                  : 'text-gray-500 dark:text-gray-400'
              }`}
              title={item.value}
            >
              {item.value}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TableOfContents
