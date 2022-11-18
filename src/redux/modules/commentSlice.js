import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


//게시글 상세 조회
export const getCommentList = createAsyncThunk(
  'GETCOMMENTLIST',
  async (payload, thunkAPI) => {
    try {
      const { data } = await axios.get(
        `https://yusung.shop/api/posting/${payload}`
      );
      return thunkAPI.fulfillWithValue(data.data.commentResponseDtoList);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);


// 댓글 작성
export const addComment = createAsyncThunk(
  "ADDCOMMENT",
  async (payload, thunkAPI) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
          'authorization': localStorage.getItem('authorization'),
          'refresh-Token': localStorage.getItem('refresh-Token')
        },
      };
      const { data } = await axios.post(`https://yusung.shop/api/comment/${payload.postId}`, payload, config)
      return thunkAPI.fulfillWithValue(data.data)
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
);

// 댓글 삭제
export const deleteComment = createAsyncThunk(
  "DELETECOMMENT",
  async (payload, thunkAPI) => {

    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
          'authorization': localStorage.getItem('authorization'),
          'refresh-Token': localStorage.getItem('refresh-Token')
        },
      };
      await axios.delete(`https://yusung.shop/api/comment/${payload.postId}/${payload.commentId}`, config)
      return thunkAPI.fulfillWithValue(payload.commentId)
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
)

// 댓글 수정
export const putComment = createAsyncThunk(
  "PUTCOMMENT",
  async (payload, thunkAPI) => {
    try {
      const { data } = await axios.put(`https://yusung.shop/api/${payload.postingId}/comment/${payload.id}`, payload)
      return thunkAPI.fulfillWithValue(data)
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
)

const initialState = {
  comments: [],
  isLoading: false,
  error: null,
}

export const commentSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {},
  extraReducers: {

    // 게시글 상세 조회용
    // payload : 댓글 배열
    [getCommentList.fulfilled]: (state, action) => {
      //console.log('슬라이스', action.payload)
      state.comments = action.payload
      state.isLoading = false;
    },

    // 댓글 작성
    // payload : 단일 댓글
    [addComment.fulfilled]: (state, action) => {
      state.isLoading = false
      state.comments = [action.payload, ...state.comments]
    },

    // 댓글 삭제
    // payload : 댓글 id
    [deleteComment.fulfilled]: (state, action) => {
      state.isLoading = false
      state.comments = state.comments.filter((comment) => comment.id !== action.payload)
    },


    // 댓글 수정
    // [__addComment.pending]: (state) => {
    //   state.isLoading = true
    // },

    // [__addComment.fulfilled]: (state, action) => {

    //   state.isLoading = false
    //   state.comments = action.payload

    // },

    // [__addComment.rejected]: (state, action) => {
    //   state.isLoading = false
    //   state.error = action.payload
    // },








  },

})

export default commentSlice.reducer;