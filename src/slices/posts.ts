import { createSlice } from "@reduxjs/toolkit";

interface PostState {}

const initialState: PostState = {};

export const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {

  }
});


export default postSlice.reducer