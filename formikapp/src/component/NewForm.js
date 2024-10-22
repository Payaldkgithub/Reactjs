import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
const validationSchema = Yup.object({
  firstname: Yup.string().required("Firstname is required").min(3),
  lastname: Yup.string().required("Lastname is required"),
  age: Yup.number().required("age is required").min(18).max(60),
});
const onSubmit = (values) => {
  console.log(values);
};
function NewForm() {
  return (
    <div>
      <Formik
        initialValues={{ firstname: "", lastname: "", age: "" }}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        <Form>
          Firstname
          <Field
            type="text"
            name="firstname"
            placeholder="Enter your name"
          ></Field>
          <ErrorMessage name="firstname"></ErrorMessage>
          Lastname
          <Field
            type="text"
            name="lastname"
            placeholder="Enter your lastname"
          ></Field>
          <ErrorMessage name="lastname"></ErrorMessage>
          Age
          <Field type="number" name="age" placeholder="Enter your age"></Field>
          <ErrorMessage name="age"></ErrorMessage>
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
}

export default NewForm;
