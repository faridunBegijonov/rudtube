import { configureStore } from '@reduxjs/toolkit'
import { saves, search, history, getVideos, likes } from './slice'

export const store = configureStore({
  reducer: {
    search: search.reducer,
    saves: saves.reducer,
    getVideos: getVideos.reducer,
    history: history.reducer,
    likes: likes.reducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
