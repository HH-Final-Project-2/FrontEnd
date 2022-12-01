import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import axios from "axios";
import instance from "../../shared/Request";

export const __writeSchedules = createAsyncThunk(
  "WRITE_SCHEDULES",
  async (payload, thunkAPI) => {
    console.log(payload);
    try {
      const data = await instance.post("/api/calendar", payload);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      console.log(error);
    }
  }
);

export const __schedulesGet = createAsyncThunk(
  "SCHEDULE_GET",
  async (payload, thunkAPI) => {
    console.log(payload);
    try {
      const data = await instance.get("/api/calendar");
      console.log(data.data);
      return thunkAPI.fulfillWithValue(data.data.data);
    } catch (error) {
      console.log(error);
    }
  }
);

const initialState = {
  date: [],
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
