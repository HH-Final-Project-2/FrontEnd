import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import instance from "../../shared/Request";
const accessToken = localStorage.getItem("authorization");
const refreshToken = localStorage.getItem("refresh-Token");
//post
export const _MakeCard = createAsyncThunk(
  "post/card",
  async (payload, thunkAPI) => {
    try {
      const data = await axios.post(
        "https://bkyungkeem.shop/api/mypages",
        payload,
        {
          headers: {
            contentType: "application/json",
            Authorization:accessToken,
            "Refresh-Token":refreshToken
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
      const { data } = await axios.get("https://bkyungkeem.shop/api/mypages", {
        headers: {
          contentType: "application/json",
          Authorization: accessToken,
          "Refresh-Token": refreshToken,
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
      const { data } = await axios.put(
        `https:/bkyungkeem.shop/api/mypages/${payload.id}`,
        payload,
        {
          headers: {
            contentType: "application/json",
            Authorization: accessToken,
          "Refresh-Token": refreshToken,

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
          Authorization: accessToken,
          "Refresh-Token": refreshToken,
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
          Authorization: accessToken,
          "Refresh-Token": refreshToken,
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

//프로필 get
export const _getProfile = createAsyncThunk(
  "get/card",
  async (payload, thunkAPI) => {
    try {
      const { data } = await axios.get("https://api/members/profiles", {
        headers: {
          contentType: "application/json",
          Authorization: accessToken,
          "Refresh-Token": refreshToken,
        },
      });
      console.log(data);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {}
  }
);
//프로필 put
export const _PutPorfile = createAsyncThunk(
  "put/card",
  async (payload, thunkAPI) => {
    try {
      const { data } = await axios.put(
        `https://api/members/profiles/${payload.id}`,
        payload,
        {
          headers: {
            contentType: "application/json",
            Authorization: accessToken,
          "Refresh-Token": refreshToken,

          },
        }
      );
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {}
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
  userprofile:[{}],
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
    [_getProfile.fulfilled]: (state, action) => {
      console.log(action.payload);
      state.companyInfo = action.payload;
    },

  },
});
export const {} = mycardSlice.actions;
export default mycardSlice.reducer;
