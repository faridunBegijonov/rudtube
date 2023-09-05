import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'
import { IVideoType } from '@/shared'

interface IInitialState {
  videos: IVideoType[]
  status: boolean
  error: null | string
}

const initialState: IInitialState = {
  videos: [],
  status: false,
  error: null,
}

export const fetchVideos = createAsyncThunk(
  'videos/getVideos',
  async (page: number) => {
    const response = await axios.get<IVideoType>(
      `http://localhost:4200/videos?_page=${page}&_limit=15`
    )
    return response.data
  }
)

export const getVideos = createSlice({
  name: 'getVideos',
  initialState,
  reducers: {
    resetVideos: (state) => {
      state.videos = []
    },
    filterVideo: (state, { payload }) => {
      state.videos = payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchVideos.pending, (state) => {
        state.status = true
        state.error = null
      })
      .addCase(fetchVideos.fulfilled, (state, { payload }) => {
        if (Array.isArray(payload)) {
          state.videos = [...state.videos, ...payload]
          state.status = false
        }
      })
  },
})

export const { resetVideos, filterVideo } = getVideos.actions
