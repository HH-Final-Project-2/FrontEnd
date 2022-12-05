import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import instance from "../../shared/Request";

// 댓글 조회
export const getCommentList = createAsyncThunk(
  "GETCOMMENTLIST",
  async (payload, thunkAPI) => {
    try {
      const { data } = await instance.get(`/api/comment/${payload}`);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// 댓글 좋아요
export const likeComment = createAsyncThunk(
  'likeComment',
  async (payload, thunkAPI) => {
    try {
      const { data } = await instance.post(`/api/auth/comment/heart/${payload}`);
      return thunkAPI.fulfillWithValue({ data, payload });
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
  "DELETECOMMENT",
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
  "PUTCOMMENT",
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
      id: 0,
      commentHeartCnt: 0,
      commentHeartYn: false,
      content: '',
      createdAt: '',
      modifiedAt: '',
      author: ''
    }
  ],
  comment: {
    id: 0,
    commentHeartCnt: 0,
    commentHeartYn: false,
    content: '',
    createdAt: '',
    modifiedAt: '',
    author: ''
  },
  isLoading: false,
  error: null,
};

export const commentSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {},
  extraReducers: {
    // 댓글 조회
    // payload : 댓글 배열
    [getCommentList.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.comments = action.payload;
    },

    // 댓글 좋아요
    [likeComment.fulfilled]: (state, action) => {
      state.isLoading = false;

      let commentId = action.payload.payload;
      let commentHeartYn = action.payload.data.data;
      let newComments = [];

      state.comments.map((comment) => {
        newComments.push(comment);
        if (comment.id === commentId) {
          comment.commentHeartYn = commentHeartYn;
          comment.commentHeartCnt += comment.commentHeartYn ? 1 : -1;
        }
      });
      state.comments = newComments;
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
      state.isLoading = true;
    },
  },
});

export default commentSlice.reducer;
