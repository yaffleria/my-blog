import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const DISCORD_ROUTES: Record<string, string> = {
  '/tools/krx-gold-premium': '/api/gold-premium',
}

export function middleware(request: NextRequest) {
  const userAgent = request.headers.get('user-agent') || ''
  const pathname = request.nextUrl.pathname

  if (userAgent.includes('DiscordBrid') && DISCORD_ROUTES[pathname]) {
    return NextResponse.rewrite(new URL(DISCORD_ROUTES[pathname], request.url))
  }
}

export const config = {
  matcher: '/tools/:path*',
}
