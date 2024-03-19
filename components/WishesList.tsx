'use client'
import React, { useState } from 'react'
import Button from './Button'
import Image from 'next/image'

const WishesList = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const totalPage = 4

  const handleChangePage = (pageNumber: number) => {
    setCurrentPage(pageNumber)
  }

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
  }
  const handleNextPage = () => {
    if (currentPage < totalPage) {
      setCurrentPage(currentPage + 1)
    }
  }
  return (
    <div className="flex-center  w-[360px] max-w-[960px] flex-col gap-2 p-4 md:min-w-[600px] xl:min-w-[700px]">
      <div className=" flex-center shadow-custom-rgba relative min-h-[800px] min-w-[360px] max-w-[960px] flex-col  bg-white p-4 md:min-w-[600px] xl:min-w-[700px] xl:p-8">
        <div className="absolute top-[15px] h-[1px] w-[86%] bg-[#747BA9] opacity-50 md:top-[10px] md:w-[91.5%] xl:w-[93%]"></div>
        <div className="absolute left-[25px] h-[96%] w-[1px] bg-[#747BA9] opacity-50 md:h-[97.5%] xl:h-[97.5%]"></div>

        <div className="absolute top-[25px] h-[1px] w-[91%] bg-[#747BA9] opacity-50 md:top-[20px] md:w-[95%] xl:w-[95.5%]"></div>
        <div className="absolute left-[15px] h-[93.5%] w-[1px] bg-[#747BA9] opacity-50 md:h-[95%] xl:h-[95%]"></div>

        <div className="absolute bottom-[15px] h-[1px] w-[86%] bg-[#747BA9] opacity-50 md:bottom-[10px] md:w-[91.5%] xl:w-[93%]"></div>
        <div className="absolute right-[25px] h-[96%] w-[1px] bg-[#747BA9] opacity-50 md:h-[97.5%]  xl:h-[97.5%]"></div>

        <div className="absolute bottom-[25px] h-[1px] w-[91%] bg-[#747BA9] opacity-50 md:bottom-[20px] md:w-[95%] xl:w-[95.5%]"></div>
        <div className="absolute right-[15px] h-[93.5%] w-[1px] bg-[#747BA9] opacity-50 md:h-[95%] xl:h-[95%]"></div>
        <div className="flex-center w-full flex-col gap-2 p-6">
          <div className="flex-center mb-3 flex-col">
            <p className="font-Ephesis text-4xl font-bold capitalize tracking-wide text-[#747BA9]">
              Danh sách lời chúc
            </p>
            <Image
              src={'/icons/line.svg'}
              alt="line"
              width={150}
              height={30}
              className="xl:w-[200px]"
            ></Image>
          </div>
          <div className="mb-4">
            {Array.from({ length: totalPage }).map((_, index: number) => (
              <div className="flex h-[150px] w-full flex-col gap-5 overflow-hidden" key={index}>
                <div className="flex flex-col gap-1">
                  <p className="text-xl font-bold opacity-70">Nguyễn Văn A</p>
                  <p className="max-h-[90px] overflow-hidden text-ellipsis  whitespace-normal indent-6 font-normal leading-6 opacity-50">
                    Một cuộc hôn nhân thành công đòi hỏi phải yêu nhiều lần, và luôn ở cùng một
                    người - Chúc cho hai bạn sẽ có được một cuộc hôn nhân viên mãn, trăm năm hạnh
                    phúc!
                  </p>
                </div>
                <div className="border border-dashed"></div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex-center absolute bottom-9 gap-2">
          <Button
            type="button"
            icon="/icons/back.png"
            title=""
            variant="border border-[#747BA9] p-2 rounded-md w-[30px] h-[30px]"
            handleClick={handlePrevPage}
          />
          {Array.from({ length: 5 }).map((_, index: number) => (
            <div
              onClick={() => handleChangePage(index + 1)}
              key={index}
              className={`${currentPage === index + 1 ? 'bg-[#747BA9] transition-all duration-300 ' : 'bg-white'} flex-center h-[30px] w-[30px] rounded-md border border-[#747BA9] p-1`}
            >
              <p
                className={`font-bold  ${currentPage === index + 1 ? 'text-white' : 'text-[#747BA9]'}`}
              >
                {index + 1}
              </p>
            </div>
          ))}
          <Button
            type="button"
            icon="/icons/next.png"
            title=""
            variant="border border-[#747BA9] p-2 rounded-md w-[30px] h-[30px]"
            handleClick={handleNextPage}
          />
        </div>
      </div>
    </div>
  )
}

export default WishesList
