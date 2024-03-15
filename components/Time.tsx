'use client'
import { calculateTimeRemaining } from '@/utils'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

const Time = () => {
  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining())

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining())
    }, 1000)

    return () => {
      clearInterval(timer)
    }
  }, [])

  return (
    <section id="time-remaining" className="relative">
      <div className="flex-center flex-wrap gap-4">
        <div className="flex-center relative">
          <Image src={'/clock-bg.png'} alt="clock" width={144} height={140}></Image>
          <div className="absolute p-2">
            <p className=" text-center text-4xl font-normal text-[#5880A2]">{timeRemaining.days}</p>
            <p className="text-center font-normal opacity-55">Ngày</p>
          </div>
        </div>
        <div className="flex-center relative">
          <Image src={'/clock-bg.png'} alt="clock" width={144} height={140}></Image>
          <div className="absolute p-2">
            <p className=" text-center text-4xl font-normal text-[#5880A2]">
              {timeRemaining.hours}
            </p>
            <p className="text-center font-normal opacity-55">Giờ</p>
          </div>
        </div>
        <div className="flex-center relative">
          <Image src={'/clock-bg.png'} alt="clock" width={144} height={140}></Image>
          <div className="absolute p-2">
            <p className=" text-center text-4xl font-normal text-[#5880A2]">
              {timeRemaining.minutes}
            </p>
            <p className="text-center font-normal opacity-55">Phút</p>
          </div>
        </div>
        <div className="flex-center relative">
          <Image src={'/clock-bg.png'} alt="clock" width={144} height={140}></Image>
          <div className="absolute p-2">
            <p className=" text-center text-4xl font-normal text-[#5880A2]">
              {timeRemaining.seconds}
            </p>
            <p className="text-center font-normal opacity-55">Giây</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Time
