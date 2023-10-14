import { AppDispatch } from "store";
import { modalSlice } from "./ModalSlice";

export class ModalActions {
  static enableModal(innerComponent: "auth" | "options") {
    return (dispatch: AppDispatch) => {
      dispatch(modalSlice.actions.setIsSettingsMode(true));
      dispatch(modalSlice.actions.setIsActive(true));
      dispatch(modalSlice.actions.setInnerComponent(innerComponent));
    };
  }

  static disableModal() {
    return (dispatch: AppDispatch) => {
      console.log("Disabling modal");
      dispatch(modalSlice.actions.setIsActive(false));
      dispatch(modalSlice.actions.setInnerComponent(undefined));
    };
  }
}
