import { TextProps } from "components/models/elements";
import "./Text.scss";

export default function Text({
  handleClick,
  styles,
  children,
  ...rest
}: TextProps) {
  return (
    <p
      className='elements__text'
      style={styles}
      onClick={handleClick}
      {...rest}
    >
      {children}
    </p>
  );
}
