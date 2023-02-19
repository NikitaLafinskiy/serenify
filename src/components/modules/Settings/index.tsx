import { CircleBtn } from "components/elements";
import settingsSvg from "assets/images/settings.svg";
import optionsSvg from "assets/images/options.svg";
import loginSvg from "assets/images/login.svg";
import "./Settings.scss";
import { useAppDispatch, useAppSelector } from "store/hooks/redux.hooks";
import { modalSlice } from "store/modal/ModalSlice";
import { ModalActions } from "store/modal/ActionCreators";

export default function Settings() {
  const dispatch = useAppDispatch();
  const { inhaleMode } = useAppSelector((state) => state.timer);
  const { isSettingsMode } = useAppSelector((state) => state.modal);
  const className = `modules__settings${
    inhaleMode === "idle"
      ? isSettingsMode
        ? ""
        : "_options-mode"
      : "_play-mode"
  }`;

  return (
    <>
      <div className={className}>
        <CircleBtn
          image={settingsSvg}
          onClick={() => {
            dispatch(modalSlice.actions.setIsSettingsMode(false));
            dispatch(modalSlice.actions.setIsActive(true));
          }}
        />
        <div className='pop-up'>
          <CircleBtn
            image={optionsSvg}
            onClick={() => {
              dispatch(ModalActions.enableModal("options"));
            }}
          />
          <CircleBtn
            image={loginSvg}
            onClick={() => {
              dispatch(ModalActions.enableModal("auth"));
            }}
          />
        </div>
      </div>
    </>
  );
}
