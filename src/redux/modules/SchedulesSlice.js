import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const __writeSchedules = createAsyncThunk(
  "WRITE_SCHEDULES",
  async (payload, thunkAPI) => {
    console.log(payload);
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiIxIiwic3ViIjoiamFlQG5hdmVyLmNvbSIsImF1dGgiOiJST0xFX01FTUJFUiIsImV4cCI6MTY2OTQ2MTI0M30.IjIQefwTV7gGZ2I4qoy09uhiqZIF5b8_Ehs5nTJgDPE",
          "Refresh-Token":
            "eyJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2Njk0NjEyNDN9._GZjufTNaZyIhyiP3qdcZb0ayAjk-tDUPDXLPnbziy0",
        },
      };
      const data = await axios.post(
        "http://localhost:3001/date",
        payload,
        config
      );
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      console.log(error);
    }
  }
);

export const __schedulesGet = createAsyncThunk(
  "SCHEDULE_GET",
  async (payload, thunkAPI) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiIxIiwic3ViIjoiamFlQG5hdmVyLmNvbSIsImF1dGgiOiJST0xFX01FTUJFUiIsImV4cCI6MTY2OTQ2MTI0M30.IjIQefwTV7gGZ2I4qoy09uhiqZIF5b8_Ehs5nTJgDPE",
          "Refresh-Token":
            "eyJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2Njk0NjEyNDN9._GZjufTNaZyIhyiP3qdcZb0ayAjk-tDUPDXLPnbziy0",
        },
      };
      const data = await axios.get("http://localhost:3001/date", config);
      console.log(data.data);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      console.log(error);
    }
  }
);

const initialState = {
  date: [{ dateTime: "", todo: "", time: "", id: "" }],
};

export const ScheduleSlice = createSlice({
  name: "cardsReducer",
  initialState,
  reducers: {},
  extraReducers: {
    [__writeSchedules.fulfilled]: (state, action) => {
      console.log(action.payload);
      state.list = [state.list, action.payload];
    },
    [__schedulesGet.fulfilled]: (state, action) => {
      console.log(action.payload);
      state.date = action.payload;
      console.log(state.date);
    },
  },
});

export const {} = ScheduleSlice.actions;
export default ScheduleSlice.reducer;
