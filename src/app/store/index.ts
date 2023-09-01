import { configureStore } from '@reduxjs/toolkit'
import { saves, search } from './slice'

export const store = configureStore({
  reducer: {
    search: search.reducer,
    saves: saves.reducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
