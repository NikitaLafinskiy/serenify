import { LinkProps } from "components/models/elements";
import { Link as LinkRouter } from "react-router-dom";
import "./Link.scss";

export default function Link({ to, styles, children, ...rest }: LinkProps) {
  return (
    <LinkRouter style={styles} to={to} {...rest}>
      {children}
    </LinkRouter>
  );
}
