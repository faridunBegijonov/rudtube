'use client'
import { FC, useRef, useState } from 'react'
import { icons } from 'react-icons'
import { BsSearch } from 'react-icons/bs'
import { ITextField } from '../type'

export const TextField: FC<ITextField> = ({
  type,
  placeholder,
  style,
  icon,
  callBackFn,
}: ITextField) => {
  return (
    <div className={`relative w-full ${style}`}>
      <input
        onChange={(e) => callBackFn(e.target.value)}
        type={type}
        placeholder={placeholder}
        className={`py-2 px-4 ${
          icon && 'pl-10'
        } focus:border-white w-full outline-none border-[1px] border-white/50 border-solid rounded-full bg-transparent`}
      />
      {icon && (
        <i className="absolute top-[50%] translate-y-[-50%] left-4">
          <BsSearch />
        </i>
      )}
    </div>
  )
}
