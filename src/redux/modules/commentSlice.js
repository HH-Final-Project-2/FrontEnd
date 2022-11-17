import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  comments: [
    {
      id: 0,
      comment: '',
    }
  ],
  isLoading: false,
  error: null,
}

// 댓글 조회
export const getComments = createAsyncThunk(
  "GETCOMMENT",
  async (payload, thunkAPI) => {
    try {
      const { data } = await axios.get('http://localhost:3001/comments')
      return thunkAPI.fulfillWithValue(data)
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
);


// 댓글 작성
export const addComment = createAsyncThunk(
  "ADDCOMMENT",
  async (payload, thunkAPI) => {
    console.log(payload)
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
          'authorization': localStorage.getItem('authorization'),
          'refresh-Token': localStorage.getItem('refresh-Token')
        },
      };
      const { data } = await axios.post(`https://yusung.shop/api/comment/${payload.postingId}`, payload, config)

      return thunkAPI.fulfillWithValue(data)

    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
);

// 댓글 수정
export const __putComment = createAsyncThunk(
  "PUT_POST_DETAIL",
  async (payload, thunkAPI) => {
    console.log(payload)
    try {
      const { data } = await axios.put(`http://localhost:3001/comments/${payload.id}`, payload)
      return thunkAPI.fulfillWithValue(data)
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
)

// 댓글 삭제
export const deleteComment = createAsyncThunk(
  "DELETE_Comment",
  async (payload, thunkAPI) => {
    try {
      await axios.delete(`http://localhost:3001/comments/${payload}`)
      return thunkAPI.fulfillWithValue(payload)
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
)

export const commentSlice = createSlice({ // 리듀서를 만들어주는 역할
  name: "comments", // 모듈이름
  initialState, // 초기상태값
  reducers: {}, // 자동으로 만들어지는 리듀서
  extraReducers: { // 직접 커스텀으로 만드는 리듀서

    // 댓글 조회
    [getComments.pending]: (state) => {
      state.isLoading = true
    },

    [getComments.fulfilled]: (state, action) => {

      state.isLoading = false
      state.comments = action.payload

    },

    [getComments.rejected]: (state, action) => {
      state.isLoading = false
      state.error = action.payload
    },

    // 댓글 작성
    [addComment.pending]: (state) => {
      state.isLoading = true
    },

    [addComment.fulfilled]: (state, action) => {
      console.log(action.payload)
      state.isLoading = false
      state.comments = [...state.comments, action.payload]

    },

    [addComment.rejected]: (state, action) => {
      state.isLoading = false
      state.error = action.payload
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

    // 댓글 삭제
    [deleteComment.pending]: (state) => {
      state.isLoading = true
    },

    [deleteComment.fulfilled]: (state, action) => {
      state.comments = state.comments.filter((comment) => comment.id !== action.payload)

    },

    [deleteComment.rejected]: (state, action) => {
      state.isLoading = false
      state.error = action.payload
    },

  },

})

export default commentSlice.reducer;