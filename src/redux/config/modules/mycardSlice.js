import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const _MakeCard = createAsyncThunk(
  "post/card",
  async (payload, thunkAPI) => { //콜백
    try{
        const data = await axios.post("http://localhost:3001/cardinfo",payload);
        return thunkAPI.fulfillWithValue(data.data);
    }catch (error) {
        
    }}
);


const initialState = {
  cardinfo: [{
    ponenum:"",

  }
    
  ],
  isLoading: false,
  isSuccess: false,
  error: null,
};


export const mycardSlice = createSlice({
  name: "cardinfo", //모듈
  initialState,
  reducers: {}, //action value + action creator
  extraReducers:{
      [_MakeCard.pending]: (state, action) => {
          state.isLoading = true;
      },
      [_MakeCard.fulfilled]: (state, action) => {
          state.isLoading = false;
          state.cardinfo = action.payload;
      },

  },
});

export const {} = mycardSlice.actions;
export default mycardSlice.reducer;