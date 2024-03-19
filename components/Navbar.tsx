'use client'
import { MENU_LIST } from '@/constants'
import Image from 'next/image'
import { useEffect, useState } from 'react'

const Navbar = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false)
  const [isChangeNavbar, setIsChangeNavbar] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      const heroSection = document.getElementById('hero')
      const rect = heroSection?.getBoundingClientRect()

      if (rect && rect.top < window.innerHeight && rect.bottom >= 100) {
        setIsChangeNavbar(false) //inside viewport
      } else {
        setIsChangeNavbar(true) // outside viewport
      }
    })

    const windowWidth = window.innerWidth
    if (windowWidth < 764) {
      setIsMobile(true)
    }
  }, [])

  const handleClickMenu = (sectionID: string) => {
    const targetElement = document.getElementById(sectionID)
    targetElement?.scrollIntoView({ behavior: 'smooth' })
    setIsOpenMenu(false)
  }

  return (
    <section id="navbar" className="flex-between fixed top-[0px] z-[1000] h-[80px] w-full">
      <div
        className={`absolute top-[0px] z-20 h-[80px] w-full ${!isChangeNavbar ? 'bg-zinc-100 opacity-30' : 'bg-white'} transition-all duration-200 ease-out`}
      ></div>
      <div className="z-40 grid h-[80px] w-full grid-cols-3 place-content-center gap-0 px-6 py-16">
        <div className="flex-center order-2 col-span-2 place-content-start space-x-2 xl:order-1 xl:col-span-1">
          <span
            className={`font-Ephesis text-2xl font-bold ${isChangeNavbar ? 'text-[#747BA9] transition-all duration-200 ease-out' : 'text-[#fff]'} xl:text-3xl`}
          >
            Chương
          </span>
          <div>
            <Image src={'/icons/heart.gif'} width={32} height={32} alt="heart icon"></Image>
          </div>
          <span
            className={`font-Ephesis text-2xl font-bold ${isChangeNavbar ? 'text-[#747BA9] transition-all duration-200 ease-out' : 'text-[#fff]'} xl:text-3xl`}
          >
            Hiền
          </span>
        </div>
        <div className="col-span-1 block xl:hidden" onClick={() => setIsOpenMenu(true)}>
          <Image src={'/icons/icon_menu.png'} width={32} height={32} alt="menu"></Image>
        </div>
        <div
          className={` absolute xl:bg-inherit ${isOpenMenu ? 'left-0' : 'left-[-500px] xl:left-0'} top-[-5px] z-50 h-[100vh]  bg-[#6b8295] transition-all duration-500  ease-in-out xl:relative xl:order-2 xl:col-span-2 xl:mt-[5px] xl:block xl:h-fit`}
        >
          <ul className="flex w-[300px] flex-col items-start justify-start px-4 py-20 xl:w-full xl:flex-row xl:items-center xl:px-0 xl:py-0">
            {MENU_LIST.map((item: any) => (
              <li
                className={`px-4 py-6 font-bold ${isChangeNavbar ? 'text-[#fff] transition-all duration-200 ease-out xl:text-[#747BA9]' : 'text-[#fff]'} xl:py-8`}
                key={item.id}
                onClick={() => handleClickMenu(item.id)}
              >
                <div
                  className={`flex-center cursor-pointer gap-2 p-2 hover:rounded-md hover:bg-[#6b8295] xl:min-w-[100px] xl:flex-col xl:gap-1 ${isChangeNavbar ? 'xl:hover:bg-[#f7f8fc]' : 'xl:hover:bg-zinc-400'}`}
                >
                  <Image
                    src={isChangeNavbar && !isMobile ? item.image_color : item.image_white}
                    alt="home"
                    width={24}
                    height={24}
                  ></Image>
                  {item.label}
                </div>
              </li>
            ))}
          </ul>
          <div
            className="absolute right-3 top-11 z-40 h-8 w-8 cursor-pointer xl:hidden "
            onClick={() => setIsOpenMenu(false)}
          >
            <Image src={'/icons/close.png'} alt="close" width={80} height={80} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Navbar
