import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import {
  getLocalStorage,
  IVideoType,
  setLocalStorage,
  useGetAll,
} from '@/shared'

const savesLocal = getLocalStorage('saves')
export const fetchVideoById = createAsyncThunk(
  'video/fetchById',
  async (id: number) => {
    const response = await axios.get<IVideoType>(
      `http://localhost:4200/videos/${id}`
    )
    return response.data
  }
)

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
    deleteToSaves: (state, { payload }) => {
      state.saves = state.saves.filter((video) => video.id !== payload.id)
      setLocalStorage('saves', state.saves)
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchVideoById.fulfilled, (state, { payload }) => {
      state.saves.push(payload)
      setLocalStorage('saves', state.saves)
    })
  },
})

export const { deleteToSaves } = saves.actions
