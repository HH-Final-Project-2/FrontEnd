import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
//import instance from '../../shared/request';
import axios from 'axios';


const initialState = {
  members: [],
  isLoading: false,
  error: null,
};


// 회원가입
export const signUp = createAsyncThunk(
  "SIGNUP",
  async (payload) => {
    console.log(payload)
    try {
      await axios.post('http://13.124.142.195/api/member/signup', payload);
    } catch (error) {
    }
  }
);

// 로그인
export const signIn = createAsyncThunk(
  'SIGNIN',
  async (payload) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
      await axios.post('http://13.124.142.195/api/member/login', payload, config)
        .then((res) => {
          if (res.data.success) {
            localStorage.setItem('authorization', res.request.getResponseHeader('authorization'));
            localStorage.setItem('refresh-Token', res.request.getResponseHeader('refresh-Token'));
            alert('로그인 성공');
            window.location.replace('/');
          }
        }).catch(error => {
          alert("아이디와 비밀번호를 확인해주세요.");
        })
    } catch (error) {
    }
  }
);

// 로그아웃
export const signOut = createAsyncThunk(
  "SIGHNOUT",
  async (payload) => {
    console.log(payload)
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
          'authorization': localStorage.getItem('authorization'),
          'refresh-Token': localStorage.getItem('refresh-Token')
        },
      };
      await axios.post('http://13.124.142.195/api/auth/member/logout', payload, config)
        .then(() => {
          alert('로그아웃')
          localStorage.clear()
          window.location.replace('/login')
        })
    } catch (error) {
    }
  }
);

const memberSlice = createSlice({
  name: 'members',
  initialState,
  reducers: {},
  extraReducers: {},
});

export default memberSlice.reducer;