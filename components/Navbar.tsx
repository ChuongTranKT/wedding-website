'use client'
import Image from 'next/image'
import React, { useState } from 'react'

const Navbar = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false)

  return (
    <section id="navbar" className="flex-between fixed top-[0px] z-50 h-[80px] w-full">
      <div className=" absolute top-[5px] z-20 h-[80px] w-full bg-zinc-100 opacity-30"></div>
      <div className="z-40 mt-[5px] grid h-[80px] w-full grid-cols-3 place-content-center gap-16 px-6 py-16">
        <div className="flex-center order-2 col-span-2 place-content-start space-x-2 xl:order-1 xl:col-span-1">
          <span className="font-Ephesis text-3xl font-bold text-[#fff]">Chương</span>
          <div>
            <Image src={'/heart-fill.png'} width={24} height={24} alt="heart icon"></Image>
          </div>
          <span className="font-Ephesis text-3xl font-bold text-[#fff]">Hiền</span>
        </div>
        <div className="block xl:hidden" onClick={() => setIsOpenMenu(true)}>
          <Image src={'/icon_menu.png'} width={32} height={32} alt="menu"></Image>
        </div>
        <div
          className={` absolute xl:bg-inherit ${isOpenMenu ? 'left-0' : 'left-[-500px] xl:left-0'} top-[-5px] z-50 h-screen  bg-[#6b8295] transition-all duration-500  ease-in-out xl:relative xl:order-2 xl:col-span-2 xl:mt-[5px] xl:block xl:h-fit`}
        >
          <ul className="flex w-[300px] flex-col items-start justify-start px-4 py-20 xl:flex-row xl:items-center xl:px-0 xl:py-0">
            <li className="px-4 py-6 font-bold text-[#fff] xl:py-8">Home</li>
            <li className="px-4 py-6 font-bold text-[#fff] xl:py-8">Cặp đôi</li>
            <li className="px-4 py-6 font-bold text-[#fff] xl:py-8">Chuyện tình yêu</li>
          </ul>
          <div
            className="absolute right-3 top-3 z-40 h-8 w-8 cursor-pointer xl:hidden "
            onClick={() => setIsOpenMenu(false)}
          >
            <Image src={'/close.png'} alt="close" width={80} height={80} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Navbar
