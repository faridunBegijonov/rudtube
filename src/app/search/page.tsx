'use client'
import axios from 'axios'
import { useEffect } from 'react'
import { useQuery } from 'react-query'
import { CardSearch } from '@/entities'
import { filterByTitle, IVideoType, useAppSelector } from '@/shared'

export default function Page() {
  const URL = 'http://localhost:4200/'
  const { data, isLoading } = useQuery<IVideoType[]>('getAll', async () => {
    const res = await axios.get<IVideoType[]>(`${URL}/videos`)
    return res.data
  })
  const { value } = useAppSelector((state) => state.search)
  const searchVideo = filterByTitle(Array.isArray(data) ? data : [], value)

  useEffect(() => {
    document.title = 'YouTube'
  }, [])
  return (
    <div className="my-4 pt-16 p-4">
      {searchVideo.length === 0 || value.length === 0 ? (
        <span>Нечего не найдено....</span>
      ) : (
        Array.isArray(searchVideo) &&
        value.length !== 0 &&
        searchVideo?.map((video: IVideoType) => {
          return (
            <div key={video.id} className="mb-2 last:mb-0">
              <CardSearch {...video} />
            </div>
          )
        })
      )}
    </div>
  )
}
