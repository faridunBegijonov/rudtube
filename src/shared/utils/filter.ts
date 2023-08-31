import { IVideoType } from '@/shared'

export const filter = (arr: IVideoType[], value: string) => {
  return arr.filter((movie) => movie.category === value)
}

export const filterByTitle = (arr: IVideoType[], title: string) => {
  return arr.filter((video: IVideoType) => {
    return (
      video.title.toLowerCase().includes(title.toLowerCase()) ||
      video.category.toLowerCase().includes(title.toLowerCase())
    )
  })
}
