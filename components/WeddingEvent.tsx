import React from 'react'
import TitleSection from './TitleSection'
import Image from 'next/image'
import Time from './Time'
import Link from 'next/link'

type CartEventPropsType = {
  title: string
  endTime: string
  image: string
  time_title: string
}

const CartEvent = ({ title, endTime, image, time_title }: CartEventPropsType) => {
  return (
    <div className="relative h-[650px] min-w-[340px] max-w-[450px] border-[2px] border-[#86a0b6] p-6 md:h-[700px] xl:h-[600px]  ">
      <div>
        <div className="absolute right-[-10px] top-[-22px] bg-white p-2">
          <Image src={'/icons/event-shape-1.png'} width={118} height={26} alt="event shape"></Image>
        </div>
        <div className="absolute bottom-[-22px] left-[-10px] bg-white p-2">
          <Image src={'/icons/event-shape-2.png'} width={118} height={26} alt="event shape"></Image>
        </div>
      </div>
      <div className="relative flex h-full w-full flex-col items-center justify-start gap-4 bg-[#EDF3F7] px-3 py-4">
        <div>
          <p className="text-2xl font-bold uppercase text-[#747BA9]">{title}</p>
        </div>
        <div>
          <Image src={image} alt="image" width={378} height={378} className="object-cover"></Image>
        </div>
        <div className="flex-center gap-2">
          <Image src={'/icons/clock.png'} alt="clock" width={24} height={24}></Image>
          <p className="text-[#848892]">{time_title}</p>
        </div>
        <Time endTime={endTime} />
        <Link
          href={
            'https://www.google.com/maps/place/AEON+Mall+B%C3%ACnh+D%C6%B0%C6%A1ng+Canary/@10.9377635,106.7053722,2181m/data=!3m1!1e3!4m6!3m5!1s0x3175281ca7aa9583:0xbd4e60821b659919!8m2!3d10.9323843!4d106.7119115!16s%2Fg%2F1q625w3vq?entry=ttu'
          }
          target="_blank"
        >
          <div className="flex-center items-end gap-2">
            <Image src={'/icons/map.gif'} alt="map" width={32} height={32}></Image>
            <p className="text-end font-bold text-[#848892] underline decoration-solid">
              Xem bản đồ
            </p>
          </div>
        </Link>
      </div>
    </div>
  )
}

const WeddingEvent = () => {
  return (
    <section id="wedding-event" className="flex-center relative flex-col gap-6 p-4">
      <TitleSection title="Sự kiện cưới" />
      <div className="grid grid-cols-1 gap-10 xl:grid-cols-2 xl:grid-rows-2">
        <CartEvent
          title="Hôn lễ tư gia nữ"
          endTime="2024-09-11T08:30:00"
          time_title="08:30 10/02/2023"
          image="/wedding-images/image-1.jpg"
        />
        <CartEvent
          title="Tiệc cưới tư gia nữ"
          endTime="2024-09-11T11:00:00"
          time_title="11:00 10/02/2023"
          image="/wedding-images/image-2.jpg"
        />
        <CartEvent
          title="Hôn lễ tư gia nam"
          endTime="2024-09-23T08:00:00"
          time_title="08:30 10/02/2023"
          image="/wedding-images/image-1.jpg"
        />
        <CartEvent
          title="Tiệc cưới tư gia nam"
          endTime="2024-09-23T11:00:00"
          time_title="11:00 10/02/2023"
          image="/wedding-images/image-2.jpg"
        />
      </div>
    </section>
  )
}

export default WeddingEvent
