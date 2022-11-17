import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


const accessToken = localStorage.getItem("authorization");
const refreshToken = localStorage.getItem("refresh-Token");




//post 
export const _MakeCard = createAsyncThunk(
  "post/card",
  async (payload, thunkAPI) => {
    try{
        // const data = await axios.post("http://localhost:3001/cardinfo",payload);
        console.log(payload)
        const data = await axios.post("https://bkyungkeem.shop/api/mypages",payload,
        {
          headers:{
              contentType: "application/json",
              authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiIyIiwic3ViIjoic3NzQG5hdmVyLmNvbSIsImF1dGgiOiJST0xFX01FTUJFUiIsImV4cCI6MTY2ODY3Njg5OX0.XbBc2i3MUbWurHn_apS0Cyo66lE34wcZxz9ZzixyP64",
              "refresh-Token": "eyJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2NjkxOTUyOTl9.mV-LEyem5vyKVN1Y2KVShAad30gTuAlOwGJAr-p4pSk",
          },
        });
        return thunkAPI.fulfillWithValue(data.data);
    }catch (error) {
    }
  }
);

//get 
export const _getMakeCard = createAsyncThunk(
  "get/card",
  async (payload, thunkAPI) => {
    try{
        // const data = await axios.get("http://localhost:3001/cardinfo");
        const {data} = await axios.get("https://bkyungkeem.shop/api/mypages",
        {
          headers:{
              contentType: "application/json",
              authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiIyIiwic3ViIjoic3NzQG5hdmVyLmNvbSIsImF1dGgiOiJST0xFX01FTUJFUiIsImV4cCI6MTY2ODY3Njg5OX0.XbBc2i3MUbWurHn_apS0Cyo66lE34wcZxz9ZzixyP64",
              "refresh-Token": "eyJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2NjkxOTUyOTl9.mV-LEyem5vyKVN1Y2KVShAad30gTuAlOwGJAr-p4pSk",
          },
        }
        
        
        );

        return thunkAPI.fulfillWithValue(data);
    }catch (error) {
        
    }}
);


//put 
export const _PutCard = createAsyncThunk(
  "put/card",
  async (payload, thunkAPI) => {
    console.log("수정 페이로드",payload)
    try{
        // const data = await axios.put(`http://localhost:3001/cardinfo/${payload.id}`,payload);
        const {data} = await axios.put(`https:/bkyungkeem.shop/api/mypages/${payload.id}`,payload,
        {
          headers:{
              contentType: "application/json",
              authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiIyIiwic3ViIjoic3NzQG5hdmVyLmNvbSIsImF1dGgiOiJST0xFX01FTUJFUiIsImV4cCI6MTY2ODY3Njg5OX0.XbBc2i3MUbWurHn_apS0Cyo66lE34wcZxz9ZzixyP64",
              "refresh-Token": "eyJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2NjkxOTUyOTl9.mV-LEyem5vyKVN1Y2KVShAad30gTuAlOwGJAr-p4pSk",
          },
        }
        
        );

        return thunkAPI.fulfillWithValue(data);
    }catch (error) {
        
    }}
);


const initialState = {
  cardinfo: [
    {
    cardName: '',
    engName: '',
    email: '',
    phoneNum: '',
    company: '',
    // companyAddress:'',
    department: '',
    position: '',
    tel: '',
    fax: ''
  }
],
  isLoading: false,
  error: null,
};

// company 수정할 때  put thunck 데이터 콘솔(Thunck), put 콘솔(createSlice)
// company 만 수정 됨 하지만 데이터를 불러올 때 부서가 company 의 value로 나타나짐

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
        state.isLoading = false;
        state.cardinfo = [{...state.cardinfo}, action.payload];

      },

  },
});

export const {} = mycardSlice.actions;
export default mycardSlice.reducer;