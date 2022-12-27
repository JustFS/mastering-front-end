import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../feature/user.slice";
import postReducer from "../feature/post.slice";

export default configureStore({
  reducer: {
    user: userReducer,
    posts: postReducer,
  },
});
