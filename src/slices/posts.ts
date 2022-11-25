import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { getPostsList } from 'api';

import { uniq } from 'lodash';

interface PostState {
  isLoading: boolean;
  list: any[];
  tags: string[];
  // posts: {
  //   [id: keyof any]: any;
  // };
}

const initialState: PostState = {
  isLoading: false,
  list: [],
  tags: [],
  // posts: {},
};

export const getPostsListData = createAsyncThunk('posts/getPosts', getPostsList);
// export const getPostDetailData = createAsyncThunk('posts/getPostDetail', getPostDetail);

export const postSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getPostsListData.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getPostsListData.fulfilled, (state, action) => {
      // state.list = action.payload.data.map((item) => {
      //   item.cover = item?.cover ? defaultMapImageUrl(item?.cover, item) : '';
      //   return item;
      // });
      state.list = action.payload.data;
      state.tags = action.payload.data?.reduce((pre, cur) => {
        if (cur.tags) {
          pre.push(...cur.tags);
          pre = uniq(pre);
        }
        return pre;
      }, []);
      state.isLoading = false;
    });
    // builder.addCase(getPostDetailData.fulfilled, (state, action) => {
    //   state.posts[action.meta.arg] = action.payload.data;
    // });
  },
});

export default postSlice.reducer;
