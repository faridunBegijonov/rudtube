'use client'
import { useEffect, useRef, useState, UIEvent } from 'react'
import { fetchVideos } from '@/app/store/slice/getVideos'
import { FiltersBar } from '@/features'
import { Card } from '@/entities'
import { IVideoType, Skeleton, useAppDispatch, useAppSelector } from '@/shared'

export default function Home() {
  const { videos: data, status: isLoading } = useAppSelector(
    (state) => state.getVideos
  )
  const dispatch = useAppDispatch()
  const isStoppedFetchMore = useRef<boolean>(false)
  const pagination = useRef<number>(1)

  useEffect(() => {
    document.title = 'YouTube'
    dispatch(fetchVideos(pagination.current))
  }, [])

  const fetchMore = async (event: UIEvent<HTMLDivElement>) => {
    const { scrollHeight, scrollTop, clientHeight } =
      event.target as HTMLDivElement

    if (isStoppedFetchMore.current) {
      return
    }

    const scrollCoordinates = scrollHeight - (scrollTop + clientHeight)

    if (scrollCoordinates <= 100) {
      pagination.current += 1
      isStoppedFetchMore.current = true

      const { payload } = await dispatch(fetchVideos(pagination.current))
      if (Array.isArray(payload) && !payload.length) {
        isStoppedFetchMore.current = false
      }
    }
  }

  return (
    <div
      onScroll={fetchMore}
      className="overflow-y-scroll scroll-page p-4 h-screen pt-16 pb-4"
    >
      <FiltersBar />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-8 gap-4">
        {Array.isArray(data) &&
          data?.map((item: IVideoType) => {
            return <Card key={item.id} {...item} />
          })}
      </div>
    </div>
  )
}
