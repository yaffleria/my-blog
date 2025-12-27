const isDev = process.env.NODE_ENV === 'development'

export async function getExchangeRate(): Promise<number | null> {
  try {
    // Frankfurter API (Free, Open)
    const url = 'https://api.frankfurter.app/latest?from=USD&to=KRW'

    if (isDev) {
      console.log('🔹 [FX] Request URL:', url)
    }

    const response = await fetch(url, { next: { revalidate: 300 } }) // 5 min cache

    if (!response.ok) {
      console.error('❌ [FX] HTTP Error:', response.status)
      return null
    }

    const data = await response.json()
    if (data && data.rates && data.rates.KRW) {
      const rate = data.rates.KRW
      if (isDev) {
        console.log('✅ [FX] Rate:', rate)
      }
      return rate
    }

    return null
  } catch (error) {
    console.error('❌ [FX] Exception:', error)
    return null
  }
}
