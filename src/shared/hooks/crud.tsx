import axios from 'axios'
import { useMutation } from 'react-query'
import { IVideoType } from '@/shared'
const URL = 'http://localhost:4200'

export const useCreate = (data: IVideoType) => {
  return useMutation({
    mutationFn: () => {
      return axios.post(`${URL}/videos`, data)
    },
  })
}

export const usePatch = (id: number, data: IVideoType) => {
  return useMutation({
    mutationFn: () => {
      return axios.patch(`${URL}/videos/${id}`, {
        ...data,
        view: data.view,
      })
    },
  })
}
