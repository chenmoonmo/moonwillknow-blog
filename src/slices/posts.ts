import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { getPostsList } from "api";

import {uniq} from 'lodash'

interface PostState {
  isLoading: boolean;
  list: any[];
  tags: string[];
}

const initialState: PostState = {
  isLoading: false,
  list: [],
  tags: [],
};

export const getpostsListData = createAsyncThunk(
  "posts/getPosts",
  getPostsList
);

export const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getpostsListData.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getpostsListData.fulfilled, (state, action) => {
      state.list = action.payload.data;
      state.tags = action.payload.data?.reduce((pre, cur) => {
        if (cur.tags) {
          pre.push(...cur.tags)
          pre = uniq(pre)
        }
        return pre
      }, [])
      state.isLoading = false;
    });
  },
});

export default postSlice.reducer;
