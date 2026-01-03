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

export const useKakaoShare = () => {
  const shareToKakao = async ({
    url,
    title,
    description,
    image,
  }: {
    url: string
    title: string
    description: string
    image: string
  }) => {
    const KAKAO_JS_KEY = process.env.NEXT_PUBLIC_KAKAO_JAVASCRIPT_KEY

    if (!KAKAO_JS_KEY) {
      console.error('Kakao JavaScript key is not configured')
      return
    }

    // Kakao SDK 동적 로드 (SEO에 영향 없음)
    if (typeof window !== 'undefined' && !window.Kakao) {
      try {
        await new Promise<void>((resolve, reject) => {
          const script = document.createElement('script')
          script.src = 'https://t1.kakaocdn.net/kakao_js_sdk/2.7.7/kakao.min.js'
          script.crossOrigin = 'anonymous'
          script.onload = () => resolve()
          script.onerror = () => reject(new Error('Failed to load Kakao SDK'))
          document.head.appendChild(script)
        })
      } catch (error) {
        console.error('Failed to load Kakao SDK:', error)
        return
      }
    }

    const Kakao = window.Kakao!

    // SDK 초기화 (한 번만)
    if (!Kakao.isInitialized()) {
      Kakao.init(KAKAO_JS_KEY)
    }

    // 공유할 URL이 공백이 없는지 확인
    const shareUrl = url.trim()
    console.log('Kakao Share Target URL:', shareUrl)

    // 카카오톡 공유
    Kakao.Share.sendDefault({
      objectType: 'feed',
      content: {
        title: title,
        description: description,
        imageUrl: image,
        link: {
          mobileWebUrl: shareUrl,
          webUrl: shareUrl,
        },
      },
      buttons: [
        {
          title: '자세히 보기',
          link: {
            mobileWebUrl: shareUrl,
            webUrl: shareUrl,
          },
        },
      ],
    })
  }

  return { shareToKakao }
}
