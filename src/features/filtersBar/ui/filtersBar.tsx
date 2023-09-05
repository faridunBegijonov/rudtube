import axios from 'axios'
import { FC, useEffect, useState } from 'react'
import { useQuery } from 'react-query'
import { filterVideo } from '@/app/store/slice/getVideos'
import { filter, IVideoType, useAppDispatch } from '@/shared'
import { IFiltersBarType } from '../type'

export const FiltersBar: FC<IFiltersBarType> = ({}) => {
  const URL = 'http://localhost:4200'
  const { data, isLoading } = useQuery<IVideoType[]>('getAll', async () => {
    const res = await axios.get<IVideoType[]>(`${URL}/videos`)
    return res.data
  })
  const dispatch = useAppDispatch()
  const [category, setCategory] = useState('Все')
  const categories: string[] = ['Все']
  if (Array.isArray(data)) {
    data?.forEach((video: IVideoType) => {
      if (!categories.includes(video.category)) {
        categories.push(video.category)
      }
    })
  }

  const filtersVideo = filter(
    Array.isArray(data) ? data : ([] as IVideoType[]),
    category
  )

  useEffect(() => {
    dispatch(filterVideo(filtersVideo))
  }, [category])

  return (
    <div className="flex items-center flex-wrap">
      {categories.map((categoryItem: string) => {
        return (
          <span
            onClick={() => {
              setCategory(categoryItem)
            }}
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
