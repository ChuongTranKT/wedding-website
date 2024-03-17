'use client'
import { useEffect, useState } from 'react'
import Snowfall from 'react-snowfall'

const SnowfallEffect = () => {
  const [imageList, setImageList] = useState<any>([])

  useEffect(() => {
    const snowImage = document.createElement('img')
    snowImage.src = '/big-snow.png'
    const image = [snowImage]
    setImageList(image)
  }, [])

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 100,
        pointerEvents: 'none',
      }}
    >
      <Snowfall snowflakeCount={30} images={imageList} radius={[5, 20]} />
    </div>
  )
}

export default SnowfallEffect
