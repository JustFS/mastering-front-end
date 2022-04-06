import { configureStore } from "@reduxjs/toolkit";
import picturesReducer from "../feature/pictures.slice";

export default configureStore({
  reducer: {
    pictures: picturesReducer,
  },
});
