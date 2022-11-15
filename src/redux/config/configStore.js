import { configureStore } from '@reduxjs/toolkit';
import cardinfo from '../modules/mycardSlice';
import PostSlice from '../modules/PostSlice';

const store = configureStore({
  reducer: {
    cardinfo,
    PostSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
