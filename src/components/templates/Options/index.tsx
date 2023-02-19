import { OptionsValues } from "components/models";
import { OptionsForm } from "components/modules";
import { Formik, FormikHelpers, FormikProps } from "formik";
import { optionsValidator } from "services/validators";

export default function Options() {
  const initialValues: OptionsValues = {
    breaths: 30,
    inhale: 1.7,
    exhale: 1.7,
    hold: 50,
  };

  const onSubmit = (
    values = initialValues,
    { setSubmitting }: FormikHelpers<OptionsValues>
  ) => {
    console.log(values);
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
