import axios from 'axios'
import { useQuery } from 'react-query'
import { IVideoType } from '@/shared'
const URL = 'http://localhost:4200'

export const useGetAll = () => {
  const { data, isLoading } = useQuery<IVideoType[]>('getAll', async () => {
    const res = await axios.get(`${URL}/videos`)
    return res.data
  })
  return [data, isLoading]
}
