import { HeaderProps } from "components/models";
import "./Header.scss";

export default function Header({ styles, children, ...rest }: HeaderProps) {
  return (
    <h1 className='elements__header' style={{ ...styles }} {...rest}>
      {children}
    </h1>
  );
}
