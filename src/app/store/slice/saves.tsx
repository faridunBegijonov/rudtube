import { createSlice } from '@reduxjs/toolkit'
import { getLocalStorage, IVideoType, setLocalStorage } from '@/shared'

const savesLocal = getLocalStorage('saves')

interface ISaves {
  saves: IVideoType[]
}

const initialState: ISaves = {
  saves: savesLocal ? savesLocal : [],
}

export const saves = createSlice({
  name: 'saves',
  initialState,
  reducers: {
    addToSaves: (state, { payload }) => {
      const isVideo = state.saves.some((video) => video.id === payload.id)
      if (!isVideo) {
        state.saves.push(payload)
        setLocalStorage('saves', state.saves)
      }
    },
    deleteToSaves: (state, { payload }) => {
      state.saves = state.saves.filter((video) => video.id !== payload.id)
      setLocalStorage('saves', state.saves)
    },
  },
})

export const { addToSaves, deleteToSaves } = saves.actions
