import { configureStore } from '@reduxjs/toolkit'
import { getVideos } from '@/app/store/slice/getVideos'
import { saves, search } from './slice'

export const store = configureStore({
  reducer: {
    search: search.reducer,
    saves: saves.reducer,
    getVideos: getVideos.reducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
