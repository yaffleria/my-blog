import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const userAgent = request.headers.get('user-agent') || ''

  // 'DiscordBrid' User-Agent가 감지되면 API로부터 JSON 응답을 반환하도록 Rewrite
  if (userAgent.includes('DiscordBrid')) {
    return NextResponse.rewrite(new URL('/api/gold-premium', request.url))
  }
}

export const config = {
  // 미들웨어를 적용할 경로 설정
  matcher: '/tools/krx-gold-premium',
}
