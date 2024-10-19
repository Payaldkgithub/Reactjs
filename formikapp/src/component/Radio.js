import React from "react";
import { Formik, Field, Form } from "formik";

const Radio = () => {
  return (
    <Formik
      initialValues={{ favoriteColor: "" }}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {() => (
        <Form>
          <div>
            <label>
              <Field type="radio" name="favoriteColor" value="red" />
              Red
            </label>
            <label>
              <Field type="radio" name="favoriteColor" value="blue" />
              Blue
            </label>
            <label>
              <Field type="radio" name="favoriteColor" value="green" />
              Green
            </label>
          </div>
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
};

export default Radio;
