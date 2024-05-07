import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Options, TimerState } from "store/models";

const initialState: TimerState = {
  breaths: 30,
  currentBreaths: 1,
  inhale: 1700,
  currentInhale: 0,
  exhale: 1700,
  currentExhale: 0,
  hold: 50000,
  currentHold: 0,
  inhaleMode: "idle",
  breathMode: "breath",
};

export const timerSlice = createSlice({
  name: "timer",
  initialState,
  reducers: {
    setInhale(state, action: PayloadAction<number>) {
      state.inhaleMode = "inhale";
      state.currentInhale = state.currentInhale + action.payload;
      if (state.currentInhale >= state.inhale) {
        state.inhaleMode = "exhale";
        state.currentInhale = 0;
      }
    },
    setExhale(state, action: PayloadAction<number>) {
      state.inhaleMode = "exhale";
      state.currentExhale = state.currentExhale + action.payload;
      if (state.currentExhale >= state.exhale) {
        state.inhaleMode = "inhale";
        state.currentExhale = 0;
        state.currentBreaths = state.currentBreaths + 1;

        if (state.currentBreaths > state.breaths && state.hold > 0) {
          state.inhaleMode = "exhale";
          state.breathMode = "hold";
          state.currentBreaths = 1;
        }
      }
    },
    incrementHold(state, action: PayloadAction<number>) {
      state.currentHold = state.currentHold + action.payload;
    },
    resetBreathMode(state) {
      state.breathMode = "breath";
      state.inhaleMode = "inhale";
      state.currentBreaths = 1;
      state.currentExhale = 0;
      state.currentInhale = 0;
      state.currentHold = 0;
    },
    stopBreathMode(state) {
      state.breathMode = "breath";
      state.inhaleMode = "idle";
      state.currentBreaths = 1;
      state.currentExhale = 0;
      state.currentInhale = 0;
      state.currentHold = 0;
    },
    setParams(state, action: PayloadAction<Options>) {
      state.breaths = action.payload.breaths;
      state.inhale = action.payload.inhale * 1000;
      state.exhale = action.payload.exhale * 1000;
      state.hold = action.payload.hold * 1000;
    },
  },
});

export const timerReducer = timerSlice.reducer;
