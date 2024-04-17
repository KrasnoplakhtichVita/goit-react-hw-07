import { Formik, Form, Field, ErrorMessage } from "formik";
import css from "./ContactForm.module.css";
import { nanoid } from "nanoid";
import * as Yup from "yup";

const FeedbackSchema = Yup.object().shape({
  name: Yup.string()
    .trim()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required!"),
  number: Yup.string()
    .trim()
    .min(7, "Too Short!")
    .max(12, "Too Long!")
    .required("Required!"),
});

const ContactForm = ({ onAdd }) => {
  const nameFieldId = nanoid();
  const numberFieldId = nanoid();

  const handleSubmit = (values, action) => {
    console.log(values);
    action.resetForm();
    onAdd({
      id: nameFieldId,
      name: values.name,
      number: values.number,
    });
  };
  return (
    <Formik
      initialValues={{
        name: "",
        number: "",
      }}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      <Form className={css.form}>
        <label htmlFor={nameFieldId} className={css.label}>
          Name
        </label>
        <Field type="text" name="name" id={nameFieldId} className={css.input} />
        <ErrorMessage className={css.error} name="name" component="span" />

        <label htmlFor={numberFieldId} className={css.label}>
          Number
        </label>
        <Field
          type="text"
          name="number"
          id={numberFieldId}
          className={css.input}
        />
        <ErrorMessage className={css.error} name="number" component="span" />

        <button type="submit" className={css.button}>
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
