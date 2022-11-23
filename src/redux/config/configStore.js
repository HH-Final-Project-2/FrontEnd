import { configureStore } from '@reduxjs/toolkit';
import cardinfo from '../modules/mycardSlice';
import PostSlice from '../modules/PostSlice';
import comments from '../modules/commentSlice';
import PostReducer from '../modules/CardsSlice';
import chat from '../modules/chatSlice';
import ScheduleSlice from '../modules/SchedulesSlice';

const store = configureStore({
  reducer: {
    cardinfo,
    PostSlice,
    comments,
    PostReducer,
    chat,
    ScheduleSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
