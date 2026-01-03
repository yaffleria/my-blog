import Image from './Image'
import Link from './Link'

interface KakaoMapLinkCardProps {
  placeName: string
  address: string
  roadAddress?: string
  id: string
  imgSrc?: string
}

const KakaoMapLinkCard = ({
  placeName,
  address,
  roadAddress,
  id,
  imgSrc,
}: KakaoMapLinkCardProps) => {
  const href = `https://place.map.kakao.com/${id}`
  const defaultImg = 'https://t1.daumcdn.net/localimg/localimages/07/common/kakaomap_logo.png'

  return (
    <div className="not-prose my-6 w-full">
      <Link
        href={href}
        target="_blank"
        className="group block overflow-hidden rounded-lg border border-gray-200 no-underline shadow-sm transition-all hover:shadow-md dark:border-gray-700 dark:bg-gray-800"
      >
        <div className="flex h-32 flex-row">
          {/* Map Image Side - Fixed width */}
          <div className="relative w-40 max-w-[160px] min-w-[160px] overflow-hidden bg-gray-100 dark:bg-gray-900">
            <Image
              src={imgSrc || defaultImg}
              alt={`${placeName} Preview`}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              sizes="160px"
              unoptimized
            />
          </div>

          {/* Content Side */}
          <div className="flex min-w-0 flex-1 flex-col justify-center px-4 py-3">
            <div className="mb-1 truncate text-lg font-bold text-gray-900 dark:text-gray-100">
              {placeName}
            </div>
            <div className="mb-1 truncate text-sm text-gray-600 dark:text-gray-400">
              {roadAddress || address}
            </div>
            {roadAddress && address && (
              <div className="mb-2 truncate text-xs text-gray-500 dark:text-gray-500">
                (지번) {address}
              </div>
            )}
            <div className="mt-auto text-xs font-medium text-gray-400">place.map.kakao.com</div>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default KakaoMapLinkCard
