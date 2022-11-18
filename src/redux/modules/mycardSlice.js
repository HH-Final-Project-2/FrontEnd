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
              authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiIyIiwic3ViIjoic3NzQG5hdmVyLmNvbSIsImF1dGgiOiJST0xFX01FTUJFUiIsImV4cCI6MTY2OTM2NDQ5N30.aDnKOaUA86tu4STFoxfOUSPmMg72gAjE9NDi_YKTlHw",
              "refresh-Token": "eyJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2NjkzNjQ0OTd9.ImOYoac4cY5vR2O11_pG6QIBo5fKzxpYCAsemiJ7xnY",
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
            authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiIyIiwic3ViIjoic3NzQG5hdmVyLmNvbSIsImF1dGgiOiJST0xFX01FTUJFUiIsImV4cCI6MTY2OTM2NDQ5N30.aDnKOaUA86tu4STFoxfOUSPmMg72gAjE9NDi_YKTlHw",
            "refresh-Token": "eyJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2NjkzNjQ0OTd9.ImOYoac4cY5vR2O11_pG6QIBo5fKzxpYCAsemiJ7xnY",
        },
        });
        return thunkAPI.fulfillWithValue(data);
    }catch (error) {
        
    }}
);


//put 
export const _PutCard = createAsyncThunk(
  "put/card",
  async (payload, thunkAPI) => {
    try{
        // const data = await axios.put(`http://localhost:3001/cardinfo/${payload.id}`,payload);
        const {data} = await axios.put(`https:/bkyungkeem.shop/api/mypages/${payload.id}`,payload,
        {
          headers:{
            contentType: "application/json",
            authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiIyIiwic3ViIjoic3NzQG5hdmVyLmNvbSIsImF1dGgiOiJST0xFX01FTUJFUiIsImV4cCI6MTY2OTM2NDQ5N30.aDnKOaUA86tu4STFoxfOUSPmMg72gAjE9NDi_YKTlHw",
            "refresh-Token": "eyJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2NjkzNjQ0OTd9.ImOYoac4cY5vR2O11_pG6QIBo5fKzxpYCAsemiJ7xnY",
        },
        });
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


export const mycardSlice = createSlice({
  name: "cardinfo", //모듈
  initialState,
  reducers: {}, 
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