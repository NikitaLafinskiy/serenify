import { useState } from "react";

export const useDynamicStyle = (propertyName: string) => {
  const [style, setStyle] = useState("");
  const root = document.documentElement;

  return {
    style,
    setStyle: (value: string) => {
      root?.style.setProperty(`--${propertyName}`, value);
      setStyle(value);
    },
  };
};
