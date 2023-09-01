'use client'
import Image from 'next/image'
import { useEffect } from 'react'
import {
  AiFillLike,
  AiOutlineCloudDownload,
  AiOutlineDelete,
} from 'react-icons/ai'
import { BiDownArrowCircle } from 'react-icons/bi'
import { BsFillPlayCircleFill } from 'react-icons/bs'
import { toast, ToastContainer } from 'react-toastify'
import { addToSaves, deleteToSaves } from '@/app/store/slice'
import { CardSearch } from '@/entities'
import {
  IconButton,
  IVideoType,
  kFormatter,
  useAppDispatch,
  useAppSelector,
  useGetAll,
  useGetById,
} from '@/shared'

export default function Page(props: any) {
  const [data] = useGetById(props.params.id)
  const [dataAll] = useGetAll()
  const { saves } = useAppSelector((state) => state.saves)
  const isSave = saves.some(
    (video: IVideoType) => video.id === +props.params.id
  )
  const dispatch = useAppDispatch()
  const similar = dataAll
    .filter((video: IVideoType) => {
      return video.category === data.category
    })
    .filter((video: IVideoType) => video.id !== data.id)

  useEffect(() => {
    document.title = data?.title
  }, [data?.id])

  const notify = (title: string) =>
    toast(title, {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: false,
      rtl: false,
      theme: 'dark',
    })

  const addSaves = (type: 'save' | 'delete') => {
    if (type === 'save') {
      dispatch(addToSaves(data))
      notify('Успешно добавлено')
      return
    }

    dispatch(deleteToSaves(data))
    notify('Успешно удалено')
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
              {!isSave ? (
                <button onClick={() => addSaves('save')} className="mr-4">
                  <IconButton title="Сохранить" isPopup={true}>
                    <AiOutlineCloudDownload style={{ fontSize: '20px' }} />
                  </IconButton>
                </button>
              ) : (
                <button onClick={() => addSaves('delete')} className="mr-4">
                  <IconButton title="Удалить из сохроненое" isPopup={true}>
                    <AiOutlineDelete style={{ fontSize: '20px' }} />
                  </IconButton>
                </button>
              )}
              <IconButton isPopup={true} title="Понравится">
                <AiFillLike style={{ fontSize: '20px' }} />
              </IconButton>
              <p className="ml-1">{kFormatter(data?.likes)} лайк</p>
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
