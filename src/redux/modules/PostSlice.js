import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import instance from '../../shared/Request';
const accessToken = localStorage.getItem('authorization');
const refreshToken = localStorage.getItem('refresh-Token');


// 인기 게시글 top5
export const topFivePost = createAsyncThunk(
  'topfive/topFivePost',
  async (payload, thunkAPI) => {
    try {
      const { data } = await instance.get('/api/posting/five');
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {

    }
  }
);

// 좋아요순 정렬
export const heartSort = createAsyncThunk(
  'heart/heartSort',
  async (payload, thunkAPI) => {
    try {
      const { data } = await instance.get('/api/posting/hearts');
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {

    }
  }
);

// 조회순 정렬
export const hitsSort = createAsyncThunk(
  'sort/viewSort',
  async (payload, thunkAPI) => {
    try {
      const { data } = await instance.get('/api/posting/hits');
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {

    }
  }
);

// 게시글 검색
export const __searchPost = createAsyncThunk(
  'search/searchPost',
  async (payload, thunkAPI) => {
    try {
      const { data } = await instance.get(
        `/api/posting/search?keyword=${payload}`
      );
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {

    }
  }
);

// 게시글 좋아요
export const __likePost = createAsyncThunk(
  'post/likePost',
  async (payload, thunkAPI) => {
    try {
      const { data } = await instance.post(`/api/auth/post/heart/${payload}`);
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// 게시글 전체 조회
export const __getPostAll = createAsyncThunk(
  'posts/getPostAll',
  async (payload, thunkAPI) => {
    try {
      const { data } = await instance.get('/api/posting');
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {

    }
  }
);

// 게시글 상세 조회
export const __getPost = createAsyncThunk(
  'post/getPost',
  async (payload, thunkAPI) => {
    try {
      const { data } = await instance.get(`/api/posting/${payload}`);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {

    }
  }
);

// 게시글 작성
export const __writePost = createAsyncThunk(
  'post/writePost',
  async (payload, thunkAPI) => {
    try {
      const { data } = await axios.post('https://bkyungkeem.shop/api/posting', payload, {
        headers: {
          'Content-Type': 'multipart/form-data',
          authorization: accessToken,
          'refresh-Token': refreshToken,
        },
      });
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {

    }
  }
);

// 게시글 수정
export const __putPost = createAsyncThunk(
  'post/putPost',
  async (payload, thunkAPI) => {
    try {
      const { data } = await axios.put(
        `https://bkyungkeem.shop/api/posting/${payload.id}`,
        payload.formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
            authorization: accessToken,
            'refresh-Token': refreshToken,
          },
        }
      );
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

//게시글 삭제
export const __deletePost = createAsyncThunk(
  'post/deletePost',
  async (payload, thunkAPI) => {
    try {
      const { data } = await instance.delete(`/api/posting/${payload}`);
      return thunkAPI.fulfillWithValue(payload);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

//기본 세팅
const initialState = {
  post: [
    {
      id: 0,
      author: '',
      jobGroup: '',
      title: '',
      content: '',
      hit: '',
      postHeartCnt: '',
      commentCnt: '',
      image: '',
      createdAt: '',
      modifiedAt: '',
    },
  ],
  detail: {
    id: 0,
    author: '',
    jobGroup: '',
    title: '',
    content: '',
    hit: '',
    postHeartCnt: '',
    commentCnt: '',
    image: '',
    createdAt: '',
    modifiedAt: '',
    like: false,
  },
  postTopFive: [
    {
      id: 0,
      author: '',
      jobGroup: '',
      title: '',
      content: '',
      hit: '',
      postHeartCnt: '',
      commentCnt: '',
      image: '',
      createdAt: '',
      modifiedAt: '',
    },
  ],
  isLoading: false,
  error: null,
};

export const PostSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {},
  extraReducers: {
    //게시글 검색
    [__searchPost.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.post = action.payload;
    },

    // 인기글 top5
    [topFivePost.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.postTopFive = action.payload;
    },

    // 조회순 정렬
    [hitsSort.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.post = action.payload;
    },
    // 좋아요순 정렬
    [heartSort.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.post = action.payload;
    },

    //게시글 전체 조회
    [__getPostAll.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.post = action.payload;
    },

    //게시글 상세 조회
    [__getPost.fulfilled]: (state, action) => {
      state.detail = action.payload;
      state.isLoading = false;
    },

    //게시글 작성
    [__writePost.fulfilled]: (state, action) => {
      state.isLoading = true;
      state.post = [action.payload, ...state.post];
    },

    // 게시글 삭제
    [__deletePost.fulfilled]: (state, action) => {
      state.isLoading = true;
      state.post = state.post.filter(
        (postList) => postList.id !== action.payload
      );

    },

    //게시글 수정
    [__putPost.fulfilled]: (state, action) => {
      state.isLoading = true;
      state.detail = action.payload;
    },


  },
});

export const { } = PostSlice.actions;
export default PostSlice.reducer;
