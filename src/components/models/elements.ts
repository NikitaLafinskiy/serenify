import { FieldHookConfig } from "formik";
import React from "react";

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

export interface InputProps extends React.ComponentProps<"input"> {
  styles?: React.CSSProperties;
  name: string;
}

export interface ButtonProps extends React.ComponentProps<"button"> {
  styles?: React.CSSProperties;
  children: React.ReactNode;
}

export interface FormProps extends React.ComponentProps<"form"> {
  styles?: React.CSSProperties;
  children: React.ReactNode;
  ref?: any;
}

export interface HeaderProps extends React.ComponentProps<"h1"> {
  styles?: React.CSSProperties;
  children: React.ReactNode;
}

export type SliderProps = {
  label: string;
  min: number;
  max: number;
  step: number;
  name: string;
} & FieldHookConfig<number>;

export interface LinkProps {
  to: string;
  styles?: React.CSSProperties;
  children: React.ReactNode;
}

export interface TextProps {
  handleClick: () => void;
  styles?: React.CSSProperties;
  children: React.ReactNode;
}
