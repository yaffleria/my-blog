'use client'

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
  const mapHtml = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { margin: 0; padding: 0; overflow: hidden; display: flex; justify-content: center; align-items: center; }
          .root_daum_roughmap { width: 100% !important; margin: 0 !important; }
        </style>
      </head>
      <body>
        <div id="daumRoughmapContainer${timestamp}" class="root_daum_roughmap root_daum_roughmap_landing" style="width:100%"></div>
        <script charset="UTF-8" class="daum_roughmap_loader_script" src="https://ssl.daumcdn.net/dmaps/map_js_init/roughmapLoader.js"></script>
        <script charset="UTF-8">
          new daum.roughmap.Lander({
            "timestamp" : "${timestamp}",
            "key" : "${scriptKey}",
            "mapWidth" : "${width}",
            "mapHeight" : "${height}"
          }).render();
        </script>
      </body>
    </html>
  `

  return (
    <div className="my-8 flex w-full justify-center overflow-hidden">
      <iframe
        title={`Kakao Map ${timestamp}`}
        srcDoc={mapHtml}
        style={{
          width: '100%',
          height: `${height}px`,
          maxWidth: `${width}px`,
          border: 'none',
        }}
        loading="lazy"
      />
    </div>
  )
}

export default KakaoMapEmbed
