import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import instance from "../../shared/Request";
const accessToken = localStorage.getItem("authorization");
const refreshToken = localStorage.getItem("refresh-Token");

//프로필 get
export const _getProfile = createAsyncThunk(
  "get/profille",
  async (payload, thunkAPI) => {
    try {
      const { data } = await axios.get("https://bkyungkeem.shop/api/members/profiles", {
        headers: {
          contentType: "application/json",
          Authorization: accessToken,
          "Refresh-Token": refreshToken,
        },
      });
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {}
  }
);
//프로필 put
export const _PutPorfile = createAsyncThunk(
  "put/profille",
  async (payload, thunkAPI) => {
    console.log(payload, payload.id)
    try {
      const { data } = await axios.patch(
        `https://bkyungkeem.shop/api/members/profiles/`,
        payload,
        {
          headers: {
            contentType: "application/json",
            Authorization: accessToken,
          "Refresh-Token": refreshToken,

          },
        }
      );
      console.log(data)
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {}
  }
);


const initialState = {
  userprofile:[{}],
  isLoading: false,
  error: null,
};

export const porfileSlice = createSlice({
  name: "userprofile", //모듈
  initialState,
  reducers: {},
  extraReducers: {
    [_getProfile.fulfilled]: (state, action) => {
      state.userprofile = action.payload;
    },
    [_PutPorfile.fulfilled]: (state, action) => {
      console.log(action.payload);
      state.userprofile = [{ ...state.userprofile }, action.userprofile]
    }

  },
});
export const {} = porfileSlice.actions;
export default porfileSlice.reducer;
