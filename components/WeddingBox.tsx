import Image from 'next/image'
import React from 'react'
import TitleSection from './TitleSection'

const WeddingBox = () => {
  return (
    <section id="wedding-box" className="relative my-4">
      <TitleSection title="Hộp mừng cưới" />
      <div className="flex-center mt-8 flex-col gap-4 md:flex-row ">
        <div className="rounded-md border-[2px] border-[#747BA9] px-8 py-4">
          <div className="flex-center flex-col gap-4">
            <p className="font-Ephesis text-4xl font-bold text-[#747BA9] ">Mừng cưới chú rể</p>
            <Image src={'/icons/qrcode.svg'} width={150} height={150} alt="qr-code"></Image>
            <div className="flex-center gap-2">
              <p className="text-gray-900 opacity-90">Ngân hàng:</p>
              <p className="font-bold opacity-70">Saccombank</p>
            </div>
            <div className="flex-center gap-2">
              <p className="text-gray-900 opacity-90">Số tài khoản:</p>
              <p className="font-bold opacity-70">12345678910</p>
            </div>
            <div className="flex-center gap-2">
              <p className="text-gray-900 opacity-90">Tên tài khoản:</p>
              <p className="font-bold opacity-70">Trần Văn Chương</p>
            </div>
            <div className="flex-center gap-2">
              <p className="text-gray-900 opacity-90">Chi nhánh:</p>
              <p className="font-bold opacity-70">Kon Tum</p>
            </div>
          </div>
        </div>
        <div className="rounded-md border-[2px] border-[#747BA9] px-8 py-4">
          <div className="flex-center flex-col gap-4">
            <p className="font-Ephesis text-4xl font-bold text-[#747BA9] ">Mừng cưới cô dâu</p>
            <Image src={'/icons/qrcode.svg'} width={150} height={150} alt="qr-code"></Image>
            <div className="flex-center gap-2">
              <p className="text-gray-900 opacity-90">Ngân hàng:</p>
              <p className="font-bold opacity-70">Saccombank</p>
            </div>
            <div className="flex-center gap-2">
              <p className="text-gray-900 opacity-90">Số tài khoản:</p>
              <p className="font-bold opacity-70">12345678910</p>
            </div>
            <div className="flex-center gap-2">
              <p className="text-gray-900 opacity-90">Tên tài khoản:</p>
              <p className="font-bold opacity-70">Trần Văn Chương</p>
            </div>
            <div className="flex-center gap-2">
              <p className="text-gray-900 opacity-90">Chi nhánh:</p>
              <p className="font-bold opacity-70">Kon Tum</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WeddingBox
