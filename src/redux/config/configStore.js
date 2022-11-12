import { configureStore } from '@reduxjs/toolkit';
import PostSlice from '../modules/PostSlice';

const store = configureStore({
  reducer: {
    PostSlice,
  },
});

export default store;
