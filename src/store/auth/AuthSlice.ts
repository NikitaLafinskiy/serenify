import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AuthState } from "store/models";

const initialState: AuthState = {
  isSignUp: true,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setIsSignUp(state, action: PayloadAction<boolean>) {
      state.isSignUp = action.payload;
    },
  },
});

export const authReducer = authSlice.reducer;
