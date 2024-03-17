import Image from 'next/image'
import React from 'react'

type TitleSectionProps = {
  title: string
}

const TitleSection = ({ title }: TitleSectionProps) => {
  return (
    <div className="flex-center relative flex-col gap-2">
      <div>
        <Image src={'/section-title.png'} width={200} height={60} alt="section title"></Image>
      </div>
      <div>
        <p className="font-Ephesis text-4xl font-bold tracking-wider text-[#747BA9]">{title}</p>
      </div>
      <div>
        <Image
          src={'/line.svg'}
          alt="line"
          width={150}
          height={30}
          className="xl:w-[200px]"
        ></Image>
      </div>
    </div>
  )
}

export default TitleSection
