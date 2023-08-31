import { FC, useState } from 'react'
import { IVideoType, useGetAll } from '@/shared'
import { IFiltersBarType } from '../type'

export const FiltersBar: FC<IFiltersBarType> = ({ category, callBackFn }) => {
  const [data] = useGetAll()
  const categories: string[] = ['Все']
  if (Array.isArray(data)) {
    data?.forEach((video: IVideoType) => {
      if (!categories.includes(video.category)) {
        categories.push(video.category)
      }
    })
  }

  return (
    <div className="flex items-center flex-wrap">
      {categories.map((categoryItem: string) => {
        return (
          <span
            onClick={() => callBackFn(categoryItem)}
            key={categoryItem}
            className={`${
              categoryItem === category
                ? 'bg-white text-black hover:bg-white font-bold'
                : 'text-white hover:bg-white/20'
            } px-4 py-2 rounded-[8px] block mt-2 transition-colors cursor-pointer select-none bg-[#272727FF] mr-2 last:mr-0`}
          >
            {categoryItem}
          </span>
        )
      })}
    </div>
  )
}
