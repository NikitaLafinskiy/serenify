import React from "react";
import { makeStyles, Slider } from "@material-ui/core";
import { useField } from "formik";
import { SliderProps } from "components/models";
import "./Slider.scss";

const useStyles = makeStyles({
  slider: {
    color: "#2667ff",
  },
});

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

  const handleChange = (
    event: React.ChangeEvent<{}>,
    value: number | number[]
  ) => {
    helpers.setValue(value as number);
  };

  const classes = useStyles();

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
        classes={{ root: classes.slider }}
      />
    </div>
  );
};

export default FormikSlider;
