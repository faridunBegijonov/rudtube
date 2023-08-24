import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FC } from 'react'
import { IItemType } from '../type'

export const Item: FC<IItemType> = ({ href, title, Icon }: IItemType) => {
  const pathname = usePathname()
  return (
    <Link href={`${href}`}>
      <button
        className={`${
          pathname === href && 'bg-white/10'
        } flex w-full mb-2  items-center py-2 px-4 transition-colors hover:bg-white/10 rounded-[4px]`}
        type="button"
      >
        <i className="mr-3.5 text-[20px]">{<Icon />}</i>
        <span>{title} </span>
      </button>
    </Link>
  )
}
