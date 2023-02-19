import * as yup from "yup";

export const authValidator = yup.object().shape({
  username: yup
    .string()
    .required("Username field is required")
    .min(5, "The username must be at least 5 characters long")
    .max(20, "The username must not be longer than 20 characters"),
  password: yup
    .string()
    .required("Password field is required")
    .min(8, "The password must be at least 8 characters long")
    .max(30, "The username must not be longer than 30 characters"),
});
