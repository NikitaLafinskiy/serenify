import { FormikProps } from "formik";
import { AuthValues, OptionsValues } from "./templates";

export interface AuthFormProps {
  formik: FormikProps<AuthValues>;
}

export interface OptionsFormProps {
  formik: FormikProps<OptionsValues>;
}
