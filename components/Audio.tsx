'use client'
import Image from 'next/image'
import { useRef, useState } from 'react'

const AudioSection = () => {
  const audioRef: any = useRef()
  const [isPlaying, setIsPlaying] = useState(false)

  const handlePauseAudio = () => {
    audioRef.current?.pause()
    setIsPlaying(false)
  }
  const handlePlayAudio = () => {
    audioRef.current?.play()
    setIsPlaying(true)
  }
  return (
    <div className="sticky bottom-[80px] z-[100]">
      <audio controls ref={audioRef} loop className="hidden">
        <source src="/I-Do-911.mp3" type="audio/mpeg" />
      </audio>
      {isPlaying ? (
        <div
          onClick={handlePauseAudio}
          className="absolute left-10 cursor-pointer transition-all duration-500 ease-in-out  hover:scale-125 md:left-20"
        >
          <div className="flex-center">
            <div className="absolute">
              <Image src={'/sound.png'} alt="sound" width={38} height={38}></Image>
            </div>
            <div className="animation-scale  h-[38px] w-[38px]  rounded-full bg-[#FD3F5D] opacity-20 "></div>
          </div>
        </div>
      ) : (
        <div
          onClick={handlePlayAudio}
          className="absolute left-10 z-[120] cursor-pointer transition-all duration-500 ease-in-out hover:scale-125  md:left-20"
        >
          <div className="flex-center">
            <div className="absolute">
              <Image src={'/silent.png'} alt="sound" width={38} height={38}></Image>
            </div>
            <div className="animation-scale h-[38px] w-[38px]  rounded-full bg-[#FD3F5D] opacity-20 "></div>
          </div>
        </div>
      )}
    </div>
  )
}

export default AudioSection
