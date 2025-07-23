import { configureStore } from "@reduxjs/toolkit";
import userData from "./reducers/userData";

export default configureStore({
  reducer: {
    userData: userData,
  },
});
