import Image from 'next/image'
import React from 'react'
import TitleSection from './TitleSection'
import { IMAGE_LIST } from '@/constants'

const AlbumWedding = () => {
  return (
    <section id="album-wedding" className="flex-center relative w-full flex-col ">
      <div>
        <Image
          src={'/icons/flower-large.svg'}
          fill
          className="object-contain"
          alt="flower image"
        ></Image>
      </div>
      <TitleSection title="Album cưới" />
      <div className="z-50 grid w-full max-w-[1440px] grid-cols-1 grid-rows-3 gap-2 px-4 py-8 md:gap-6 xl:gap-2 ">
        <div className="relative col-span-1 row-span-1 grid h-[500px] w-full grid-cols-1 gap-2  md:h-[800px] xl:h-[700px] xl:grid-cols-2 xl:grid-rows-1 ">
          <div className="relative col-span-1 row-span-1 h-full w-full md:h-[400px] xl:h-full">
            <Image
              src={'/wedding-images/wedding-image-1.jpg'}
              alt="image"
              fill
              className="w-full object-cover"
            ></Image>
          </div>
          <div className="col-span-1 grid h-full  grid-cols-2 gap-2 md:h-[400px] xl:h-full">
            {IMAGE_LIST.slice(4, 8).map((item: any, index: number) => (
              <div className="relative col-span-1 h-full w-full" key={index}>
                <Image src={item.url} alt="image" fill className="w-full object-cover"></Image>
              </div>
            ))}
          </div>
        </div>

        <div className="relative col-span-1 row-span-1 grid h-[500px] w-full grid-cols-1 gap-2  md:h-[800px] xl:h-[700px] xl:grid-cols-2 xl:grid-rows-1 ">
          <div className="order-2 col-span-1 grid  h-full grid-cols-2 gap-2 md:h-[400px] xl:order-1 xl:h-full xl:grid-cols-1 xl:grid-rows-2">
            {IMAGE_LIST.slice(6, 8).map((url: any, index: number) => (
              <div className="relative col-span-1 h-full w-full" key={url}>
                <Image src={url.url} alt="image" fill className="w-full  object-cover"></Image>
              </div>
            ))}
          </div>
          <div className="relative col-span-1 row-span-1 h-full w-full md:h-[400px] xl:order-2 xl:h-full">
            <Image
              src={'/wedding-images/wedding-image-10.jpg'}
              alt="image"
              fill
              className="w-full object-cover"
            ></Image>
          </div>
        </div>

        <div className="relative col-span-1 row-span-1 grid h-[500px] w-full grid-cols-1 gap-2 md:h-[800px] xl:h-[700px] xl:grid-cols-2 xl:grid-rows-1 ">
          <div className="relative col-span-1 row-span-1 h-full w-full md:h-[400px] xl:h-full">
            <Image
              src={'/wedding-images/wedding-image-4.jpg'}
              alt="image"
              fill
              className="w-full object-cover"
            ></Image>
          </div>
          <div className="col-span-1 grid h-full  grid-cols-2 gap-2 md:h-[400px] xl:h-full">
            {IMAGE_LIST.slice(2, 6).map((item: any, index: number) => (
              <div className="relative col-span-1 h-full w-full" key={index}>
                <Image
                  src={item.url}
                  alt="image"
                  fill
                  className="w-full max-w-[500px] object-cover"
                ></Image>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default AlbumWedding
