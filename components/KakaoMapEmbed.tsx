'use client'

import { useEffect, useRef } from 'react'

interface KakaoMapEmbedProps {
  timestamp: string
  scriptKey: string
  width?: string
  height?: string
}

const KakaoMapEmbed = ({
  timestamp,
  scriptKey,
  width = '640',
  height = '360',
}: KakaoMapEmbedProps) => {
  const isLoaded = useRef(false)

  useEffect(() => {
    if (isLoaded.current) return

    const scriptId = 'daum-roughmap-loader-script'
    let script = document.getElementById(scriptId) as HTMLScriptElement

    const executeScript = () => {
      // @ts-ignore
      if (window.daum && window.daum.roughmap && window.daum.roughmap.Lander) {
        // @ts-ignore
        new window.daum.roughmap.Lander({
          timestamp,
          key: scriptKey,
          mapWidth: width,
          mapHeight: height,
        }).render()
        isLoaded.current = true
      }
    }

    if (!script) {
      script = document.createElement('script')
      script.id = scriptId
      script.charset = 'UTF-8'
      script.className = 'daum_roughmap_loader_script'
      script.src = 'https://ssl.daumcdn.net/dmaps/map_js_init/roughmapLoader.js'
      script.async = true
      script.onload = executeScript
      document.body.appendChild(script)
    } else {
      executeScript()
    }
  }, [timestamp, scriptKey, width, height])

  return (
    <div className="my-8 flex w-full justify-center overflow-hidden">
      <div
        id={`daumRoughmapContainer${timestamp}`}
        className="root_daum_roughmap root_daum_roughmap_landing"
        style={{ width: '100%', maxWidth: `${width}px` }}
      ></div>
    </div>
  )
}

export default KakaoMapEmbed
