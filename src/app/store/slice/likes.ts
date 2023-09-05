import { createSlice } from '@reduxjs/toolkit'
import { getLocalStorage, IVideoType, setLocalStorage } from '@/shared'

const likesLocal = getLocalStorage('likes')

interface IInitialState {
  likes: IVideoType[]
}

const initialState: IInitialState = {
  likes: likesLocal ? likesLocal : [],
}

export const likes = createSlice({
  name: 'likes',
  initialState,
  reducers: {
    addToLikes: (state, { payload }) => {
      const isLike = state.likes.some((video) => video.id === payload.id)
      if (!isLike) {
        state.likes.push(payload)
        setLocalStorage('likes', state.likes)
      }
    },
  },
})

export const { addToLikes } = likes.actions
