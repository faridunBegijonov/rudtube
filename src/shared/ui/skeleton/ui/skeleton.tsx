import Image from 'next/image'
import { FC } from 'react'

export const Skeleton: FC = () => {
  return (
    <div
      className={`w-full overflow-hidden rounded-[6px] bg-white/30 lg:h-[200px] xl:h-[231px]`}
    />
  )
}
