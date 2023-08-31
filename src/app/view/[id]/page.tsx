'use client'
import Image from 'next/image'
import { AiFillLike } from 'react-icons/ai'
import { BsFillPlayCircleFill } from 'react-icons/bs'
import { IconButton, kFormatter, useGetById } from '@/shared'

export default function Page(props: any) {
  const [data] = useGetById(props.params.id)
  return (
    <div className="lg:flex mt-4 md:mt-8">
      <div className="w-full lg:w-[70%]">
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
            <IconButton>
              <AiFillLike style={{ fontSize: '25px' }} />
            </IconButton>
            <p className="ml-1">{kFormatter(data?.likes)} лайк</p>
          </div>
        </div>
      </div>
      <div className="w-full text-sm md:text-[16px] lg:w-[30%] mt-4 lg:mt-0 lg:ml-4">
        <p>Похожие:</p>
      </div>
    </div>
  )
}
