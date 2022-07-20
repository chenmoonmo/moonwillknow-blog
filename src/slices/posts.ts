import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import { getPostsList } from 'api'

interface PostState {
  isLoading: boolean
  list: any[]
}

const initialState: PostState = {
  isLoading: false,
  list: [],
}

export const getpostsListData = createAsyncThunk('posts/getPosts', getPostsList)

export const postSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getpostsListData.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(getpostsListData.fulfilled, (state, action) => {
      state.list = action.payload.data
      state.isLoading = false
    })
  },
})

export default postSlice.reducer
