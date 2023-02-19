import * as yup from "yup";

export const optionsValidator = yup.object().shape({
  breaths: yup
    .number()
    .required("Amont of breaths is a required field")
    .min(1, "You can not choose less than 1 breath")
    .max(999, "You can not choose more than 999 breaths"),
  inhale: yup
    .number()
    .required("Inhale length is a required field")
    .min(0.1, "You can not choose less than 100 milliseconds")
    .max(20, "You can not choose more than 20 seconds"),
  exhale: yup
    .number()
    .required("Exhale length is a required field")
    .min(0.1, "You can not choose less than 100 milliseconds")
    .max(20, "You can not choose more than 20 seconds"),
  hold: yup
    .number()
    .required("Hold length is a required field")
    .min(0, "Hold length can not be less than 0")
    .max(999, "Hold length can not be longer than 999 seconds"),
});
