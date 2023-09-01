'use client'
import { useEffect, useState } from 'react'
import { useQuery } from 'react-query'
import { FiltersBar } from '@/features'
import { Card } from '@/entities'
import { IVideoType, useGetAll } from '@/shared'

export default function Home() {
  const [data, isLoading] = useGetAll()
  const [category, setCategory] = useState<string>('Все')

  useEffect(() => {
    document.title = 'YouTube'
  }, [])

  const handleCategory = (category: string) => {
    setCategory(category)
  }

  const filtersVideo = () => {
    if (Array.isArray(data)) {
      if (category === 'Все') return data
      return data?.filter((video: IVideoType) => {
        return video.category === category
      })
    }
  }

  return (
    <div className="mt-2 mb-4">
      <FiltersBar category={category} callBackFn={handleCategory} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-8 gap-4">
        {Array.isArray(filtersVideo()) &&
          filtersVideo()?.map((item: IVideoType) => {
            return <Card key={item.id} {...item} />
          })}
      </div>
    </div>
  )
}
