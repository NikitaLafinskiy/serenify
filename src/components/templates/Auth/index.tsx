import "./Auth.scss";
import { Formik, FormikProps, FormikHelpers } from "formik";
import { authValidator } from "services/validators";
import { AuthValues } from "components/models";
import { AuthForm } from "components/modules";

export default function Auth() {
  const initialValues: AuthValues = {
    username: "",
    password: "",
  };

  const onSubmit = (
    values = initialValues,
    { setSubmitting }: FormikHelpers<AuthValues>
  ) => {
    console.log(values);
    setSubmitting(false);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={authValidator}
      onSubmit={onSubmit}
    >
      {(formik: FormikProps<AuthValues>) => {
        return <AuthForm formik={formik} />;
      }}
    </Formik>
  );
}
