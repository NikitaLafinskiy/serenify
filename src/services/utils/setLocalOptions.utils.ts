import { AppDispatch } from "store";
import { timerSlice } from "store/timer/TimerSlice";

export const setLocalOptions = (dispatch: AppDispatch) => {
  const options = {
    breaths: 30,
    inhale: 1.7,
    exhale: 1.7,
    hold: 50,
  };
  if (localStorage.getItem("breaths") !== null) {
    options.breaths = localStorage.getItem("breaths")
      ? parseInt(localStorage.getItem("breaths")!)
      : 30;
    options.inhale = localStorage.getItem("inhale")
      ? parseFloat(localStorage.getItem("inhale")!)
      : 1.7;
    options.exhale = localStorage.getItem("exhale")
      ? parseFloat(localStorage.getItem("exhale")!)
      : 1.7;
    options.hold = localStorage.getItem("hold")
      ? parseInt(localStorage.getItem("hold")!)
      : 50;
  }
  console.log(
    "setting local options to " + options.breaths,
    options.inhale,
    options.exhale,
    options.hold
  );

  dispatch(timerSlice.actions.setParams(options));
};
