import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import instance from "../../shared/Request";
const accessToken = localStorage.getItem("authorization");
const refreshToken = localStorage.getItem("refresh-Token");

export const __writePost = createAsyncThunk(
  "WRITE_POST",
  async (payload, thunkAPI) => {
    console.log(payload);
    try {
      const data = await instance.post("/api/businessCards", payload);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      console.log(error);
    }
  }
);
export const __imgPost = createAsyncThunk(
  "IMG_POST",
  async (payload, thunkAPI) => {
    console.log(payload);
    try {
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: accessToken,
          "Refresh-Token": refreshToken,
        },
      };
      const data = await axios.post(
        "https://bkyungkeem.shop/api/scan/cards",
        payload,
        config
      );
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      console.log(error);
    }
  }
);
export const __mainGet = createAsyncThunk(
  "VIEW_GET",
  async (payload, thunkAPI) => {
    console.log(payload);
    try {
      const data = await instance.get("/api/businessCards");
      console.log(data.data);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      console.log(error);
    }
  }
);
export const __searchGet = createAsyncThunk(
  "SEARCH_GET",
  async (payload, thunkAPI) => {
    console.log(payload);
    try {
      const data = await instance.post("/api/companySearch", payload);
      console.log(data.data);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      console.log(error);
    }
  }
);
export const __companyInfo = createAsyncThunk(
  "COMPANY_INFO",
  async (payload, thunkAPI) => {
    console.log(payload);
    try {
      const data = await instance.post("/api/companyInfo", payload);
      console.log(data.data);
      return thunkAPI.fulfillWithValue(data.data.data);
    } catch (error) {
      console.log(error);
    }
  }
);
export const __viewGet = createAsyncThunk(
  "VIEW_POST",
  async (payload, thunkAPI) => {
    console.log(payload);
    try {
      const data = await instance.get(`/api/businessCards/${payload}`);
      console.log(data.data);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      console.log(error);
    }
  }
);

export const __fixPost = createAsyncThunk(
  "FIX_POST",
  async (payload, thunkAPI) => {
    console.log(payload);
    try {
      const data = await instance.put(
        `/api/businessCards/${payload.id}`,
        payload
      );
      console.log(data.data);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      console.log(error);
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
  searchCompany: [{}],
  viewList: [{}],
  companyInfo: [{}],
};

export const CardsSlice = createSlice({
  name: "cardsReducer",
  initialState,
  reducers: {},
  extraReducers: {
    [__writePost.fulfilled]: (state, action) => {
      console.log(action.payload);
      state.list = [state.list, action.payload];
    },
    [__imgPost.fulfilled]: (state, action) => {
      console.log(action.payload.data);
      state.img = { ...action.payload };
    },
    [__mainGet.fulfilled]: (state, action) => {
      console.log(action.payload);
      state.list = { ...action.payload };
      console.log(state.list);
    },
    [__viewGet.fulfilled]: (state, action) => {
      console.log(action.payload);
      state.viewList = action.payload;
    },
    [__searchGet.fulfilled]: (state, action) => {
      console.log(action.payload);
      state.searchCompany = { ...action.payload };
    },
    [__companyInfo.fulfilled]: (state, action) => {
      console.log(action.payload);
      state.companyInfo = { ...action.payload };
    },

    [__fixPost.fulfilled]: (state, action) => {
      console.log(action.payload);
      state.list = [{ ...state.list }, action.payload];
    },
  },
});

export const {} = CardsSlice.actions;
export default CardsSlice.reducer;
