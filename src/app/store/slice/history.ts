import { createSlice } from '@reduxjs/toolkit'
import { getLocalStorage, IVideoType, setLocalStorage } from '@/shared'

const historyLocal = getLocalStorage('history')

interface IInitialState {
  history: IVideoType[]
}

const initialState: IInitialState = {
  history: historyLocal ? historyLocal : [],
}
export const history = createSlice({
  name: 'history',
  initialState,
  reducers: {
    addToHistory: (state, { payload }) => {
      const isHistory = state.history.some((video) => video.id === payload.id)
      if (!isHistory) {
        state.history.push(payload)
        setLocalStorage('history', state.history)
      }
    },

    deleteToHistory: (state) => {
      state.history = []
      setLocalStorage('history', [])
    },
  },
})

export const { addToHistory, deleteToHistory } = history.actions
