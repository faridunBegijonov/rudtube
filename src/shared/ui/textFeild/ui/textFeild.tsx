'use client'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { FC } from 'react'
import { BsSearch } from 'react-icons/bs'
import { setValue } from '@/app/store/slice'
import { useAppDispatch } from '@/shared'
import { ITextField } from '../type'

export const TextField: FC<ITextField> = ({
  type,
  placeholder,
  style,
  icon,
  callBackFn,
  autocomplete,
}: ITextField) => {
  const { push } = useRouter()
  const dispatch = useAppDispatch()
  return (
    <div className="relative w-full">
      <div className={`relative w-full ${style}`}>
        <input
          onChange={(e) => callBackFn(e.target.value)}
          onKeyPress={(event) => {
            if (event.key === 'Enter') push('/search')
          }}
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
      {autocomplete && (
        <div className="absolute w-full  bg-[#272727FF] mt-2 rounded-[8px]">
          <Link
            href="/search"
            className="px-4 py-2 w-full block transition-colors hover:bg-white/30 rounded-[8px]"
          >
            Test
          </Link>
        </div>
      )}
    </div>
  )
}
