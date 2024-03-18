'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import TitleSection from './TitleSection'

interface BoxTransitionPropsType {
  title_1: string
  title_2: string
}

const BoxTransition = ({ title_1, title_2 }: BoxTransitionPropsType) => {
  return (
    <div className="flex-center absolute top-0 z-10 h-[100%] w-[100%] bg-white opacity-90">
      <div className=" animation-width-transition-1 absolute top-[10px] h-[1px] w-[90%] bg-[#747BA9] opacity-50 xl:w-[92.5%]"></div>
      <div className=" animation-height-transition-1 absolute left-[17px] h-[94%] w-[1px] bg-[#747BA9] opacity-50 xl:h-[95.5%]"></div>

      <div className="animation-width-transition-2 absolute top-[20px] h-[1px] w-[96%] bg-[#747BA9] opacity-50 xl:w-[97%]"></div>
      <div className=" animation-height-transition-2 absolute left-[7px] h-[88%] w-[1px] bg-[#747BA9] opacity-50 xl:h-[91%]"></div>

      <div className=" animation-width-transition-2 absolute bottom-[20px] h-[1px] w-[96%] bg-[#747BA9] opacity-50 xl:w-[97%]"></div>
      <div className=" animation-height-transition-2 absolute right-[7px] h-[88%] w-[1px] bg-[#747BA9] opacity-50 xl:h-[91%]"></div>

      <div className=" animation-width-transition-1 absolute bottom-[10px] h-[1px] w-[90%] bg-[#747BA9] opacity-50 xl:w-[92.5%]"></div>
      <div className=" animation-height-transition-1 absolute right-[17px] h-[94%] w-[1px] bg-[#747BA9] opacity-50 xl:h-[95.5%]"></div>
      <div className="flex flex-col items-center justify-center space-y-3">
        <p className="font-Ephesis text-3xl font-bold leading-5 tracking-widest text-[#747BA9] xl:text-4xl">
          {title_1}
        </p>
        <p className="text-xl font-normal uppercase text-[#747BA9] xl:text-2xl ">{title_2}</p>
      </div>
    </div>
  )
}

const CoupleSection = () => {
  const [isHoverImageGroom, setIsHoverImageGroom] = useState(false)
  const [isHoverImageBride, setIsHoverImageBride] = useState(false)

  return (
    <section id="couple" className="relative flex flex-col items-center justify-center gap-12 px-6">
      <TitleSection title="Cô dâu & Chú rể" />
      <div className=" relative flex flex-col items-center justify-center gap-4 px-0 xl:flex-row  xl:gap-8">
        <div
          className="relative "
          onMouseMove={() => setIsHoverImageGroom(true)}
          onMouseLeave={() => setIsHoverImageGroom(false)}
        >
          <div className='absolute left-[-180px] top-[180px] h-[300px] w-[300px] rotate-180 bg-[url("/flower-medium.svg")] bg-contain bg-right-top bg-no-repeat  xl:top-[310px]'></div>
          <div className=" relative h-[360px] w-[360px] p-10 xl:h-[456px] xl:w-[456px] ">
            <Image src={'/image-1.jpg'} alt="groom" fill className=" object-cover"></Image>
          </div>
          {isHoverImageGroom && <BoxTransition title_1="Trần Văn Chương" title_2="Út nam" />}
        </div>
        <div
          className="relative"
          onMouseMove={() => setIsHoverImageBride(true)}
          onMouseLeave={() => setIsHoverImageBride(false)}
        >
          <div className='absolute right-[20px] top-[211px] z-[-10]  h-[300px] w-[300px] rotate-[70deg] bg-[url("/flower-medium.svg")] bg-contain bg-right-top bg-no-repeat xl:right-[-173px] xl:top-[305px]  xl:block'></div>
          <div className=" relative h-[360px] w-[360px] p-10 xl:h-[456px] xl:w-[456px] ">
            <Image src={'/image-2.jpg'} alt="groom" fill className=" object-cover"></Image>
          </div>
          {isHoverImageBride && (
            <BoxTransition title_1="Nguyễn Thị Thúy Hiền" title_2="Trưởng nữ" />
          )}
        </div>
        <div className="absolute bottom-[-50px] z-30 ">
          <div className="relative h-[100px] w-[100px] rounded-full bg-white ">
            <Image
              src={'/wedding-chibi.png'}
              alt="wedding"
              fill
              className="rounded-full object-contain "
            ></Image>
          </div>
        </div>
      </div>
      <div>
        <p className="text-[32px] font-bold text-[#747BA9] xl:text-[40px]">
          We are Getting Married
        </p>
      </div>
      <div className="flex w-[100%] items-center justify-center xl:w-[40%]">
        <span className="text-center text-[16px] font-normal leading-6 text-gray-900 opacity-50 xl:text-[20px] xl:leading-8">
          Thật vui vì được gặp và đón tiếp các bạn trong một dịp đặc biệt như đám cưới của chúng
          tôi. Chúng tôi muốn gửi đến bạn những lời cảm ơn sâu sắc nhất và để bạn biết chúng tôi rất
          hạnh phúc khi thấy bạn ở đó. Cảm ơn các bạn rất nhiều vì sự hiện diện cùng những lời chúc
          tốt đẹp mà bạn đã dành cho chúng tôi!
        </span>
      </div>
      <div className="flex-center gap-3 xl:gap-9">
        <p className="font-Ephesis text-[32px] leading-relaxed  xl:text-[54px]">Văn Chương</p>
        <p className="font-Ephesis text-[32px] leading-relaxed  xl:text-[54px]">&</p>
        <p className="font-Ephesis text-[32px] leading-relaxed  xl:text-[54px]">Thúy Hiền</p>
      </div>
      <div className="flex-center gap-4 xl:gap-40">
        <div>
          <div className="flex items-center justify-start gap-1">
            <p className="text-[14px] tracking-wide  text-gray-900 opacity-60 xl:text-[20px]">
              Con ông:
            </p>
            <p className="text-[14px] font-bold text-gray-900 opacity-60 xl:text-[20px]">
              Trần Văn Hiền
            </p>
          </div>
          <div className="flex items-center justify-start gap-1">
            <p className="text-[14px] tracking-wide text-gray-900 opacity-60 xl:text-[20px]">
              Con bà:
            </p>
            <p className="text-[14px] font-bold text-gray-900 opacity-60 xl:text-[20px]">
              Nguyễn Thị Ánh
            </p>
          </div>
        </div>
        <div>
          <div className="flex items-center justify-start gap-1">
            <p className="text-[14px] tracking-wide  text-gray-900 opacity-60 xl:text-[20px]">
              Con ông:
            </p>
            <p className="text-[14px] font-bold text-gray-900 opacity-60 xl:text-[20px]">
              Nguyễn Văn Nghĩa
            </p>
          </div>
          <div className="flex items-center justify-start gap-1">
            <p className="text-[14px] tracking-wide text-gray-900 opacity-60 xl:text-[20px]">
              Con bà:
            </p>
            <p className="text-[14px] font-bold text-gray-900 opacity-60 xl:text-[20px]">
              Ung Thị Trang
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CoupleSection
