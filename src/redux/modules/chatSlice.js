import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import instance from "../../shared/Request";

const accessToken = localStorage.getItem("authorization");
const refreshToken = localStorage.getItem("refresh-Token");

const initialState = {
  roomId: "",
  chat: [{
    userId: 0, 
    nickname: '', 
    message: '', 
    createdAt: ''
  }],
  userinfo:"",
  chatRoom: "",
  chatListroomId: "",
  subscribeId:"",
  isLoading: false,
  error: null,
};


// 채팅방 전체 불러오기
export const getChatRoom = createAsyncThunk(
  "get/chatroom",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await axios.get('http://13.124.142.195/chat/rooms', {
        headers: {
          contentType: "application/json",
          "authorization": accessToken,
          "refresh-Token": refreshToken,
        },
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

//채팅방 삭제
export const deleteChatroom = createAsyncThunk(
  "post/delete",
  async (payload, thunkAPI) => {
    try {
      const {data} = await axios.delete(
        `http://13.124.142.195/chat/rooms/${payload}`,
        {
          headers: {
            contentType: "application/json",
            "Authorization":accessToken,
            "Refresh-Token":refreshToken
          },
        }
      );
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {}
  }
);

//request: 게시글ID reponse: 채팅방ID
export const _postId = createAsyncThunk(
  "post/chatid",
  async (payload, thunkAPI) => {
    console.log("pay",payload)
    try {
      const {data} = await axios.post(
        "http://13.124.142.195/chat/rooms",
        payload,
        {
          headers: {
            contentType: "application/json",
            "Authorization":accessToken,
            "Refresh-Token":refreshToken
          },
        }
      );
      console.log("응답",data)
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {}
  }
);

//메시지 불러오기
export const getMessage = createAsyncThunk(
  "get/chat",
  async (payload, thunkAPI ) => {
    console.log("이전메시지 pay ",payload)
    try {
      const data = await axios.get(`http://13.124.142.195/chat/rooms/${payload}/messages`, {
        headers: {
          contentType: "application/json",
          "authorization": accessToken,
          "refresh-Token": refreshToken,
        },
      });
      return thunkAPI.fulfillWithValue(data.data);

    } catch (error) {

    }
  }
);


//유정정보(아이디)
export const getUserinfo = createAsyncThunk(
  "get/userinfo",
  async (payload, thunkAPI) => {
    console.log("유저정보 pay",payload)
    try {
      const { data } = await axios.get(`http://13.124.142.195/chat/rooms/userInfo/${payload}`, {
        headers: {
          contentType: "application/json",
          "authorization": accessToken,
          "refresh-Token": refreshToken,
        },
      });
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {}
  }
);


export const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    addMessage: (state, action) => {
      state.chat = [ ...state.chat ,action.payload];
    },
    roomIdSave : (state,action) => {
      state.chatListroomId = action.payload;
    }
  },
  extraReducers: {
    [_postId.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.roomId = action.payload;
    },
    [getMessage.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.chat = payload;
    },
    [getUserinfo.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.userinfo = action.payload;
    },
    [getChatRoom.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.chatRoom = payload;
    },

    // [addChatroom.fulfilled]: (state, { payload }) => {
    //   state.isLoading = false;
    //   state.chat = payload;
    // },


    // [memberInfo.fulfilled]: (state, { payload }) => {
    //   state.isLoading = false;
    //   state.users = payload;
    // },
  },
});

export const { addMessage,roomIdSave } = chatSlice.actions;
export default chatSlice.reducer;
