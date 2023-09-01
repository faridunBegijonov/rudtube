import { FC } from 'react'
import { BsYoutube } from 'react-icons/bs'
import { FaUser } from 'react-icons/fa'
import { FaBarsStaggered } from 'react-icons/fa6'
import { IoCreate } from 'react-icons/io5'
import { IconButton } from '@/shared'
import { sidebarModel } from '../model'
import { ISidebarType } from '../type'
import { Item } from './item'

export const Sidebar: FC<ISidebarType> = ({
  isShow,
  callBackFn,
}: ISidebarType) => {
  const width = window.innerWidth
  return (
    <aside
      className={`${
        isShow && 'w-[80%] md:w-[40%] lg:w-[30%] xl:w-[20%]'
      } fixed left-0 top-0 bottom-0 z-40 bg-[#0f0f0fff] md:overflow-auto overflow-y-scroll`}
    >
      {isShow && (
        <div className="w-full p-4 h-screen">
          <div className="flex my-4 px-4 items-center justify-between">
            <div className="flex items-center">
              <BsYoutube style={{ fontSize: '35px' }} />
              <p className="ml-2 text-md font-bold">RudTube</p>
            </div>
            {width <= 1024 && (
              <div onClick={callBackFn}>
                <IconButton style="w-[40px] h-[40px]">
                  <FaBarsStaggered style={{ fontSize: '20px' }} />
                </IconButton>
              </div>
            )}
          </div>
          {sidebarModel.map((item) => {
            return (
              <div
                key={item.href}
                onClick={() => (width <= 1024 ? callBackFn : null)}
              >
                <Item {...item} />
              </div>
            )
          })}
          {width <= 600 && (
            <div>
              <div onClick={callBackFn}>
                <Item href="/create" title="Создать" Icon={IoCreate} />
              </div>
            </div>
          )}
          <div className="h-[1px] w-full bg-white/10" />
          <p className="px-4 text-sm text-white/50 my-4">
            О сервисе Прессе Авторские права Связаться с нами Авторам
            Рекламодателям Разработчикам
          </p>
          <p className="px-4 text-sm text-white/50">
            Условия использования Конфиденциальность Правила и безопасность Как
            работает YouTube Тестирование новых функций
          </p>
        </div>
      )}
    </aside>
  )
}
