import { Form as FormikForm } from "formik";
import { FormProps } from "components/models";
import "./Form.scss";

export default function Form({ styles, children, ...rest }: FormProps) {
  return (
    <FormikForm style={{ ...styles }} {...rest}>
      {children}
    </FormikForm>
  );
}
