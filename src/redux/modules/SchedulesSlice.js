import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import instance from "../../shared/Request";

export const __writeSchedules = createAsyncThunk(
  "WRITE_SCHEDULES",
  async (payload, thunkAPI) => {
    try {
      const data = await instance.post("/api/calendar", payload);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {

    }
  }
);

export const __schedulesGet = createAsyncThunk(
  "SCHEDULE_GET",
  async (payload, thunkAPI) => {
    try {
      const data = await instance.get("/api/calendar");
      return thunkAPI.fulfillWithValue(data.data.data);
    } catch (error) {

    }
  }
);
export const __schedulesDetailGet = createAsyncThunk(
  "SCHEDULE_DETAIL_GET",
  async (payload, thunkAPI) => {
    try {
      const data = await instance.get(`/api/calendar/${payload}`);
      return thunkAPI.fulfillWithValue(data.data.data);
    } catch (error) {

    }
  }
);

const initialState = {
  date: [],
  list: [],
  detail: [],
  isLoading: false,
};

export const ScheduleSlice = createSlice({
  name: "cardsReducer",
  initialState,
  reducers: {},
  extraReducers: {
    [__writeSchedules.fulfilled]: (state, action) => {
      state.isLoading = true;
      state.list = [...state.list, action.payload];
    },
    [__schedulesGet.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.date = action.payload;
    },
    [__schedulesDetailGet.fulfilled]: (state, action) => {
      state.detail = action.payload;
    },
  },
});

export const { } = ScheduleSlice.actions;
export default ScheduleSlice.reducer;
