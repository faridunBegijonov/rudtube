import { createSlice } from '@reduxjs/toolkit'

interface ISearch {
  value: string
}

const initialState: ISearch = {
  value: '',
}

export const search = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setValueStore: (state, { payload }) => {
      state.value = payload
    },
    getValueStore: (state) => {
      state.value
    },
  },
})
export const { setValueStore, getValueStore } = search.actions
