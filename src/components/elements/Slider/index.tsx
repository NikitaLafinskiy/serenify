import React from "react";
import { Slider } from "@mui/material";
import { useField } from "formik";
import { SliderProps } from "components/models";
import "./Slider.scss";

const FormikSlider: React.FC<SliderProps> = ({
  label,
  min,
  max,
  step,
  name,
  ...props
}) => {
  /* eslint-disable @typescript-eslint/no-unused-vars */
  const [field, meta, helpers] = useField(name);

  const handleChange = (event: Event, value: number | number[]) => {
    helpers.setValue(value as number);
  };

  return (
    <div className='elements__slider'>
      <label htmlFor={name}>{label}</label>
      <Slider
        {...field}
        min={min}
        max={max}
        step={step}
        onChange={handleChange}
        valueLabelDisplay='auto'
        sx={{
          color: "#2667ff",
        }}
      />
    </div>
  );
};

export default FormikSlider;
