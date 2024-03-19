'use client'
import { swiperConfig } from '@/configs/swiper-hero'
import { IMAGE_LIST } from '@/constants'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import { Autoplay, EffectCreative } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper-bundle.css'
import Button from './Button'

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const swiperRef = useRef<any>(null)
  const handlePrevSlide = () => {
    swiperRef.current.slidePrev()
    addAnimate()
  }

  const handleNextSlide = () => {
    swiperRef.current.slideNext()
    addAnimate()
  }

  useEffect(() => {
    const element = document.querySelector('#person-name')
    element?.classList.add('animate-slideLeft')
  }, [currentSlide])

  const handleSlideChange = (swiper: any) => {
    addAnimate()
    setCurrentSlide(swiper.realIndex)
  }

  const addAnimate = () => {
    const element = document.querySelector('.animate-slideLeft')
    if (element) {
      element.classList.remove('animate-slideLeft')
    }
  }

  return (
    <section id="hero" className="relative h-[500px] w-full md:h-[900px] ">
      <Swiper
        {...swiperConfig}
        onSlideChange={handleSlideChange}
        ref={swiperRef}
        className="h-[500px] w-[100%] md:h-[900px]"
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, EffectCreative]}
        onSwiper={(swiper) => {
          swiperRef.current = swiper // function is called after the swiper is initialized and returns a swiper object containing swiper methods and properties that allow manipulation of the methods after the swiper is initialized
        }}
        effect={'creative'}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: ['-20%', 0, -1],
          },
          next: {
            translate: ['100%', 0, 0],
          },
        }}
      >
        {IMAGE_LIST.map((item: any) => (
          <SwiperSlide key={item.url}>
            <div className="flex-center w-full">
              <Image src={item.url} alt="image-1" fill className="bg-center object-cover"></Image>
              <div className="absolute inset-0 h-[500px] w-full bg-[#000] opacity-[0.55] md:h-[900px]"></div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="absolute top-[50%] z-40 hidden w-full px-20 md:block">
        <div className="flex items-center justify-between md:flex md:justify-between md:gap-4">
          <Button
            type="button"
            icon="/icons/arrow-left.svg"
            variant="bg-[#000] opacity-20 w-16 h-16 border border-2 border-[#fff]"
            handleClick={handlePrevSlide}
          />
          <Button
            type="button"
            icon="/icons/arrow-right.svg"
            variant="bg-[#000] opacity-20 w-16 h-16 border border-2 border-[#fff]"
            handleClick={handleNextSlide}
          />
        </div>
      </div>
      <div className="absolute left-1/2 top-1/2 z-20 w-full -translate-x-1/2 -translate-y-1/2 transform p-4">
        <div className="flex-center relative z-30 mx-auto my-auto h-[200px] max-w-[885px] px-[20px] py-[40px] md:h-[355px] xl:px-[70px] xl:py-[80px]">
          <div className="flex flex-col items-center justify-center space-y-8">
            <div className="flex-center animate-slideLeft mt-3 space-x-4" id="person-name">
              <span className="font-Splash text-2xl text-[#fff] md:text-[65px]">Văn Chương</span>
              <div className="h-[24px] w-[24px] md:h-[38px] md:w-[38px]">
                <Image
                  src={'/icons/ic-heart.png'}
                  alt="icon heart"
                  width={38}
                  height={38}
                  className="sepia-100 brightness-0 hue-rotate-0 invert saturate-0 filter"
                ></Image>
              </div>
              <span className="font-Splash text-2xl text-[#fff] md:text-[65px]">Thúy Hiền</span>
            </div>
            <div className="">
              <p className="text-center text-[#fff] md:text-[30px]">{`We're Getting Married!`}</p>
              <p className="text-center text-[#fff] md:text-[30px]">{`23/09/2024`}</p>
            </div>
          </div>
          <div className=" absolute left-0 top-0  h-[1px] w-[60%] bg-[#fff] md:w-[70%]"></div>
          <div className="absolute bottom-0  right-0  h-[1px] w-[60%] bg-[#fff] md:w-[70%]"></div>
          <div className="absolute bottom-0 right-0 h-[60%] w-[1px] bg-[#fff] md:h-[70%]"></div>
          <div className="absolute left-0 top-0 h-[60%] w-[1px] bg-[#fff] md:h-[70%]"></div>
          <div className=" absolute right-[-28px] top-[-15px] w-[130px] md:right-1 md:w-[150px]">
            <Image
              src={'/icons/shape3.png'}
              width={100}
              height={50}
              alt="image"
              className="md:w-[150px]"
            ></Image>
          </div>
          <div className=" absolute bottom-[-15px] left-1  w-[130px] md:w-[150px]">
            <Image
              src={'/icons/shape4.png'}
              width={100}
              height={50}
              alt="image"
              className="md:w-[150px]"
            ></Image>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
