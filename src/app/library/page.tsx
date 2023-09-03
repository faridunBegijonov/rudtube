'use client'
import { useEffect } from 'react'
import { CardSearch } from '@/entities'
import { IVideoType, useAppSelector, useGetAll } from '@/shared'

export default function Page() {
  const { saves } = useAppSelector((state) => state.saves)

  useEffect(() => {
    document.title = 'YouTube'
  }, [])
  return (
    <div className="md:mt-8 p-4 pt-10 mt-4">
      <h1 className="font-bold text-xl mb-4">Сохраненные</h1>
      {saves.length === 0 ? (
        <p>Вы не сохранили видео.... </p>
      ) : (
        saves.map((video) => {
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
