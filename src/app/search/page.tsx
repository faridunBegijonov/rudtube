'use client'
import { useEffect } from 'react'
import { CardSearch } from '@/entities'
import { filterByTitle, IVideoType, useAppSelector, useGetAll } from '@/shared'

export default function Page() {
  const [data, isLoading] = useGetAll()
  const { value } = useAppSelector((state) => state.search)
  const searchVideo = filterByTitle(Array.isArray(data) ? data : [], value)

  useEffect(() => {
    document.title = 'YouTube'
  }, [])
  return (
    <div className="my-4 pt-16 p-4">
      {searchVideo.length === 0 ? (
        <span>Нечего не найдено....</span>
      ) : (
        Array.isArray(searchVideo) &&
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
