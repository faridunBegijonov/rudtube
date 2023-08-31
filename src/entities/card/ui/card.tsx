import Image from 'next/image'
import Link from 'next/link'
import { FC, useState } from 'react'
import { BsFillPlayCircleFill } from 'react-icons/bs'
import { IVideoType, kFormatter } from '@/shared'

export const Card: FC<IVideoType> = ({
  id,
  title,
  img,
  view,
  likes,
  category,
}: IVideoType) => {
  const [cover, setCover] = useState(false)
  return (
    <Link
      onMouseOver={() => setCover(true)}
      onMouseOut={() => setCover(false)}
      href={`/view/${id}`}
    >
      <div className="relative">
        <Image
          src={img || ''}
          alt={title}
          width={300}
          height={250}
          className="w-full rounded-[4px]"
        />
        {cover && (
          <div className="absolute top-0 left-0 bottom-0 right-0 bg-black/50 flex items-center justify-center">
            <BsFillPlayCircleFill style={{ fontSize: '45px' }} />
          </div>
        )}
      </div>
      <p className="font-bold mt-2 test-lg text-white">{title}</p>
      <span className="text-white/50">{category}:</span>
      <span className=" text-white/50 mx-1">{kFormatter(view)} просмотров</span>
      <span className=" text-white/50 mx-1">{kFormatter(likes)} лайк</span>
    </Link>
  )
}
