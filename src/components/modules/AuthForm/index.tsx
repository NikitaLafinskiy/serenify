import { Button, Form, Input, Header } from "components/elements";
import { AuthFormProps } from "components/models/modules";
import { useAppSelector } from "store/hooks/redux.hooks";
import "./AuthForm.scss";

export default function AuthForm({ formik }: AuthFormProps) {
  const { isSignUp } = useAppSelector((state) => state.auth);
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
    </div>
  );
}
