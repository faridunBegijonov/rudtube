import Link from 'next/link'
import { FC, useState } from 'react'
import { FaBarsStaggered } from 'react-icons/fa6'
import { IoCreate } from 'react-icons/io5'
import { setValueStore } from '@/app/store/slice'
import { IconButton, TextField, useAppDispatch } from '@/shared'
import { INavbarType } from '../type'

export const Navbar: FC<INavbarType> = ({ callBackFn }: INavbarType) => {
  const [value, setValue] = useState<string>('')
  const [showSideBar, setShowSideBar] = useState<boolean>(true)
  const width = window.innerWidth
  const dispatch = useAppDispatch()

  const handleToggle = () => {
    setShowSideBar((prev) => !prev)
    callBackFn()
  }
  const callBackTextField = (value: string) => {
    setValue(value)
    dispatch(setValueStore(value))
  }

  return (
    <nav
      className={`flex items-center pr-2 md:justify-between ${
        showSideBar ? 'ml-auto' : 'w-full'
      }`}
    >
      {width <= 1024 && (
        <div onClick={() => handleToggle()}>
          <IconButton style="w-[40px] h-[40px]">
            <FaBarsStaggered style={{ fontSize: '20px' }} />
          </IconButton>
        </div>
      )}
      <TextField
        callBackFn={(value) => callBackTextField(value)}
        style="md:w-[550px] ml-2 md:ml-4 xl:ml-0 md:mr-0"
        icon={true}
        type="search"
        placeholder="Введите запрос"
      />
      <div className="hidden sm:flex items-center">
        <Link href="/create">
          <IconButton style="w-[40px] h-[40px]" isPopup={true} title="Создать">
            <IoCreate style={{ fontSize: '20px' }} />
          </IconButton>
        </Link>
      </div>
    </nav>
  )
}
