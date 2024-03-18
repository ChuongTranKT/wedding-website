import Image from 'next/image'
import React from 'react'

type TitleSectionProps = {
  title: string
}

const TitleSection = ({ title }: TitleSectionProps) => {
  return (
    <div className="flex-center relative flex-col gap-4">
      <div>
        <Image
          src={'/section-title.png'}
          width={200}
          height={60}
          alt="section title"
          className="xl:w-[250px]"
        ></Image>
      </div>
      <div>
        <p className="font-Splash text-4xl  capitalize tracking-wider text-[#747BA9] xl:text-[44px] ">
          {title}
        </p>
      </div>
      <div className="relative flex flex-col items-center justify-center">
        <Image
          src={'/line.svg'}
          alt="line"
          width={150}
          height={30}
          className="xl:w-[200px]"
        ></Image>
        <div className="absolute top-[-60px]">
          <Image
            src={'/giphy.gif'}
            alt="line"
            width={100}
            height={100}
            className="xl:w-[150px]"
          ></Image>
        </div>
      </div>
    </div>
  )
}

export default TitleSection
