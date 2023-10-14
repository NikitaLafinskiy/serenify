import { Button, Form, Input, Header, Text } from "components/elements";
import { AuthFormProps } from "components/models/modules";
import { authSlice } from "store/auth/AuthSlice";
import { useAppDispatch, useAppSelector } from "store/hooks/redux.hooks";
import "./AuthForm.scss";

export default function AuthForm({ formik }: AuthFormProps) {
  const { isSignUp } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();

  return (
    <div className='modules__auth-form'>
      <Form>
        <Header>{isSignUp ? "Sign up:" : "Log in:"}</Header>
        <Input name='username' />
        <Input name='password' />
        <Button type='submit' disabled={!formik.dirty || formik.isSubmitting}>
          {formik.isSubmitting ? "Submitting..." : "Submit"}
        </Button>
      </Form>
      <Text
        handleClick={() => {
          dispatch(authSlice.actions.setIsSignUp(!isSignUp));
        }}
      >
        {isSignUp
          ? "Already signed up? Log in!"
          : "Don't have an account? Sign up!"}
      </Text>
    </div>
  );
}
