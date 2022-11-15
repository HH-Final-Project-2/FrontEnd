import { configureStore } from '@reduxjs/toolkit';
import cardinfo from '../modules/mycardSlice';
import PostSlice from '../modules/PostSlice';
import members from "../modules/membersSlice";

const store = configureStore({
  reducer: {
    cardinfo,
    PostSlice,
    members

  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store
