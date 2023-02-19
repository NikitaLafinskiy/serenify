import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ModalState } from "store/models";

const initialState: ModalState = {
  isActive: false,
  innerComponent: undefined,
  isSettingsMode: true,
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    setIsActive(state, action: PayloadAction<boolean>) {
      state.isActive = action.payload;
    },
    setInnerComponent(
      state,
      action: PayloadAction<"auth" | "options" | undefined>
    ) {
      state.innerComponent = action.payload;
    },
    setIsSettingsMode(state, action: PayloadAction<boolean>) {
      state.isSettingsMode = action.payload;
    },
  },
});

export const modalReducer = modalSlice.reducer;
