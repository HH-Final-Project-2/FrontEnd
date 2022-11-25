import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import instance from '../../shared/Request';

//게시글 상세 조회
export const getCommentList = createAsyncThunk(
  'GETCOMMENTLIST',
  async (payload, thunkAPI) => {
    try {
      const { data } = await instance.get(`/api/posting/${payload}`);
      return thunkAPI.fulfillWithValue(data.data.commentResponseDtoList);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// 댓글 작성
export const addComment = createAsyncThunk(
  'ADDCOMMENT',
  async (payload, thunkAPI) => {
    try {
      const { data } = await instance.post(
        `/api/comment/${payload.postId}`,
        payload
      );
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// 댓글 삭제
export const deleteComment = createAsyncThunk(
  'DELETECOMMENT',
  async (payload, thunkAPI) => {
    try {
      await instance.delete(
        `/api/comment/${payload.postId}/${payload.commentId}`
      );
      return thunkAPI.fulfillWithValue(payload.commentId);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// 댓글 수정
export const putComment = createAsyncThunk(
  'PUTCOMMENT',
  async (payload, thunkAPI) => {
    try {
      const { data } = await instance.put(
        `/api/comment/${payload.postId}/${payload.commentId}`,
        { content: payload.content }
      );
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const initialState = {
  comments: [
    {
      author: '',
      commentHeartCnt: '',
      content: '',
      createdAt: '',
      id: 0,
      modifiedAt: '',
    },
  ],
  comment: {},
  isLoading: false,
  error: null,
};

export const commentSlice = createSlice({
  name: 'comments',
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
      state.isLoading = false;
      state.comments = [...state.comments, action.payload];
    },

    // 댓글 삭제
    // payload : 댓글 id
    [deleteComment.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.comments = state.comments.filter(
        (comment) => comment.id !== action.payload
      );
    },

    // 댓글 수정
    [putComment.fulfilled]: (state, action) => {
      state.isLoading = false;

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
});

export default commentSlice.reducer;
