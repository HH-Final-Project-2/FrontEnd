import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


// 게시글 검색
export const __searchPost = createAsyncThunk(
  'search/searchPost',
  async (payload, thunkAPI) => {
    try {
      const { data } = await axios.get(
        `https://yusung.shop/api/posting/search?keyword=${payload}`
      );
      return thunkAPI.fulfillWithValue(data.data);
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
      const { data } = await axios.get('https://yusung.shop/api/posting');
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// 게시글 상세 조회
export const __getPost = createAsyncThunk(
  'post/getPost',
  async (payload, thunkAPI) => {
    try {
      const { data } = await axios.get(
        `https://yusung.shop/api/posting/${payload}`
      );
      return thunkAPI.fulfillWithValue(data.data);
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
      const { data } = await axios.post(
        'https://yusung.shop/api/posting',
        payload,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
            authorization: localStorage.getItem('authorization'),
            'refresh-Token': localStorage.getItem('refresh-Token'),
          },
        }
      );
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
        `https://yusung.shop/api/posting/${payload.id}`,
        payload.formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
            authorization: localStorage.getItem('authorization'),
            'refresh-Token': localStorage.getItem('refresh-Token'),
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
      const { data } = await axios.delete(`https://yusung.shop/api/posting/${payload}`, {
        headers: {
          //'Content-Type': 'multipart/form-data',
          'Content-Type': 'application/json',
          authorization: localStorage.getItem('authorization'),
          'refresh-Token': localStorage.getItem('refresh-Token'),
        },
      });
      console.log(data)
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
  },

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
      state.isLoading = false;
      state.post = [action.payload, ...state.post];
    },


    //게시글 수정
    [__putPost.fulfilled]: (state, action) => {
      state.isLoading = false;

      // 게시글 수정 응답 수신 후 게시글 목록으로 돌아간다
      // 게시글 목록 PostList 컴포넌트가 다시 렌더링 되려면 state.post를 수정해야한다.

      // 1. 게시글 id 확인
      // let id = action.payload.id;

      // 1.1. 수정된 게시글
      let modPost = action.payload;

      // 2. 새로 저장할 게시글 배열 생성
      //    불변성 때문에 state.post[수정된게시글]을 수정하면 렌더링이 안된다.
      let newPosts = [];

      // 3. for 루프를 이용, state.post를 반복(iteration)한다
      for (let i = 0; i < state.post.length; i++) {
        if (state.post[i].id === modPost.id)
          // 수정된 게시글 id와 동일하다. 새로 전송받은 게시글 객체로 저장
          newPosts.push(modPost);
        else
          // 수정된 게시글 id와 다르다. 기존 데이터 저장
          newPosts.push(state.post[i]);
      }

      // 4. state.post를 새로 만든 배열로 변경 시켜준다
      state.post = newPosts;

    },

    [__deletePost.fulfilled]: (state, action) => {
      state.isLoading = false;
      // console.log(state.post.length)
      state.post = state.post.filter((postList) => postList.id !== action.payload)
    },

  },
});

export const { } = PostSlice.actions;
export default PostSlice.reducer;
