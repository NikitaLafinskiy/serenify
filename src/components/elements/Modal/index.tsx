import { useAppDispatch, useAppSelector } from "store/hooks/redux.hooks";
import { ModalProps } from "components/models";
import { createPortal } from "react-dom";
import { ModalActions } from "store/modal/ActionCreators";
import "./Modal.scss";
import { modalSlice } from "store/modal/ModalSlice";

export default function Modal({ children, styles }: ModalProps) {
  const { isActive } = useAppSelector((state) => state.modal);
  const dispatch = useAppDispatch();
  const className = `elements__modal${isActive ? "_visible" : ""}`;

  const handleClick = () => {
    dispatch(modalSlice.actions.setIsSettingsMode(true));
    dispatch(ModalActions.disableModal());
  };

  if (children) {
    return createPortal(
      <>
        <div className='elements__modal__child'>{children}</div>
        <div
          style={{ ...styles }}
          onClick={handleClick}
          className={className}
        ></div>
      </>,
      document.getElementById("portal")!
    );
  }

  return createPortal(
    <>
      <div
        style={{ ...styles, opacity: 0 }}
        className={className}
        onClick={handleClick}
      ></div>
    </>,
    document.getElementById("portal")!
  );
}
