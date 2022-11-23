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
      const config = {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': localStorage.getItem('authorization'),
          'Refresh-Token': localStorage.getItem('refresh-Token')
        },
      };
      const { data } = await axios.put(`https://yusung.shop/api/comment/${payload.postId}/${payload.commentId}`,
        { content: payload.content }, config)
      return thunkAPI.fulfillWithValue(data.data)

    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
)

const initialState = {
  comments: [],
  comment: {},
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
      state.isLoading = false;
      state.comments = action.payload;
    },

    // 댓글 작성
    // payload : 단일 댓글
    [addComment.fulfilled]: (state, action) => {
      state.isLoading = false
      state.comments = [...state.comments, action.payload]
    },

    // 댓글 삭제
    // payload : 댓글 id
    [deleteComment.fulfilled]: (state, action) => {
      state.isLoading = false
      state.comments = state.comments.filter((comment) => comment.id !== action.payload)
    },


    // 댓글 수정
    [putComment.fulfilled]: (state, action) => {
      state.isLoading = false

      let modComment = action.payload;

      let newComment = [];

      for (let i = 0; i < state.comments.length; i++) {
        if (state.comments[i].id === modComment.id) {
          newComment.push(modComment);
        } else {
          newComment.push(state.comments[i]);
        }
      }
      state.comments = newComment;
    },
  },

})

export default commentSlice.reducer;