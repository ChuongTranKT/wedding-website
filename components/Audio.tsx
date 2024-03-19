'use client'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

const AudioSection = () => {
  const audioRef: any = useRef()
  const [isPlaying, setIsPlaying] = useState(false)
  const playAudio: any = useRef(null)
  const pauseAudio = useRef(null)

  useEffect(() => {
    setTimeout(() => {
      const playAudioElement = document.getElementById('play-audio')
      if (playAudioElement) {
        playAudioElement.classList.add('animation-full-width')
      }
      const textPlayAudioElement = document.getElementById('text-play-audio')
      if (textPlayAudioElement) {
        textPlayAudioElement.classList.add('animation-full-width')
      }
    }, 5000)
  }, [isPlaying])

  const handlePauseAudio = () => {
    audioRef.current?.pause()
    setIsPlaying(false)
  }
  const handlePlayAudio = () => {
    audioRef.current?.play()
    setIsPlaying(true)
  }
  return (
    <div className="sticky  bottom-[80px] z-[100]">
      <audio controls ref={audioRef} loop className="hidden">
        <source src="/I-Do-911.mp3" type="audio/mpeg" />
      </audio>
      {isPlaying ? (
        <div
          onClick={handlePauseAudio}
          className="absolute left-5  cursor-pointer transition-all duration-500 ease-in-out  hover:scale-125 md:left-20"
        >
          <div className="flex-center">
            <div className="absolute z-20">
              <Image src={'/icons/sound.png'} alt="sound" width={38} height={38}></Image>
            </div>
            <div className="animation-scale  h-[38px] w-[38px]  rounded-full bg-[#FD3F5D] opacity-20 "></div>
          </div>
        </div>
      ) : (
        <div
          onClick={handlePlayAudio}
          className="hover:scale-15 absolute left-10 z-[120] cursor-pointer transition-all duration-500 ease-in-out  md:left-10"
        >
          <div className="flex-center">
            <div className="absolute z-20">
              <Image src={'/icons/silent.png'} alt="sound" width={38} height={38}></Image>
            </div>
            <div
              ref={playAudio}
              id="play-audio"
              className="flex-center absolute left-[8px] z-10 h-[35px] w-0 whitespace-nowrap rounded-full bg-[#FD3F5D] p-1 opacity-80  "
            >
              <p
                id="text-play-audio"
                className="w-0 overflow-hidden pr-5 text-end text-sm font-bold text-white"
              >
                Click để nghe nhạc!
              </p>
            </div>
            <div className="animation-scale h-[38px] w-[38px]  rounded-full bg-[#FD3F5D] opacity-20 "></div>
          </div>
        </div>
      )}
    </div>
  )
}

export default AudioSection
