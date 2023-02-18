import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ModalState } from "store/models";

const initialState: ModalState = {
  isActive: false,
  innerComponent: undefined,
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    setIsActive(state, action: PayloadAction<boolean>) {
      state.isActive = action.payload;
    },
    setInnerComponent(state, action: PayloadAction<"signup" | "options">) {
      state.innerComponent = action.payload;
    },
  },
});

export const modalReducer = modalSlice.reducer;
