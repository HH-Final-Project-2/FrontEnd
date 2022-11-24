import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import instance from "../../shared/Request";

const initialState = {
  members: [],
  isLoading: false,
  error: null,
};

// 이메일 중복체크
export const emailCheck = createAsyncThunk("SIGNUP", async (payload) => {
  try {
    await axios
      .post('https://bkyungkeem.shop/api/members/check', payload)
      .then((res) => {
        // 사용가능한 이메일 alert
        if (res.data.success === true) alert(res.data.data);

        // 중복되는 이메일 alert
        if (res.data.success === false) alert(res.data.error.message);
      });
  } catch (error) {}
});

// 회원가입
export const signUp = createAsyncThunk("SIGNUP", async (payload) => {
  try {
    await axios.post('https://bkyungkeem.shop/api/members/signup', payload);
    alert('회원가입 성공');
    window.location.replace('/login');
  } catch (error) {}
});

// 로그인

export const signIn = createAsyncThunk("SIGNIN", async (payload) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    await axios
      .post('https://bkyungkeem.shop/api/members/login', payload, config)
      .then((res) => {
        // 로그인 성공
        if (res.data.success) {
          localStorage.setItem(
            'authorization',
            res.request.getResponseHeader('authorization')
          );
          localStorage.setItem(
            'refresh-Token',
            res.request.getResponseHeader('refresh-Token')
          );
          localStorage.setItem('nickname', res.data.data.nickname);
          alert('로그인 성공');
          window.location.replace('/');
        }
        // 이메일 확인
        if (res.data.error.httpStatus === 404) alert(res.data.error.message);

      // // 비밀번호 확인
      if (res.data.error.httpStatus === 400) alert(res.data.error.message);
    });
  } catch (error) {
    console.log(error);
  }
});

// 로그아웃
export const signOut = createAsyncThunk("SIGHNOUT", async (payload) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
        authorization: localStorage.getItem('authorization'),
        'refresh-Token': localStorage.getItem('refresh-Token'),
      },
    };
    await axios.post('https://bkyungkeem.shop/api/members/logout', payload, config);

    localStorage.clear();
    window.location.replace("/login");
  } catch (error) {}
});

// 회원탈퇴
export const withDraw = createAsyncThunk("WITHDRAW", async () => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
        authorization: localStorage.getItem('authorization'),
        'refresh-Token': localStorage.getItem('refresh-Token'),
      },
    };
    await axios.delete('https://bkyungkeem.shop/api/members/withdraw', config);
    localStorage.clear();
    window.location.replace("/login");
  } catch (error) {}
});

const memberSlice = createSlice({
  name: "members",
  initialState,
  reducers: {},
  extraReducers: {},
});

export default memberSlice.reducer;
