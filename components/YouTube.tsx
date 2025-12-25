'use client'

interface YouTubeProps {
  id: string
}

const YouTube = ({ id }: YouTubeProps) => {
  return (
    <div className="my-6 flex justify-center">
      <div className="aspect-video w-full max-w-3xl">
        <iframe
          src={`https://www.youtube.com/embed/${id}`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen={true}
          referrerPolicy="strict-origin-when-cross-origin"
          className="h-full w-full rounded-lg"
        />
      </div>
    </div>
  )
}

export default YouTube
