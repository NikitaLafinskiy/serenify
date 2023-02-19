import { FormikProps } from "formik";
import { AuthValues } from "./templates";

export interface AuthFormProps {
  formik: FormikProps<AuthValues>;
}
