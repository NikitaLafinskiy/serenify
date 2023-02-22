import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AuthState, User } from "store/models";

const initialState: AuthState = {
  isSignUp: true,
  currentUser: undefined,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setIsSignUp(state, action: PayloadAction<boolean>) {
      state.isSignUp = action.payload;
    },
    setUser(state, action: PayloadAction<User>) {
      state.currentUser = action.payload;
    },
  },
});

export const authReducer = authSlice.reducer;
