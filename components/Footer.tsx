import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <section id="footer">
      <div className="flex-center h-[200px] w-full bg-[#747BA9]">
        <div>
          <Image
            src={'/icons/flower-small.svg'}
            className="rotate-[230deg] opacity-50"
            width={100}
            height={100}
            alt="icon flower"
          ></Image>
        </div>
        <div className="flex-center flex-col">
          <p className="font-Ephesis text-4xl font-bold text-white">Văn Chương</p>
          <p className="font-Ephesis text-4xl font-bold text-white">&</p>
          <p className="font-Ephesis text-4xl font-bold text-white">Thúy Hiền</p>
        </div>
        <div>
          <Image
            src={'/icons/flower-small.svg'}
            className="rotate-[50deg] opacity-50"
            width={100}
            height={100}
            alt="icon flower"
          ></Image>
        </div>
      </div>
    </section>
  )
}

export default Footer
