import { AppDispatch } from "store";
import { modalSlice } from "./ModalSlice";

export class ModalActions {
  static enableModal(innerComponent: "signup" | "options") {
    return (dispatch: AppDispatch) => {
      dispatch(modalSlice.actions.setIsActive(true));
      dispatch(modalSlice.actions.setInnerComponent(innerComponent));
    };
  }
}
