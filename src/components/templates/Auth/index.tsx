import { Formik, FormikProps, FormikHelpers } from "formik";
import { authValidator } from "services/validators";
import { AuthValues } from "components/models";
import { AuthForm } from "components/modules";
import { useAppDispatch, useAppSelector } from "store/hooks/redux.hooks";
import { AuthActions } from "store/auth/ActionCreators";
import { ModalActions } from "store/modal/ActionCreators";
import "./Auth.scss";

export default function Auth() {
  const { isSignUp } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();

  const initialValues: AuthValues = {
    username: "",
    password: "",
  };

  const onSubmit = async (
    values = initialValues,
    { setSubmitting }: FormikHelpers<AuthValues>
  ) => {
    isSignUp
      ? await dispatch(
          AuthActions.singup({
            username: values.username,
            password: values.password,
          })
        )
      : await dispatch(
          AuthActions.login({
            username: values.username,
            password: values.password,
          })
        );

    setSubmitting(false);
    dispatch(ModalActions.disableModal());
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
