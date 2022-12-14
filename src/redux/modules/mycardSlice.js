import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import instance from "../../shared/Request";

//post
export const _MakeCard = createAsyncThunk(
  "post/card",
  async (payload, thunkAPI) => {
    try {
      const data = await instance.post("/api/mypages", payload);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {}
  }
);
//get
export const _getMakeCard = createAsyncThunk(
  "get/card",
  async (payload, thunkAPI) => {
    try {
      const { data } = await instance.get("/api/mypages");
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {}
  }
);
//put
export const _PutCard = createAsyncThunk(
  "put/card",
  async (payload, thunkAPI) => {
    try {
      const { data } = await instance.put(
        `/api/mypages/${payload.id}`,
        payload
      );
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {}
  }
);
//검색
export const _searchGet = createAsyncThunk(
  "get/SEARCH",
  async (payload, thunkAPI) => {
    try {
      const data = await instance.post(
        `/api/companySearch/?keyword=${payload}`
      );
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {}
  }
);
//회사명, 주소 저장
export const _companyInfo = createAsyncThunk(
  "post/COMPANY_info",
  async (payload, thunkAPI) => {
    console.log(payload)
    try {
      const { data } = await instance.post('/api/companyInfo', payload);
      console.log("데이타",data);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {}
  }
);

const initialState = {
  makesave: [{}],
  searchsave:[{}],
  cardinfo: [
    {
      cardName: "",
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
  name: "cardinfo", 
  initialState,
  reducers: {
    saveInfo: (state, action) => {
      state.makesave = action.payload;
    },
    addresSsearchSave: (state, action) => {
      state.searchsave = action.payload; 
    },

  },
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
      state.searchCompany = { ...action.payload };
    },
    [_companyInfo.fulfilled]: (state, action) => {
      state.companyInfo = action.payload;
    },
  },
});

export const { saveInfo,addresSsearchSave } = mycardSlice.actions;
export default mycardSlice.reducer;
