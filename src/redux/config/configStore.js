import { configureStore } from "@reduxjs/toolkit";
import cardinfo from "../modules/mycardSlice"


const store = configureStore({
  reducer: {
    cardinfo,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
