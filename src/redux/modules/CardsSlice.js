import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import instance from "../../shared/Request";
const accessToken = localStorage.getItem("authorization");
const refreshToken = localStorage.getItem("refresh-Token");

export const __writePost = createAsyncThunk(
  "WRITE_POST",
  async (payload, thunkAPI) => {
    try {
      const data = await instance.post("/api/businessCards", payload);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
    }
  }
);
export const __imgPost = createAsyncThunk(
  "IMG_POST",
  async (payload, thunkAPI) => {
    try {
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: accessToken,
          "Refresh-Token": refreshToken,
        },
      };
      const data = await axios.post(
        "https://bkyungkeem.shop/api/upload/img",
        payload,
        config
      );

      return thunkAPI.fulfillWithValue(data.data.data);
    } catch (error) {

    }
  }
);
export const __mainGet = createAsyncThunk(
  "VIEW_GET",
  async (payload, thunkAPI) => {
    try {
      const data = await instance.get("/api/businessCards");
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
    }
  }
);
export const __searchGet = createAsyncThunk(
  "SEARCH_GET",
  async (payload, thunkAPI) => {
    try {
      const data = await instance.post(
        `/api/companySearch/?keyword=${payload}`
      );
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
    }
  }
);
export const __CardSearchGet = createAsyncThunk(
  "SEARCH_CARD",
  async (payload, thunkAPI) => {
    try {
      const data = await instance.get(
        `/api/search/businessCards/?keyword=${payload}`
      );
      return thunkAPI.fulfillWithValue(data.data.data);
    } catch (error) {
    }
  }
);
export const __cardInfo = createAsyncThunk(
  "DEFAULT_CARD",
  async (payload, thunkAPI) => {
    try {
      const data = await instance.post(`/api/cardInfo`, payload);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
    }
  }
);
export const __companyInfo = createAsyncThunk(
  "COMPANY_INFO",
  async (payload, thunkAPI) => {
    try {
      const data = await instance.post("/api/companyInfo", payload);
      return thunkAPI.fulfillWithValue(data.data.data);
    } catch (error) {
    }
  }
);
export const __viewGet = createAsyncThunk(
  "VIEW_POST",
  async (payload, thunkAPI) => {
    try {
      const data = await instance.get(`/api/businessCards/${payload}`);
      return thunkAPI.fulfillWithValue(data.data.data);
    } catch (error) {
    }
  }
);

export const __fixPost = createAsyncThunk(
  "FIX_POST",
  async (payload, thunkAPI) => {
    try {
      const data = await instance.put(
        `/api/businessCards/${payload.id}`,
        payload
      );
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
    }
  }
);

const initialState = {
  list: [
    {
      name: "",
      email: "",
      phoneNum: "",
      department: "",
      position: "",
      tel: "",
      fax: "",
      company: "",
      companyAddress: "",
      companyType: "",
    },
  ],
  img: [
    {
      email: "",
      phoneNum: "",
      tel: "",
      fax: "",
      imgUrl: "",
    },
  ],
  defaultCard: [
    {
      name: "",
      email: "",
      phoneNum: "",
      department: "",
      position: "",
      tel: "",
      fax: "",
      companyType: "",
    },
  ],
  searchCompanyInfo: [{}],
  searchCard: undefined,
  viewList: [{}],
  companyInfo: [{}],
};

export const CardsSlice = createSlice({
  name: "cardsReducer",
  initialState,
  reducers: {},
  extraReducers: {
    [__writePost.fulfilled]: (state, action) => {
      state.list = [state.list, action.payload];
    },
    [__imgPost.fulfilled]: (state, action) => {
      state.img = action.payload;
    },
    [__mainGet.fulfilled]: (state, action) => {
      state.list = { ...action.payload };
    },
    [__viewGet.fulfilled]: (state, action) => {
      state.viewList = action.payload;
    },
    [__searchGet.fulfilled]: (state, action) => {
      state.searchCompanyInfo = { ...action.payload };
    },
    [__CardSearchGet.fulfilled]: (state, action) => {
      state.searchCard = action.payload;
    },
    [__cardInfo.fulfilled]: (state, action) => {
      state.defaultCard = action.payload;
    },
    [__companyInfo.fulfilled]: (state, action) => {
      state.companyInfo = action.payload;
    },
    [__fixPost.fulfilled]: (state, action) => {
      state.list = [{ ...state.list }, action.payload];
    },
  },
});

export const { } = CardsSlice.actions;
export default CardsSlice.reducer;
