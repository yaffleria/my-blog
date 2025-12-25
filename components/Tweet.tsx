'use client'

import { Tweet } from 'react-tweet'

const TweetComponent = ({ id }: { id: string }) => {
  return (
    <div className="my-6 flex justify-center">
      <Tweet id={id} />
    </div>
  )
}

export default TweetComponent
