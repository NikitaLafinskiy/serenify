import { useAppDispatch, useAppSelector } from "store/hooks/redux.hooks";
import { modalSlice } from "store/modal/ModalSlice";
import { ModalProps } from "../models";
import { createPortal } from "react-dom";
import "./Modal.scss";

export default function Modal({ children, onClick, styles }: ModalProps) {
  const { isActive } = useAppSelector((state) => state.modal);
  const dispatch = useAppDispatch();
  const className = `elements__modal${isActive ? "_visible" : ""}`;

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (onClick) {
      onClick(e);
    }
    dispatch(modalSlice.actions.setIsActive(false));
  };

  if (children) {
    return createPortal(
      <>
        <div onClick={handleClick} style={styles} className={className}>
          {children}
        </div>
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
