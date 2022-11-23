import { configureStore } from "@reduxjs/toolkit";
import cardinfo from "../modules/mycardSlice";
import PostSlice from "../modules/PostSlice";
import comments from "../modules/commentSlice";
import PostReducer from "../modules/CardsSlice";

import ScheduleSlice from "../modules/SchedulesSlice";

import chat from '../modules/chatSlice' 


const store = configureStore({
  reducer: {
    cardinfo,
    PostSlice,
    comments,
    PostReducer,
    ScheduleSlice,
    chat,

  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
