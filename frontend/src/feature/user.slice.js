import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    userId: null,
  },
  reducers: {
    getUser: (state, { payload }) => {
      state.userId = payload;
    },
  },
});

export const { getUser } = userSlice.actions;
export default userSlice.reducer;
