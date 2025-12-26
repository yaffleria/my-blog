'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function AutoRefresh({ intervalMs = 1800000 }: { intervalMs?: number }) {
  const router = useRouter()

  useEffect(() => {
    const interval = setInterval(() => {
      console.log('🔄 [AutoRefresh] Refreshing page data...')
      router.refresh()
    }, intervalMs)

    return () => clearInterval(interval)
  }, [router, intervalMs])

  return null
}
