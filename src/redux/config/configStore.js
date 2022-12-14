import { configureStore } from "@reduxjs/toolkit";
import cardinfo from "../modules/mycardSlice";
import PostSlice from "../modules/PostSlice";
import comments from "../modules/commentSlice";
import PostReducer from "../modules/CardsSlice";
import chat from "../modules/chatSlice";
import ScheduleSlice from "../modules/SchedulesSlice";
import userprofile from "../modules/profileSlice";
import memberSlice from "../modules/membersSlice";

const store = configureStore({
  reducer: {
    cardinfo,
    userprofile,
    PostSlice,
    comments,
    PostReducer,
    chat,
    ScheduleSlice,
    memberSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
