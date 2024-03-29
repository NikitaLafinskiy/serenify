import { ThunkAction } from "@reduxjs/toolkit";
import { AnyAction, CombinedState } from "redux";
import { Options } from "store/models";
import { OptionsService } from "services/http/options/OptionsService";
import { AppDispatch, RootState } from "store";
import { TimerState } from "store/models";
import { timerSlice } from "./TimerSlice";

export class TimerActions {
  static timeInterval: number = 50;
  static timer: NodeJS.Timer;
  static holdTimer: NodeJS.Timer;

  static start() {
    return async (dispatch: AppDispatch) => {
      this.timer = setInterval(() => {
        dispatch(this.breathe());
      }, this.timeInterval);
    };
  }

  static breathe(): ThunkAction<
    Promise<void>,
    CombinedState<RootState>,
    undefined,
    AnyAction
  > {
    return async (
      dispatch: AppDispatch,
      getState: () => CombinedState<{ timer: TimerState }>
    ) => {
      const { breathMode, inhaleMode } = getState().timer;

      if (breathMode === "hold") {
        dispatch(this.hold());
      }

      if (inhaleMode === "inhale" || inhaleMode === "idle") {
        dispatch(timerSlice.actions.setInhale(this.timeInterval));
      } else {
        dispatch(timerSlice.actions.setExhale(this.timeInterval));
      }
    };
  }

  static hold = () => {
    return async (
      dispatch: AppDispatch,
      getState: () => CombinedState<RootState>
    ) => {
      const { hold } = getState().timer;
      clearInterval(this.timer);
      this.holdTimer = setInterval(() => {
        dispatch(timerSlice.actions.incrementHold(1000));
      }, 1000);
      setTimeout(() => {
        dispatch(this.reset());
      }, hold + 1000);
    };
  };

  static reset() {
    return async (dispatch: AppDispatch) => {
      dispatch(timerSlice.actions.resetBreathMode());
      dispatch(this.start());
      clearInterval(this.holdTimer);
    };
  }

  static updateOptions(options: Options) {
    return async (dispatch: AppDispatch) => {
      const { data } = await OptionsService.updateOptions(options);
      dispatch(timerSlice.actions.setParams(data.optionsUpdate));
    };
  }
}
