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
            'Bearer eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiIxIiwic3ViIjoiYWFhQG5hdmVyLmNvbSIsImF1dGgiOiJST0xFX01FTUJFUiIsImV4cCI6MTY2OTIxMjM2NH0.4LgYwsbIz38cwRkPQcSJIrDOmaBvBEt4eqPXx5IjC1g',
          'Refresh-Token':
            'eyJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2Njk3MzA3NjR9.o8pS793rKuCaIFbtHrKbRL19U--qQpfeV9fH_8b18fA',
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
            'Bearer eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiIxIiwic3ViIjoiYWFhQG5hdmVyLmNvbSIsImF1dGgiOiJST0xFX01FTUJFUiIsImV4cCI6MTY2OTIxMjM2NH0.4LgYwsbIz38cwRkPQcSJIrDOmaBvBEt4eqPXx5IjC1g',
          'Refresh-Token':
            'eyJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2Njk3MzA3NjR9.o8pS793rKuCaIFbtHrKbRL19U--qQpfeV9fH_8b18fA',
        },
      };
      const data = await axios.get(
        'https://bkyungkeem.shop/api/calendar',
        config
      );
      console.log(data.data.data);
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
