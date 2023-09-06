import { FC, useState } from 'react'
import { FaBarsStaggered } from 'react-icons/fa6'
import { IoCreate } from 'react-icons/io5'
import { setValueStore } from '@/app/store/slice'
import { CreateVideo } from '@/features'
import { IconButton, Modal, TextField, useAppDispatch } from '@/shared'
import { INavbarType } from '../type'

export const Navbar: FC<INavbarType> = ({ callBackFn }: INavbarType) => {
  const [value, setValue] = useState<string>('')
  const [showSideBar, setShowSideBar] = useState<boolean>(true)
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false)
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
      className={`flex fixed px-4 py-3 w-full xl:w-[80%] top-0 left-0 right-0 z-30 bg-[#0f0f0fff] items-center pr-2 md:justify-between ${
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
        style="md:w-[550px] md:ml-4 xl:ml-0 md:mr-0"
        icon={true}
        type="search"
        placeholder="Введите запрос"
      />
      <div className="hidden sm:flex items-center">
        <div onClick={() => setIsOpenModal(true)}>
          <IconButton style="w-[40px] h-[40px]" isPopup={true} title="Создать">
            <IoCreate style={{ fontSize: '20px' }} />
          </IconButton>
        </div>
      </div>
      <Modal
        title="Добавить видео"
        isOpen={isOpenModal}
        onClose={() => setIsOpenModal((prev) => !prev)}
        childrenModal={
          <CreateVideo callBack={() => setIsOpenModal((prev) => !prev)} />
        }
        width="w-full md:w-[600px]"
      />
    </nav>
  )
}
