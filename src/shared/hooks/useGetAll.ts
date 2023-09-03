import axios from 'axios'
import { useQuery } from 'react-query'
import { IVideoType } from '@/shared'
const URL = 'http://localhost:4200'

export const useGetAll = (): [data: IVideoType[], isLoading: boolean] => {
  const { data, isLoading } = useQuery<IVideoType[]>('getAll', async () => {
    const res = await axios.get<IVideoType[]>(`${URL}/videos`)
    return res.data
  })
  if (!Array.isArray(data)) {
    return [[] as IVideoType[], isLoading]
  }
  return [data, isLoading]
}
