'use client'
import { useEffect } from 'react'
import { deleteToHistory } from '@/app/store/slice'
import { CardSearch } from '@/entities'
import { Button, useAppDispatch, useAppSelector } from '@/shared'

export default function Page() {
  const { history } = useAppSelector((state) => state.history)
  const dispatch = useAppDispatch()
  useEffect(() => {
    document.title = 'YouTube'
  }, [])
  return (
    <div className="md:mt-8 p-4 md:pt-8 pt-14 mt-4">
      <div className="md:flex items-center justify-between mb-4">
        <h1 className="font-bold text-xl mb-4">История</h1>
        <Button
          style="w-full md:w-[200px]"
          onClick={() => dispatch(deleteToHistory())}
          disabled={history.length === 0 && true}
        >
          Очистить историю
        </Button>
      </div>
      {history.length === 0 ? (
        <p>Вы не смотрели видео.... </p>
      ) : (
        history.map((video) => {
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
