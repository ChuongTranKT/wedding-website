import Image from 'next/image'
import React, { MouseEventHandler } from 'react'

type ButtonProps = {
  type: 'button' | 'submit'
  title?: string
  icon?: string
  variant?: string
  handleClick?: MouseEventHandler<HTMLButtonElement>
  textStyle?: string
}

const Button = ({ type, title, icon, variant, handleClick, textStyle }: ButtonProps) => {
  return (
    <button
      className={`flex-center rounded-full  ${variant}`}
      onClick={handleClick}
      type={type}
      title={title}
    >
      {icon && <Image src={icon} alt={'icon'} width={24} height={24} />}
      <label className={`whitespace-nowrap text-sm ${textStyle}`}>{title}</label>
    </button>
  )
}

export default Button
