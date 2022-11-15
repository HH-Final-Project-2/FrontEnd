import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

//기본 세팅
const initialState = {
  post: [
    {
      id: 0,
      nickname: '',
      직군: '',
      title: '',
      content: '',
      hitNum: '',
      heartNum: '',
      commentNum: '',
      image: '',
      createdAt: '',
      modifiedAt: '',
    },
  ],
  detail: {
    id: 0,
    nickname: '',
    직군: '',
    title: '',
    content: '',
    hitNum: '',
    heartNum: '',
    commentNum: '',
    image: '',
    createdAt: '',
    modifiedAt: '',
  },

  isLoading: false,
  error: null,
};

// 게시글 전체 조회
export const __getPostAll = createAsyncThunk(
  'post/getPostAll',
  async (payload, thunkAPI) => {
    try {
      const { data } = await axios.get('http://localhost:3001/post');
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// 게시글 상세 조회
export const __getPost = createAsyncThunk(
  'post/getPost',
  async (payload, thunkAPI) => {
    try {
      const { data } = await axios.get(`http://localhost:3001/post/${payload}`);
      // if (!data.success) throw new Error(data.error);
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// 게시글 작성
export const __writePost = createAsyncThunk(
  'post/writePost',
  async (payload, thunkAPI) => {
    try {
      const { data } = await axios.post('http://localhost:3001/post', payload);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// 게시글 수정
export const __putPost = createAsyncThunk(
  'post/putPost',
  async (payload, thunkAPI) => {
    try {
      const { data } = await axios.put(
        `http://localhost:3001/post/${payload.id}`,
        {
          title: payload.title,
          content: payload.content,
          image: payload.image,
        }
      );
      return thunkAPI.fulfillWithValue();
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
      const { data } = await axios.delete(
        `http://localhost:3001/post/${payload.id}`
      );
      return thunkAPI.fulfillWithValue();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const PostSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {},
  extraReducers: {
    //게시글 전체 조회
    [__getPostAll.pending]: (state, action) => {
      state.isLoading = true; // 네트워크 요청이 시작되면 로딩상태를 true로 변경합니다.
    },
    [__getPostAll.fulfilled]: (state, action) => {
      state.isLoading = false; // 네트워크 요청이 끝났으니, false로 변경합니다.
      state.post = [...action.payload]; // Store에 있는 todos에 서버에서 가져온 todos를 넣습니다.
    },
    [__getPostAll.rejected]: (state, action) => {
      state.isLoading = false; // Store에 있는 todos에 서버에서 가져온 todos를 넣습니다.
      state.error = action.payload; // catch 된 error 객체를 state.error에 넣습니다.
    },

    //게시글 상세 조회
    [__getPost.pending]: (state, action) => {
      state.isLoading = true;
    },
    [__getPost.fulfilled]: (state, action) => {
      state.detail = action.payload;
      state.isLoading = false;
    },
    [__getPost.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    //게시글 작성
    [__writePost.pending]: (state, action) => {
      state.isLoading = true;
    },
    [__writePost.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.postAll.push(action.payload);
    },
    [__writePost.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    //게시글 수정
    [__putPost.pending]: (state, action) => {
      state.isLoading = true;
    },
    [__putPost.fulfilled]: (state, action) => {
      state.isLoading = false;
    },
    [__putPost.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    //게시글 삭제
    [__deletePost.pending]: (state, action) => {
      state.isLoading = true;
    },
    [__deletePost.fulfilled]: (state, action) => {
      state.isLoading = false;
    },
    [__deletePost.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const {} = PostSlice.actions;
export default PostSlice.reducer;
