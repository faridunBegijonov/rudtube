'use client'
import Image from 'next/image'
import { useEffect } from 'react'
import { AiFillLike } from 'react-icons/ai'
import { BiDownArrowCircle } from 'react-icons/bi'
import { BsFillPlayCircleFill } from 'react-icons/bs'
import { toast, ToastContainer } from 'react-toastify'
import { addToSaves } from '@/app/store/slice'
import { CardSearch } from '@/entities'
import {
  IconButton,
  IVideoType,
  kFormatter,
  useAppDispatch,
  useGetAll,
  useGetById,
} from '@/shared'

export default function Page(props: any) {
  const [data] = useGetById(props.params.id)

  const [dataAll] = useGetAll()

  const dispatch = useAppDispatch()

  const similar = dataAll
    .filter((video: IVideoType) => {
      return video.category === data.category
    })
    .filter((video: IVideoType) => video.id !== data.id)

  useEffect(() => {
    document.title = data?.title
  }, [data?.id])

  const notify = () =>
    toast('Успешно добавлено', {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: false,
      rtl: false,
      theme: 'dark',
    })

  const addSaves = () => {
    dispatch(addToSaves(data))
    notify()
  }
  return (
    <>
      <div className="lg:flex mt-4 md:mt-8">
        <div className="w-full lg:w-[60%]">
          <div className="cursor-pointer relative">
            <Image
              src={data?.img || ''}
              alt={data?.title || ''}
              width={800}
              height={750}
              className="w-full rounded-[4px]"
            />
            <div className="absolute top-0 left-0 bottom-0 right-0 bg-black/50 flex items-center justify-center">
              <BsFillPlayCircleFill
                className="animate-ping"
                style={{ fontSize: '45px' }}
              />
            </div>
          </div>
          <h1 className="font-bold text-[18px] md:text-[20px] my-1 md:my-2">
            {data?.title}
          </h1>
          <div className="flex items-center justify-between">
            <p className="text-sm md:text-[16px]">
              {kFormatter(data?.view)} просмотров
            </p>
            <div className="flex items-center">
              <IconButton isPopup={true} title="Понравится">
                <AiFillLike style={{ fontSize: '20px' }} />
              </IconButton>
              <p className="ml-1">{kFormatter(data?.likes)} лайк</p>
              <button onClick={addSaves} className="ml-4">
                Сохранить
              </button>
            </div>
          </div>
          <h2 className="text-white/70">Каментари....</h2>
        </div>
        <div className="w-full text-sm md:text-[16px] lg:w-[40%] mt-4 lg:mt-0 lg:ml-4">
          <button className="font-bold text-[25px] mb-4">Похожие</button>
          {similar.length === 0 ? (
            <p>Нет похожих видео....</p>
          ) : (
            similar?.map((video: IVideoType) => {
              return (
                <div key={video.id} className="mb-2 last:mb-0">
                  <CardSearch {...video} />
                </div>
              )
            })
          )}
        </div>
      </div>
      <ToastContainer />
    </>
  )
}
