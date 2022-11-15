import { configureStore } from '@reduxjs/toolkit';
import cardinfo from '../modules/mycardSlice';
import PostSlice from '../modules/PostSlice';
import post from '../modules/PostSlice';

const store = configureStore({
  reducer: {
    cardinfo,
    PostSlice,
    post,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
