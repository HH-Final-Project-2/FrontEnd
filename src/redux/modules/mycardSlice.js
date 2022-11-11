import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

//post 
export const _MakeCard = createAsyncThunk(
  "post/card",
  async (payload, thunkAPI) => {
    try{
        const data = await axios.post("http://localhost:3001/cardinfo",payload);
        
        return thunkAPI.fulfillWithValue(data.data);
        
    }catch (error) {
        
    }}
);

//get 
export const _getMakeCard = createAsyncThunk(
  "get/card",
  async (payload, thunkAPI) => {
    try{
        const data = await axios.get("http://localhost:3001/cardinfo");
        return thunkAPI.fulfillWithValue(data.data);
    }catch (error) {
        
    }}
);


//put 
export const _PutCard = createAsyncThunk(
  "put/card",
  async (payload, thunkAPI) => {
    console.log('나는 썽크 페이로드',payload)
    try{
        const data = await axios.put(`http://localhost:3001/cardinfo`,payload);
        console.log(data)
        return thunkAPI.fulfillWithValue(data.data);
    }catch (error) {
        
    }}
);


const initialState = {
  cardinfo: [{
    cardname: '',
    engName: '',
    email: '',
    phoneNum: '',
    company: '',
    // companyAddress:'',
    department: '',
    postion: '',
    tel: '',
    fax: ''
  }],
  isLoading: false,
  error: null,
};


export const mycardSlice = createSlice({
  name: "cardinfo", //모듈
  initialState,
  reducers: {}, //action value + action creator
  extraReducers:{
      [_MakeCard.fulfilled]: (state, action) => {
          state.isLoading = false;
          state.cardinfo = action.payload;
      },
      [_getMakeCard.fulfilled]: (state, action) => {
        state.isLoading = false;
        state.cardinfo = action.payload
      },
      [_PutCard.fulfilled]: (state, action) => {
        console.log('나는 리듀서의 콘솔로그',action.payload)
        state.isLoading = false;
        state.cardinfo = action.payload
      },

  },
});

export const {} = mycardSlice.actions;
export default mycardSlice.reducer;