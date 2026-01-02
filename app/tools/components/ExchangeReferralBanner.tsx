'use client'

import React, { useMemo } from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'

// Swiper 스타일
import 'swiper/css'

interface ReferralLink {
  name: string
  nameKo: string
  url: string
  logo: string
  description: string
}

const referralLinks: ReferralLink[] = [
  {
    name: 'Korbit',
    nameKo: '코빗',
    url: 'https://marketing.korbit.co.kr/upn81t',
    logo: '/static/images/referral/korbit-logo.png',
    description: '가입 시 5,000원 지급',
  },
  {
    name: 'Bithumb',
    nameKo: '빗썸',
    url: 'https://www.bithumb.com/react/referral/guide?referral=NF7GQC61GR',
    logo: '/static/images/referral/bithumb-logo.png',
    description: '국내 대표 거래소',
  },
  {
    name: 'Coinone',
    nameKo: '코인원',
    url: 'https://coinone.co.kr/user/signup?ref=LCWYL22W',
    logo: '/static/images/referral/coinone-logo.png',
    description: '쉽고 빠른 가상자산 거래',
  },
  {
    name: 'Binance',
    nameKo: '바이낸스',
    url: 'https://www.binance.com/activity/referral-entry/CPA?ref=CPA_00KY4K8LK4',
    logo: '/static/images/referral/binance-logo.png',
    description: '세계 최대 거래소',
  },
]

export default function ExchangeReferralSlider() {
  // 랜덤 초기 슬라이드 인덱스
  const initialSlide = useMemo(() => Math.floor(Math.random() * referralLinks.length), [])

  if (referralLinks.length === 0) return null

  return (
    <div className="mx-auto max-w-md">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={16}
        slidesPerView={1}
        initialSlide={initialSlide}
        autoplay={{
          delay: 3000,
          disableOnInteraction: true,
          pauseOnMouseEnter: true,
        }}
        loop={referralLinks.length > 1}
        className="referral-swiper"
      >
        {referralLinks.map((referral, index) => (
          <SwiperSlide key={index}>
            <a
              href={referral.url}
              target="_blank"
              rel="noopener noreferrer sponsored"
              onClick={(e) => e.stopPropagation()}
              className="group flex items-center gap-3 rounded-xl border border-gray-200 bg-gradient-to-r from-white to-gray-50 px-3 py-2 transition-all duration-200 hover:border-gray-300 hover:shadow-sm dark:border-gray-700 dark:from-gray-800 dark:to-gray-800/50"
            >
              {/* 로고 */}
              <div className="flex h-8 w-8 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-white p-0.5 shadow-sm dark:bg-gray-700">
                <Image
                  src={referral.logo}
                  alt={`${referral.name} 로고`}
                  width={28}
                  height={28}
                  className="object-contain"
                />
              </div>

              {/* 텍스트 */}
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-1.5">
                  <span className="text-xs font-bold text-gray-900 dark:text-white">
                    {referral.nameKo}
                  </span>
                  <span className="rounded bg-yellow-100 px-1 py-0.5 text-[9px] font-semibold text-yellow-700 dark:bg-yellow-900/50 dark:text-yellow-300">
                    추천
                  </span>
                </div>
                <p className="truncate text-[10px] text-gray-500 dark:text-gray-400">
                  {referral.description}
                </p>
              </div>

              {/* 화살표 */}
              <svg
                className="h-4 w-4 shrink-0 text-gray-400 transition-transform group-hover:translate-x-0.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
