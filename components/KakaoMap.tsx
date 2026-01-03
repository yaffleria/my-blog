'use client'

import Script from 'next/script'
import { useEffect, useRef, useCallback } from 'react'

interface KakaoMapProps {
  lat: number
  lng: number
  level?: number
  width?: string | number
  height?: string | number
  markerText?: string
}

export default function KakaoMap({
  lat,
  lng,
  keyword,
  level = 3,
  width = '100%',
  height = '400px',
  markerText,
}: KakaoMapProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  const initMap = useCallback(() => {
    if (!containerRef.current || !window.kakao) return

    const loadMap = (latitude: number, longitude: number) => {
      if (!containerRef.current) return
      const container = containerRef.current
      const options = {
        center: new window.kakao.maps.LatLng(latitude, longitude),
        level: level,
      }

      const map = new window.kakao.maps.Map(container, options)

      // Add marker
      const markerPosition = new window.kakao.maps.LatLng(latitude, longitude)
      const marker = new window.kakao.maps.Marker({
        position: markerPosition,
      })
      marker.setMap(map)

      // Add info window if text provided
      if (markerText) {
        const iwContent = `
          <div style="padding:10px; color: #000; min-width:150px;">
            <div style="font-weight:bold; margin-bottom:5px;">${markerText}</div>
            <div style="font-size:12px;">
              <a href="https://map.kakao.com/link/map/${markerText},${latitude},${longitude}" style="color:blue; margin-right:10px;" target="_blank">큰지도보기</a>
              <a href="https://map.kakao.com/link/to/${markerText},${latitude},${longitude}" style="color:blue" target="_blank">길찾기</a>
            </div>
          </div>
        `
        const iwPosition = new window.kakao.maps.LatLng(latitude, longitude)

        const infowindow = new window.kakao.maps.InfoWindow({
          position: iwPosition,
          content: iwContent,
        })

        infowindow.open(map, marker)
      }

      // Zoom control
      const zoomControl = new window.kakao.maps.ZoomControl()
      map.addControl(zoomControl, window.kakao.maps.ControlPosition.RIGHT)
    }

    if (keyword) {
      // Use Places service to find location by keyword
      window.kakao.maps.load(() => {
        const ps = new window.kakao.maps.services.Places()
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        ps.keywordSearch(keyword, (data: any, status: any) => {
          if (status === window.kakao.maps.services.Status.OK) {
            const place = data[0]
            loadMap(parseFloat(place.y), parseFloat(place.x))
          } else {
            console.error('Kakao Map Search failed for keyword:', keyword)
          }
        })
      })
    } else if (lat !== undefined && lng !== undefined) {
      loadMap(lat, lng)
    }
  }, [lat, lng, keyword, level, markerText])

  useEffect(() => {
    if (window.kakao && window.kakao.maps) {
      window.kakao.maps.load(() => {
        initMap()
      })
    }
  }, [lat, lng, keyword, level, initMap])

  return (
    <>
      <Script
        src={`https://dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_JAVASCRIPT_KEY}&autoload=false&libraries=services,clusterer,drawing`}
        strategy="lazyOnload"
        onLoad={() => {
          if (window.kakao && window.kakao.maps) {
            window.kakao.maps.load(() => {
              initMap()
            })
          }
        }}
      />
      <div
        ref={containerRef}
        style={{ width: width, height: height }}
        className="my-4 rounded-lg border border-gray-200 shadow-md"
      ></div>
    </>
  )
}
