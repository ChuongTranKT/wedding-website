'use client'
import { calculateTimeRemaining } from '@/utils'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

type TimePropsType = {
  endTime: string
}

const Time = ({ endTime }: TimePropsType) => {
  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining(endTime))

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining(endTime))
    }, 800)

    return () => {
      clearInterval(timer)
    }
  }, [endTime])

  return (
    <section id="time-remaining" className="relative">
      <div className="flex-center flex-wrap gap-4">
        <div className="flex-center relative">
          <Image
            src={'/icons/clock-bg.png'}
            alt="clock"
            width={100}
            height={100}
            className="xl:h-[80px] xl:w-[80px]"
          ></Image>
          <div className="absolute p-2">
            <p className=" text-center text-[16px] font-bold text-[#5880A2]">
              {timeRemaining.days}
            </p>
            <p className="text-center text-[14px] font-normal opacity-55">Ngày</p>
          </div>
        </div>
        <div className="flex-center relative">
          <Image
            src={'/icons/clock-bg.png'}
            alt="clock"
            width={100}
            height={100}
            className="xl:h-[80px] xl:w-[80px]"
          ></Image>
          <div className="absolute p-2">
            <p className=" text-center text-[16px] font-bold text-[#5880A2]">
              {timeRemaining.hours}
            </p>
            <p className="text-center text-[14px] font-normal opacity-55">Giờ</p>
          </div>
        </div>
        <div className="flex-center relative">
          <Image
            src={'/icons/clock-bg.png'}
            alt="clock"
            width={100}
            height={100}
            className="xl:h-[80px] xl:w-[80px]"
          ></Image>
          <div className="absolute p-2">
            <p className=" text-center text-[16px] font-bold text-[#5880A2]">
              {timeRemaining.minutes}
            </p>
            <p className="text-center text-[14px] font-normal opacity-55">Phút</p>
          </div>
        </div>
        <div className="flex-center relative">
          <Image
            src={'/icons/clock-bg.png'}
            alt="clock"
            width={100}
            height={100}
            className="xl:h-[80px] xl:w-[80px]"
          ></Image>
          <div className="absolute p-2">
            <p className=" text-center text-[16px] font-bold text-[#5880A2]">
              {timeRemaining.seconds}
            </p>
            <p className="text-center text-[14px] font-normal opacity-55">Giây</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Time
