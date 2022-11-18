import { configureStore } from "@reduxjs/toolkit";
import PostReducer from "../modules/CardsSlice";

const store = configureStore({
  reducer: { PostReducer },
});

export default store;
