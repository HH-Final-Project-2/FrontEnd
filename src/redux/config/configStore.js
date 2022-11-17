import { configureStore } from "@reduxjs/toolkit";
// import CompanyReducer from "../modules/CompanySlice";
import PostReducer from "../modules/CardsSlice";

const store = configureStore({
  reducer: { PostReducer },
});

export default store;
