import Image from 'next/image'
import { FC } from 'react'
import img from '../../../../../public/assets/inna.webp'

export const Skeleton: FC = () => {
  return (
    <div
      className={`w-full overflow-hidden rounded-[6px] bg-white/30 h-[211px]`}
    >
      <Image
        src={img}
        alt="Img"
        className="rounded-[6px] w-full h-full"
        width={376}
        height={211}
      />
    </div>
  )
}
