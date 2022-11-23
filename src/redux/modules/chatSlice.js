import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import instance from "../../shared/Request";

const accessToken = localStorage.getItem("authorization");
const refreshToken = localStorage.getItem("refresh-Token");

const initialState = {
  roomId: "",
  chatRoom: [
    // {
    //   roomId:"",
    //   email: ""
    // }
  ],
  chat: [],
  // users: [
  //   {
  //     memberId: 0,
  //     loginId: "",
  //     nickName: "",
  //     password: "",
  //     phoneNumber: ""
  //   }
  // ],
  isLoading: false,
  error: null,
};

//채팅방 생성
export const addChatroom = createAsyncThunk(
  "post/chatroom",
  async (payload, { rejectWithValue }) => {
    try {
      const data = await axios.post(
        "http://13.124.142.195/create/chat",
        payload,
        {
          headers: {
            contentType: "application/json",
            authorization: accessToken,
            "refresh-Token": refreshToken,
          },
        }
      );
      console.log(payload);
      return data.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

//채팅방 전체 불러오기
// export const getChatRoom = createAsyncThunk(
//   "get/chatroom",
//   async (payload, { rejectWithValue }) => {
//     try {
//       const response = await axios.get('http://13.124.142.195/api/rooms', {
//         headers: {
//           contentType: "application/json",
//           "authorization": accessToken,
//           "refresh-Token": refreshToken,
//         },
//       });
//       return response.data;
//     } catch (error) {
//       return rejectWithValue(error.response.data);
//     }
//   }
// );

export const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    // addMessage: (state, { payload }) => {
    //   state.chat = [ ...state.chat ,payload];
    // },
  },
  extraReducers: {
    [addChatroom.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.chat = payload;
    },
    // [getChatRoom.fulfilled]: (state, { payload }) => {
    //   state.isLoading = false;
    //   state.chatRoom = payload;
    // },

    // [getMessage.fulfilled]: (state, { payload }) => {
    //   state.isLoading = false;
    //   state.chat = payload;
    // },
    // [memberInfo.fulfilled]: (state, { payload }) => {
    //   state.isLoading = false;
    //   state.users = payload;
    // },
  },
});

export const { addMessage } = chatSlice.actions;
export default chatSlice.reducer;
