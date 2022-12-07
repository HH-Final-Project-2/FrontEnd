import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import instance from "../../shared/Request";
import Swal from "sweetalert2";

const initialState = {
  members: [],
  isLoading: false,
  error: null,
  check: [
    {
      success: "",
      data: "",
      error: "",
    },
  ],
  pwCheck: [
    {
      success: "",
      data: "",
      error: "",
    },
  ],
  auth: [
    {
      success: "",
      data: "",
      error: "",
    },
  ],
};

// 이메일 중복체크
export const emailCheck = createAsyncThunk(
  "SIGNUP",
  async (payload, thunkAPI) => {
    try {
      const data = await axios.post(
        "https://bkyungkeem.shop/api/mail/auth",
        payload
      );
      // 사용가능한 이메일 alert
      if (data.data.success === true)
        return (
          Swal.fire({
            text: data.data.data,
            showConfirmButton: false,
            timer: 1000,
            width: "300px",
          }),
          thunkAPI.fulfillWithValue(data.data)
        );

      // 중복되는 이메일 alert
      if (data.data.success === false)
        Swal.fire({
          text: data.data.error.message,
          showConfirmButton: false,
          timer: 1000,
          width: "300px",
        });
    } catch (error) {}
  }
);

// 패스워드찾기 이메일 중복체크
export const passwordCheck = createAsyncThunk(
  "PASSWORD_CHECK",
  async (payload, thunkAPI) => {
    try {
      const data = await axios.post(
        "https://bkyungkeem.shop/api/mail/pw",
        payload
      );
      console.log(data);
      // 사용가능한 이메일 alert
      if (data.data.success === true)
        return (
          Swal.fire({
            text: data.data.data,
            showConfirmButton: false,
            timer: 1000,
            width: "300px",
          }),
          thunkAPI.fulfillWithValue(data.data)
        );

      // 중복되는 이메일 alert
      if (data.data.success === false)
        Swal.fire({
          text: data.data.error.message,
          showConfirmButton: false,
          timer: 1000,
          width: "300px",
        });
    } catch (error) {}
  }
);

// 패스워드찾기 수정 요청
export const passwordFind = createAsyncThunk(
  "PASSWORD_FIND",
  async (payload, thunkAPI) => {
    try {
      const data = await axios.put(
        "https://bkyungkeem.shop/api/change/pw",
        payload
      );
      console.log(data);
      // 사용가능한 이메일 alert
      if (data.data.success === true)
        return (
          Swal.fire({
            text: data.data.data,
            showConfirmButton: false,
            timer: 1000,
            width: "300px",
          }),
          thunkAPI.fulfillWithValue(data.data)
        );

      // 중복되는 이메일 alert
      if (data.data.success === false)
        Swal.fire({
          text: data.data.error.message,
          showConfirmButton: false,
          timer: 1000,
          width: "300px",
        });
    } catch (error) {}
  }
);
// 이메일 인증
export const emailAuth = createAsyncThunk(
  "AUTH_EMAIL",
  async (payload, thunkAPI) => {
    try {
      const data = await axios.post(
        "https://bkyungkeem.shop/api/mail/confirm",
        payload
      );
      // 사용가능한 이메일 alert
      if (data.data.success === true)
        return (
          Swal.fire({
            text: data.data.data,
            showConfirmButton: false,
            timer: 1000,
            width: "300px",
          }),
          thunkAPI.fulfillWithValue(data.data)
        );

      // 중복되는 이메일 alert
      if (data.data.success === false)
        Swal.fire({
          text: data.data.error.message,
          showConfirmButton: false,
          timer: 1000,
          width: "300px",
        });
    } catch (error) {}
  }
);

// 회원가입
export const signUp = createAsyncThunk("SIGNAUTH", async (payload) => {
  try {
    await axios.post("https://bkyungkeem.shop/api/members/signup", payload);

    Swal.fire({
      text: "회원가입을 축하드립니다",
      showConfirmButton: false,
      timer: 1000,
      width: "300px",
    });
    window.location.replace("/login");
  } catch (error) {}
});

// 로그인

export const signIn = createAsyncThunk("SIGNIN", async (payload, thunkAPI) => {
  try {
    await axios
      .post("https://bkyungkeem.shop/api/members/login", payload)
      .then((res) => {
        // 로그인 성공
        if (res.data.success) {
          localStorage.setItem(
            "authorization",
            res.request.getResponseHeader("authorization")
          );
          localStorage.setItem(
            "refresh-Token",
            res.request.getResponseHeader("refresh-Token")
          );
          localStorage.setItem("userid", res.data.data.id);
          localStorage.setItem("nickname", res.data.data.nickname);

          Swal.fire({
            text: "Businus에 오신걸 환영합니다",
            showCancelButton: false,
            confirmButtonColor: "#5546FF",
            confirmButtonText: "확인",
            width: "300px",
          }).then((result) => {
            if (result.isConfirmed) {
              window.location.replace("/cards");
            }
          });

          // Swal.fire({
          //   text: 'Businus에 오신걸 환영합니다', showConfirmButton: false,
          //   timer: 1000,
          //   width: '300px',
          //   height: '300px'
          // });
        }
        // 이메일 확인
        if (res.data.error.httpStatus === 404)
          Swal.fire({
            text: res.data.error.message,
            showConfirmButton: false,
            timer: 1000,
            width: "300px",
          });

        // // 비밀번호 확인
        if (res.data.error.httpStatus === 400)
          Swal.fire({
            text: res.data.error.message,
            showConfirmButton: false,
            timer: 1000,
            width: "300px",
          });
      });

  } catch (error) {
    console.log(error);
  }
});

// 로그아웃
export const signOut = createAsyncThunk("SIGHNOUT", async (payload) => {
  try {
    await instance.post("/api/members/logout", payload);
    localStorage.clear();
    window.location.replace("/login");
  } catch (error) {}
});

// 회원탈퇴
export const withDraw = createAsyncThunk("WITHDRAW", async () => {
  try {
    await instance.delete("/api/members/withdraw");
    Swal.fire({
      text: "회원탈퇴 되었습니다",
      showConfirmButton: false,
      timer: 1000,
      width: "300px",
    });

    localStorage.clear();
    window.location.replace("/login");
  } catch (error) {}
});

const memberSlice = createSlice({
  name: "members",
  initialState,
  reducers: {},
  extraReducers: {
    [signIn.fulfilled]: (state, action) => {
      console.log(action.payload)
      state.members = action.payload
    },


    [emailCheck.fulfilled]: (state, action) => {
      state.check = action.payload.success;
    },
    [passwordCheck.fulfilled]: (state, action) => {
      console.log(action.payload);
      state.pwCheck = action.payload.success;
    },
    [emailAuth.fulfilled]: (state, action) => {
      state.auth = action.payload;
    },
  },
});
export const {} = memberSlice.actions;
export default memberSlice.reducer;
