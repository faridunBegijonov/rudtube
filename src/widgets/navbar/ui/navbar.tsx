import Link from 'next/link'
import { FC, useState } from 'react'
import { FaUser } from 'react-icons/fa'
import { FaBarsStaggered } from 'react-icons/fa6'
import { IoCreate } from 'react-icons/io5'
import { IconButton, TextField } from '@/shared'
import { INavbarType } from '../type'

export const Navbar: FC<INavbarType> = ({ callBackFn }: INavbarType) => {
  const [value, setValue] = useState<string>('')
  const [showSideBar, setShowSideBar] = useState<boolean>(true)

  const handleToggle = () => {
    setShowSideBar((prev) => !prev)
    callBackFn()
  }
  const callBackTextField = (value: string) => {
    setValue(value)
  }
  return (
    <nav
      className={`flex items-center justify-between ${
        showSideBar ? 'ml-auto' : 'w-full'
      }`}
    >
      <div onClick={() => handleToggle()}>
        <IconButton style="w-[40px] h-[40px]">
          <FaBarsStaggered style={{ fontSize: '20px' }} />
        </IconButton>
      </div>
      <TextField
        callBackFn={(value) => callBackTextField(value)}
        style="md:w-[550px] ml-4 md:mr-0"
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
        <Link href="/profile">
          <IconButton
            style="mx-4 w-[40px] h-[40px]"
            isPopup={true}
            title="Профиль"
          >
            <FaUser style={{ fontSize: '20px' }} />
          </IconButton>
        </Link>
      </div>
    </nav>
  )
}
