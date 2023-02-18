import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { modalReducer } from "./modal/ModalSlice";
import { timerReducer } from "./timer/TimerSlice";

export const reducer = combineReducers({
  timer: timerReducer,
  modal: modalReducer,
});

export const store = configureStore({ reducer });

export const setupStore = () => store;

export type AppStore = ReturnType<typeof setupStore>;
export type RootState = ReturnType<typeof reducer>;
export type AppDispatch = AppStore["dispatch"];
