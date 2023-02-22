import { OptionsValues } from "components/models";
import { OptionsForm } from "components/modules";
import { Formik, FormikHelpers, FormikProps } from "formik";
import { optionsValidator } from "services/validators";
import { useAppDispatch, useAppSelector } from "store/hooks/redux.hooks";
import { TimerActions } from "store/timer/ActionCreators";

export default function Options() {
  const dispatch = useAppDispatch();
  const { breaths, inhale, exhale, hold } = useAppSelector(
    (state) => state.timer
  );

  const initialValues: OptionsValues = {
    breaths,
    inhale: inhale / 1000,
    exhale: exhale / 1000,
    hold: hold / 1000,
  };

  const onSubmit = async (
    values = initialValues,
    { setSubmitting }: FormikHelpers<OptionsValues>
  ) => {
    await dispatch(
      TimerActions.updateOptions({
        breaths: values.breaths,
        inhale: values.inhale,
        exhale: values.exhale,
        hold: values.hold,
      })
    );
    setSubmitting(false);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={optionsValidator}
      onSubmit={onSubmit}
    >
      {(formik: FormikProps<OptionsValues>) => {
        return <OptionsForm formik={formik} />;
      }}
    </Formik>
  );
}
function useAppselector(arg0: (state: any) => any): {
  breaths: any;
  inhale: any;
  exhale: any;
  hold: any;
} {
  throw new Error("Function not implemented.");
}
