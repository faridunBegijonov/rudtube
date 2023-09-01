'use client'
import { CardSearch } from '@/entities'
import { useAppSelector } from '@/shared'

export default function Page() {
  const { saves } = useAppSelector((state) => state.saves)
  return (
    <div className="md:mt-8 mt-4">
      <h1 className="font-bold text-xl mb-4">Сохраненные</h1>
      {saves.length === 0 ? (
        <p>Вы не добавили видео.... </p>
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
