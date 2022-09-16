import { configureStore } from "@reduxjs/toolkit";
import cocktailSlice from "./features/cocktil";

export default configureStore({
  reducer: {
    app: cocktailSlice,
  },
});