import { configureStore } from "@reduxjs/toolkit";

import mycard from "../config/modules/mycardSlice"

const store = configureStore({
  reducer: {
    mycard,
  },
});

export default store;
