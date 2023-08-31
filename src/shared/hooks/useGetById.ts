import axios from 'axios'
import { useEffect } from 'react'
import { useQuery } from 'react-query'
import { IVideoType } from '@/shared'
const URL = 'http://localhost:4200'

export const useGetById = (
  id: number
): [data: IVideoType, isLoading: boolean] => {
  const { data, isLoading, refetch } = useQuery<IVideoType>(
    'getById',
    async () => {
      const res = await axios.get<IVideoType>(`${URL}/videos/${id}`)
      return res.data
    }
  )
  useEffect(() => {
    refetch()
  }, [id])
  if (!data) {
    return [{} as IVideoType, false]
  }
  return [data, isLoading]
}
