import Image from 'next/image'
import Link from 'next/link'
import { FC, useState } from 'react'
import { BsFillPlayCircleFill } from 'react-icons/bs'
import { IVideoType, kFormatter } from '@/shared'

export const CardSearch: FC<IVideoType> = ({
  id,
  view,
  likes,
  category,
  img,
  title,
}: IVideoType) => {
  const [cover, setCover] = useState(false)
  return (
    <Link
      onMouseOver={() => setCover(true)}
      onMouseOut={() => setCover(false)}
      href={`/view/${id}`}
      className="md:flex items-center"
    >
      <div className="relative">
        <Image
          src={img || ''}
          alt={title}
          width={300}
          height={250}
          className="md:w-[300px] w-full rounded-[4px]"
        />
        {cover && (
          <div className="absolute top-0 left-0 bottom-0 right-0 bg-black/50 flex items-center justify-center">
            <BsFillPlayCircleFill style={{ fontSize: '45px' }} />
          </div>
        )}
      </div>
      <div className="md:ml-4 mt-4 md:mt-0 md:w-[50%]">
        <p className="font-bold mt-2 test-lg text-white">{title}</p>
        <span className="text-white/50">{category}:</span>
        <span className=" text-white/50 mx-1">
          {kFormatter(view)} просмотров
        </span>
        <span className=" text-white/50 mx-1">{kFormatter(likes)} лайк</span>
      </div>
    </Link>
  )
}
