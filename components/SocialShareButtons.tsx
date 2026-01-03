'use client'

import { useState } from 'react'
import { decodeHtmlEntities } from '@/lib/utils'

// Kakao SDK 타입 선언
declare global {
  interface Window {
    Kakao?: {
      init: (key: string) => void
      isInitialized: () => boolean
      Share: {
        sendDefault: (settings: {
          objectType: string
          content: {
            title: string
            description: string
            imageUrl: string
            link: { mobileWebUrl: string; webUrl: string }
          }
          buttons: Array<{
            title: string
            link: { mobileWebUrl: string; webUrl: string }
          }>
        }) => void
      }
    }
  }
}

interface SocialShareButtonsProps {
  url: string
  title: string
  summary?: string
  image?: string
}

export default function SocialShareButtons({
  url,
  title,
  summary,
  image,
}: SocialShareButtonsProps) {
  const [copied, setCopied] = useState(false)

  // Decode HTML entities for clean display in social shares
  const decodedTitle = decodeHtmlEntities(title)
  const decodedSummary = summary ? decodeHtmlEntities(summary) : ''

  const encodedUrl = encodeURIComponent(url)
  const encodedTitle = encodeURIComponent(decodedTitle)
  const encodedText = encodeURIComponent(
    decodedSummary ? `${decodedTitle}\n${decodedSummary}` : decodedTitle
  )

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(url)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      // Fallback for older browsers
      const textArea = document.createElement('textarea')
      textArea.value = url
      document.body.appendChild(textArea)
      textArea.select()
      document.execCommand('copy')
      document.body.removeChild(textArea)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  // 카카오 SDK 동적 로드 및 공유
  const shareToKakao = async () => {
    const KAKAO_JS_KEY = process.env.NEXT_PUBLIC_KAKAO_JAVASCRIPT_KEY

    if (!KAKAO_JS_KEY) {
      console.error('Kakao JavaScript key is not configured')
      return
    }

    // Kakao SDK 동적 로드 (SEO에 영향 없음)
    if (typeof window !== 'undefined' && !window.Kakao) {
      await new Promise<void>((resolve, reject) => {
        const script = document.createElement('script')
        script.src = 'https://t1.kakaocdn.net/kakao_js_sdk/2.7.7/kakao.min.js'
        script.integrity = 'sha384-tJkjbtDbvoxO+diRuDtwRO9JXR7pjWnfjfRn5ePUpl7e7RJCxKCwwnfqUAdXh53p'
        script.crossOrigin = 'anonymous'
        script.onload = () => resolve()
        script.onerror = () => reject(new Error('Failed to load Kakao SDK'))
        document.head.appendChild(script)
      })
    }

    const Kakao = window.Kakao!

    // SDK 초기화 (한 번만)
    if (!Kakao.isInitialized()) {
      Kakao.init(KAKAO_JS_KEY)
    }

    // 카카오톡 공유
    Kakao.Share.sendDefault({
      objectType: 'feed',
      content: {
        title: decodedTitle,
        description: decodedSummary,
        imageUrl: image || '',
        link: {
          mobileWebUrl: url,
          webUrl: url,
        },
      },
      buttons: [
        {
          title: '자세히 보기',
          link: {
            mobileWebUrl: url,
            webUrl: url,
          },
        },
      ],
    })
  }

  const shareToX = () => {
    const xShareUrl = `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`
    window.open(xShareUrl, '_blank', 'width=600,height=400')
  }

  const shareToTelegram = () => {
    const telegramShareUrl = `https://t.me/share/url?url=${encodedUrl}&text=${encodedText}`
    window.open(telegramShareUrl, '_blank', 'width=600,height=400')
  }

  const buttonBaseClass = `
    flex items-center justify-center p-2.5 rounded-xl
    cursor-pointer transition-all duration-200
    border border-gray-200 dark:border-gray-700
    hover:scale-110 hover:shadow-lg
    focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500
  `

  return (
    <div className="my-8 border-t border-gray-200 py-6 dark:border-gray-700">
      <div className="flex flex-wrap justify-center gap-2">
        {/* 링크 복사 */}
        <button
          onClick={handleCopyLink}
          className={`${buttonBaseClass} bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700`}
          aria-label="링크 복사"
        >
          {copied ? (
            <svg
              className="h-5 w-5 text-green-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          ) : (
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
              />
            </svg>
          )}
        </button>

        {/* 카카오톡 */}
        <button
          onClick={shareToKakao}
          className={`${buttonBaseClass} bg-[#FEE500] text-[#191919] hover:bg-[#FDD835]`}
          aria-label="카카오톡으로 공유"
        >
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 3C6.477 3 2 6.463 2 10.691c0 2.643 1.733 4.974 4.348 6.321-.149.539-.544 1.957-.623 2.262-.098.378.138.373.291.271.12-.08 1.918-1.3 2.688-1.823.428.062.868.095 1.316.095 5.523 0 10-3.463 10-7.691C22 6.463 17.523 3 12 3z" />
          </svg>
        </button>

        {/* X (Twitter) */}
        <button
          onClick={shareToX}
          className={`${buttonBaseClass} bg-black text-white hover:bg-gray-900`}
          aria-label="X로 공유"
        >
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
        </button>

        {/* 텔레그램 */}
        <button
          onClick={shareToTelegram}
          className={`${buttonBaseClass} bg-[#0088cc] text-white hover:bg-[#0077b5]`}
          aria-label="텔레그램으로 공유"
        >
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
          </svg>
        </button>
      </div>
    </div>
  )
}
