'use client'

import { useState } from 'react'

interface Props {
  korean: React.ReactNode
  english: React.ReactNode
}

export default function ContentLanguageSwitcher({ korean, english }: Props) {
  const [isEnglish, setIsEnglish] = useState(false)

  return (
    <div className="relative">
      <div className="absolute top-0 right-0 mb-4 flex justify-end">
        <button
          onClick={() => setIsEnglish(!isEnglish)}
          className="rounded-md border border-gray-300 bg-white px-3 py-1 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700"
        >
          {isEnglish ? '한국어 보기' : 'View in English'}
        </button>
      </div>
      <div className="mt-12">{isEnglish ? english : korean}</div>
    </div>
  )
}
