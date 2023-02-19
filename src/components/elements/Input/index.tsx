import { Field, ErrorMessage } from "formik";
import { InputProps } from "components/models";
import "./Input.scss";

export default function Input({ name, styles, ...rest }: InputProps) {
  return (
    <div className='elements__input' style={{ ...styles }}>
      <p>{name}:</p>
      <Field placeholder='Start typing...' name={name} {...rest} />
      <ErrorMessage name={name} />
    </div>
  );
}
