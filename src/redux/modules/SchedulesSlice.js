import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const __writeSchedules = createAsyncThunk(
  'WRITE_SCHEDULES',
  async (payload, thunkAPI) => {
    console.log(payload);
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiIxIiwic3ViIjoiYWFhQG5hdmVyLmNvbSIsImF1dGgiOiJST0xFX01FTUJFUiIsImV4cCI6MTY2OTI5NjM4OX0.8L-0Zs-MjGUICUDtKimYx2Q4qs03j_AceS4dHtOlV8w',
          'Refresh-Token':
            'eyJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2Njk4MTQ3ODl9.ugKSjtj5lpDMXphCEIVTuSP1SyP-ZOdAhID43Y-pnRE',
        },
      };
      const data = await axios.post(
        'https://bkyungkeem.shop/api/calendar',
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
  'SCHEDULE_GET',
  async (payload, thunkAPI) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiIxIiwic3ViIjoiYWFhQG5hdmVyLmNvbSIsImF1dGgiOiJST0xFX01FTUJFUiIsImV4cCI6MTY2OTI5NjM4OX0.8L-0Zs-MjGUICUDtKimYx2Q4qs03j_AceS4dHtOlV8w',
          'Refresh-Token':
            'eyJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2Njk4MTQ3ODl9.ugKSjtj5lpDMXphCEIVTuSP1SyP-ZOdAhID43Y-pnRE',
        },
      };
      const data = await axios.get(
        'https://bkyungkeem.shop/api/calendar',
        config
      );
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
  name: 'cardsReducer',
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
