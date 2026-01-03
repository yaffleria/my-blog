/**
 * Decode HTML entities to their corresponding characters
 * Used for social sharing and OG meta tags where raw text is needed
 */
export function decodeHtmlEntities(text: string): string {
  if (!text) return ''

  const entities: Record<string, string> = {
    '&amp;': '&',
    '&lt;': '<',
    '&gt;': '>',
    '&quot;': '"',
    '&#39;': "'",
    '&apos;': "'",
    '&#40;': '(',
    '&#41;': ')',
    '&#37;': '%',
    '&#43;': '+',
    '&#36;': '$',
    '&#126;': '~',
    '&nbsp;': ' ',
    '&dollar;': '$',
  }

  let decoded = text

  // Replace named and numeric entities
  for (const [entity, char] of Object.entries(entities)) {
    decoded = decoded.split(entity).join(char)
  }

  // Handle remaining numeric entities (&#XXX;)
  decoded = decoded.replace(/&#(\d+);/g, (_, code) => String.fromCharCode(parseInt(code, 10)))

  // Handle hex entities (&#xXXX;)
  decoded = decoded.replace(/&#x([0-9a-fA-F]+);/g, (_, code) =>
    String.fromCharCode(parseInt(code, 16))
  )

  return decoded
}

import siteMetadata from '@/data/siteMetadata'

/**
 * Get the complete absolute URL for an image
 * Handles arrays, relative paths, and fallbacks
 */
export function getCompleteImageUrl(image: string | string[] | undefined | null): string {
  const imageUrl = Array.isArray(image) ? image[0] : image
  const defaultImage = siteMetadata.socialBanner

  const targetImage = imageUrl || defaultImage

  if (targetImage.startsWith('http')) {
    return targetImage
  }

  return `${siteMetadata.siteUrl}${targetImage}`
}
