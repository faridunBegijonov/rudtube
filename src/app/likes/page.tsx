'use client'
import { useEffect } from 'react'
import { CardSearch } from '@/entities'
import { useAppSelector } from '@/shared'

export default function Page() {
  const { likes } = useAppSelector((state) => state.likes)

  useEffect(() => {
    document.title = 'YouTube'
  }, [])
  return (
    <div className="md:mt-8 p-4 md:pt-8 pt-14 mt-4">
      <h1 className="font-bold text-xl mb-4">Понравился</h1>
      {likes.length === 0 ? (
        <p>Вы не поставили лайк на видео.... </p>
      ) : (
        likes.map((video) => {
          return (
            <div key={video.id} className="mb-4 last:mb-0">
              <CardSearch {...video} />
            </div>
          )
        })
      )}
    </div>
  )
}
