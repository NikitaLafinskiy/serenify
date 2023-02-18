import { CircleBtn } from "components/elements";
import settingsSvg from "assets/images/settings.svg";
import optionsSvg from "assets/images/options.svg";
import loginSvg from "assets/images/login.svg";
import "./Settings.scss";
import { useAppDispatch, useAppSelector } from "store/hooks/redux.hooks";
import { modalSlice } from "store/modal/ModalSlice";
import { SettingsProps } from "../models";
import { ModalActions } from "store/modal/ActionCreators";

export default function Settings({
  isSettingsMode,
  setIsSettingsMode,
}: SettingsProps) {
  const dispatch = useAppDispatch();
  const { inhaleMode } = useAppSelector((state) => state.timer);
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
            setIsSettingsMode(false);
            dispatch(modalSlice.actions.setIsActive(true));
          }}
        />
        <div className='pop-up'>
          <CircleBtn
            image={optionsSvg}
            onClick={() => {
              setIsSettingsMode(true);
              dispatch(ModalActions.enableModal("options"));
            }}
          />
          <CircleBtn
            image={loginSvg}
            onClick={() => {
              setIsSettingsMode(true);
              dispatch(ModalActions.enableModal("signup"));
            }}
          />
        </div>
      </div>
    </>
  );
}
