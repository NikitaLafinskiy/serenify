export const useDynamicStyle = (propertyName: string) => {
  const root = document.documentElement;

  return {
    setStyle: (value: string) => {
      root?.style.setProperty(`--${propertyName}`, value);
    },
  };
};
