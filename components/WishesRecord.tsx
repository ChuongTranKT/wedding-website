'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import TitleSection from './TitleSection'
import WishesList from './WishesList'

const WishesRecord = () => {
  const [isHoverButton, setIsHoverButton] = useState(false)
  return (
    <section id="wishes-record" className="relative">
      <div className="bg-custom-gradient before-custom flex-center relative z-10 w-full flex-col gap-4 bg-no-repeat px-2 py-60 ">
        <div className="absolute top-[-10px] z-[-1] h-[50%] w-full">
          <Image
            src={'/icons/flower-large.svg'}
            alt="flower image"
            fill
            className="object-contain"
          ></Image>
        </div>
        <div className=" absolute bottom-[-10px] z-[-1] h-[50%] w-full">
          <Image
            src={'/icons/flower-large.svg'}
            alt="flower image"
            fill
            className="rotate-180 object-contain"
          ></Image>
        </div>
        <div className=" flex-center shadow-custom-rgba  relative min-h-[600px] min-w-[360px] max-w-[960px] flex-col  bg-white p-4 md:min-w-[600px] xl:min-w-[700px] xl:p-8">
          <div className="absolute top-[30px] h-[1px] w-[80%] bg-[#747BA9] opacity-50 md:w-[88%] xl:w-[90%]"></div>
          <div className="absolute left-[35px] h-[90%] w-[1px] bg-[#747BA9] opacity-50 md:h-[90%] xl:h-[90%]"></div>

          <div className="absolute top-[40px] h-[1px] w-[86%] bg-[#747BA9] opacity-50 md:w-[91.5%] xl:w-[92.8%]"></div>
          <div className="absolute left-[25px] h-[86.5%] w-[1px] bg-[#747BA9] opacity-50 xl:h-[86.5%]"></div>

          <div className="absolute bottom-[40px] h-[1px] w-[86%] bg-[#747BA9] opacity-50 md:w-[91.5%]  xl:w-[92.8%]"></div>
          <div className="absolute right-[35px] h-[90%] w-[1px] bg-[#747BA9] opacity-50  xl:h-[90%]"></div>

          <div className="absolute bottom-[30px] h-[1px] w-[80%] bg-[#747BA9] opacity-50 md:w-[88%] xl:w-[90%]"></div>
          <div className="absolute right-[25px] h-[86.5%] w-[1px] bg-[#747BA9] opacity-50 xl:h-[86.5%]"></div>
          <div className="absolute top-16">
            <TitleSection title="Viết lời chúc" />
          </div>
          <div className="flex-center absolute bottom-[90px] w-[80%] flex-col gap-3 xl:bottom-[60px]">
            <input
              type="text"
              placeholder="Tên của bạn*"
              className="w-[80%] border bg-[#f9f9f9] p-2 text-gray-500 placeholder:font-Ephesis   placeholder:text-2xl focus:border-[#747BA9] focus:outline-none"
            />
            <textarea
              placeholder="Lời chúc của bạn!"
              className="h-[130px] w-[80%] resize-none border bg-[#f9f9f9] p-2 text-gray-500 placeholder:font-Ephesis  placeholder:text-2xl focus:border-[#747BA9] focus:outline-none "
            />
            <div
              className="flex-center relative h-[70px] w-[200px] p-2"
              onMouseEnter={() => setIsHoverButton(true)}
              onMouseLeave={() => setIsHoverButton(false)}
            >
              <div
                className={`${isHoverButton ? 'animation-width-button-transition-1' : 'animation-full-width-button-transition-1'}  absolute top-[10px] h-[1px] w-[85%] bg-[#747BA9] opacity-50`}
              ></div>
              <div
                className={`${isHoverButton ? 'animation-height-button-transition-1' : 'animation-full-height-button-transition-1'} absolute left-[14px] h-[70%] w-[1px] bg-[#747BA9] opacity-50 `}
              ></div>

              <div
                className={`${isHoverButton ? 'animation-width-button-transition-1' : 'animation-full-width-button-transition-1'} absolute bottom-[10px] h-[1px] w-[85%] bg-[#747BA9] opacity-50`}
              ></div>
              <div
                className={`${isHoverButton ? 'animation-height-button-transition-1' : 'animation-full-height-button-transition-1'} absolute right-[14px] h-[70%] w-[1px] bg-[#747BA9] opacity-50`}
              ></div>

              <div
                className={`${isHoverButton ? 'animation-width-button-transition-2' : 'animation-full-width-button-transition-2'} absolute top-[2px] h-[1px] w-[72%] bg-[#747BA9] opacity-50`}
              ></div>
              <div
                className={`${isHoverButton ? 'animation-height-button-transition-2' : 'animation-full-height-button-transition-2'} absolute left-[27.5px] h-[93.5%] w-[1px] bg-[#747BA9] opacity-50`}
              ></div>

              <div
                className={`${isHoverButton ? 'animation-width-button-transition-2' : 'animation-full-width-button-transition-2'} absolute bottom-[2px] h-[1px] w-[72%] bg-[#747BA9] opacity-50`}
              ></div>
              <div
                className={`${isHoverButton ? 'animation-height-button-transition-2' : 'animation-full-height-button-transition-2'} absolute right-[27.5px] h-[93.5%] w-[1px] bg-[#747BA9] opacity-50`}
              ></div>
              <button
                type="submit"
                className="border border-[#747BA9] px-7 py-3 font-bold uppercase text-[#747BA9] opacity-70"
              >
                Gửi lời chúc
              </button>
            </div>
          </div>
        </div>
        <WishesList />
      </div>
    </section>
  )
}

export default WishesRecord
