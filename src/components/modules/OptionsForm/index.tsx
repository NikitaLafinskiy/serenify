import { Button, Header } from "components/elements";
import { FormikSlider } from "components/elements";
import { OptionsFormProps } from "components/models/modules";
import { Form } from "formik";
import "./OptionsForm.scss";

export default function OptionsForm({ formik }: OptionsFormProps) {
  return (
    <div className='modules__options-form'>
      <Form>
        <Header>Options: </Header>
        <FormikSlider
          name='breaths'
          label='Amount of breaths:'
          min={1}
          max={100}
          step={1}
        />
        <FormikSlider
          name='inhale'
          label='Inhale length: '
          min={0.1}
          max={20}
          step={0.1}
        />
        <FormikSlider
          name='exhale'
          label='Exhale length: '
          min={0.1}
          max={20}
          step={0.1}
        />
        <FormikSlider
          name='hold'
          label='Hold length: '
          min={0}
          max={200}
          step={1}
        />
        <Button type='submit' disabled={!formik.dirty || formik.isSubmitting}>
          {formik.isSubmitting ? "Applying..." : "Apply"}
        </Button>
      </Form>
    </div>
  );
}
