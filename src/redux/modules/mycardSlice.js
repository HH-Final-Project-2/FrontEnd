import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const accessToken = localStorage.getItem("authorization");
const refreshToken = localStorage.getItem("refresh-Token");
//post
export const _MakeCard = createAsyncThunk(
  "post/card",
  async (payload, thunkAPI) => {
    try {
      // const data = await axios.post("http://localhost:3001/cardinfo",payload);
      const data = await axios.post(
        "https://bkyungkeem.shop/api/mypages",
        payload,
        {
          headers: {
            contentType: "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiIxIiwic3ViIjoiYWFhQG5hdmVyLmNvbSIsImF1dGgiOiJST0xFX01FTUJFUiIsImV4cCI6MTY2OTI5NjM4OX0.8L-0Zs-MjGUICUDtKimYx2Q4qs03j_AceS4dHtOlV8w",
            "Refresh-Token":
              "eyJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2Njk4MTQ3ODl9.ugKSjtj5lpDMXphCEIVTuSP1SyP-ZOdAhID43Y-pnRE",
          },
        }
      );
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {}
  }
);
//get
export const _getMakeCard = createAsyncThunk(
  "get/card",
  async (payload, thunkAPI) => {
    try {
      // const data = await axios.get("http://localhost:3001/cardinfo");
      // console.log(data.data)
      const { data } = await axios.get("https://bkyungkeem.shop/api/mypages", {
        headers: {
          contentType: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiIxIiwic3ViIjoiYWFhQG5hdmVyLmNvbSIsImF1dGgiOiJST0xFX01FTUJFUiIsImV4cCI6MTY2OTI5NjM4OX0.8L-0Zs-MjGUICUDtKimYx2Q4qs03j_AceS4dHtOlV8w",
          "Refresh-Token":
            "eyJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2Njk4MTQ3ODl9.ugKSjtj5lpDMXphCEIVTuSP1SyP-ZOdAhID43Y-pnRE",
        },
      });
      console.log(data.data);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {}
  }
);
//put
export const _PutCard = createAsyncThunk(
  "put/card",
  async (payload, thunkAPI) => {
    try {
      // const {data} = await axios.put(`http://localhost:3001/cardinfo/${payload.id}`,payload);
      const { data } = await axios.put(
        `https:/bkyungkeem.shop/api/mypages/${payload.id}`,
        payload,
        {
          headers: {
            contentType: "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiIxIiwic3ViIjoiYWFhQG5hdmVyLmNvbSIsImF1dGgiOiJST0xFX01FTUJFUiIsImV4cCI6MTY2OTI5NjM4OX0.8L-0Zs-MjGUICUDtKimYx2Q4qs03j_AceS4dHtOlV8w",
            "Refresh-Token":
              "eyJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2Njk4MTQ3ODl9.ugKSjtj5lpDMXphCEIVTuSP1SyP-ZOdAhID43Y-pnRE",
          },
        }
      );
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {}
  }
);
//검색
export const _searchGet = createAsyncThunk(
  "SEARCH_GET",
  async (payload, thunkAPI) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiIxIiwic3ViIjoiYWFhQG5hdmVyLmNvbSIsImF1dGgiOiJST0xFX01FTUJFUiIsImV4cCI6MTY2OTI5NjM4OX0.8L-0Zs-MjGUICUDtKimYx2Q4qs03j_AceS4dHtOlV8w",
          "Refresh-Token":
            "eyJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2Njk4MTQ3ODl9.ugKSjtj5lpDMXphCEIVTuSP1SyP-ZOdAhID43Y-pnRE",
        },
      };
      const data = await axios.post(
        "https://bkyungkeem.shop/api/companySearch",
        payload,
        config
      );
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      console.log(error);
    }
  }
);
//회사명, 주소 저장
export const _companyInfo = createAsyncThunk(
  "COMPANY_INFO",
  async (payload, thunkAPI) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiIxIiwic3ViIjoiYWFhQG5hdmVyLmNvbSIsImF1dGgiOiJST0xFX01FTUJFUiIsImV4cCI6MTY2OTI5NjM4OX0.8L-0Zs-MjGUICUDtKimYx2Q4qs03j_AceS4dHtOlV8w",
          "Refresh-Token":
            "eyJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2Njk4MTQ3ODl9.ugKSjtj5lpDMXphCEIVTuSP1SyP-ZOdAhID43Y-pnRE",
        },
      };
      const { data } = await axios.post(
        "https://bkyungkeem.shop/api/companyInfo",
        payload,
        config
      );
      console.log(data.data);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      console.log(error);
    }
  }
);
const initialState = {
  cardinfo: [
    {
      cardName: "",
      engName: "",
      email: "",
      phoneNum: "",
      company: "",
      companyAddress: "",
      department: "",
      position: "",
      tel: "",
      fax: "",
    },
  ],
  companyInfo: [{}],
  searchCompany: [{}],
  isLoading: false,
  error: null,
};
export const mycardSlice = createSlice({
  name: "cardinfo", //모듈
  initialState,
  reducers: {},
  extraReducers: {
    [_MakeCard.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.cardinfo = action.payload;
    },
    [_getMakeCard.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.cardinfo = action.payload;
    },
    [_PutCard.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.cardinfo = [{ ...state.cardinfo }, action.payload];
    },
    [_searchGet.fulfilled]: (state, action) => {
      console.log(action.payload);
      state.searchCompany = { ...action.payload };
    },
    [_companyInfo.fulfilled]: (state, action) => {
      console.log(action.payload);
      state.companyInfo = { ...action.payload };
    },
  },
});
export const {} = mycardSlice.actions;
export default mycardSlice.reducer;
