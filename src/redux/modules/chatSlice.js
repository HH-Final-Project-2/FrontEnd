import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const accessToken = localStorage.getItem("authorization");
const refreshToken = localStorage.getItem("refresh-Token");


//채팅방 전체 불러오기
// export const getChatRoom = createAsyncThunk(
//   "get/chatroom",
//   async (payload, { rejectWithValue }) => {
//     try {
//       const response = await axios.get('http://localhost:3001/cardinfo'
//       // , {
//       //   headers: {
//       //     contentType: "application/json",
//       //     "authorization": accessToken,
//       //     "refresh-Token": refreshToken,
//       //   },
//       // }
//       );
//       return response.data;
//     } catch (error) {
//       return rejectWithValue(error.response.data);
//     }
//   }
// );






const initialState = {
  roomId: "",
  chatRoom: [
    {
      id: "",
      name: ""
    }
  ],
  chat: [],
  users: [
    {
      memberId: 0,
      loginId: "",
      nickName: "",
      password: "",
      phoneNumber: ""
    }
  ],
  isLoading: false,
  error: null,
};