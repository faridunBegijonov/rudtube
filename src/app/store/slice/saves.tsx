import { createSlice } from '@reduxjs/toolkit'
import { IVideoType } from '@/shared'

interface ISaves {
  saves: IVideoType[]
}

const initialState: ISaves = {
  saves: [],
}

export const saves = createSlice({
  name: 'saves',
  initialState,
  reducers: {
    addToSaves: (state, { payload }) => {
      const isVideo = state.saves.some((video) => video.id === payload.id)
      if (!isVideo) {
        state.saves.push(payload)
      }
    },
    deleteToSaves: (state, { payload }) => {
      state.saves = state.saves.filter((video) => video.id !== payload.id)
    },
  },
})

export const { addToSaves, deleteToSaves } = saves.actions
