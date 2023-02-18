export interface CircleBtnProps {
  image: string;
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

export interface ModalProps {
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  styles?: React.CSSProperties;
  children?: JSX.Element;
  innerComponent?: "signup" | "options" | undefined;
}
