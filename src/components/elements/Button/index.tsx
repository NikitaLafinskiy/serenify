import { ButtonProps } from "components/models";
import "./Button.scss";

export default function Button({ styles, children, ...rest }: ButtonProps) {
  return (
    <button className='elements__button' style={{ ...styles }} {...rest}>
      {children}
    </button>
  );
}
