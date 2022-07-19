import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { getPostsList } from "api";

interface PostState {
  list: any[];
}

const initialState: PostState = {
  list: [],
};

export const getpostsListData = createAsyncThunk("posts/getPosts", getPostsList);

export const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getpostsListData.fulfilled, (state, action) => {
      state.list = action.payload.data;
    });
  },
});


export default postSlice.reducer;
