import React from "react";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Typography, Stack, Button } from "@mui/material";

const onSubmit = (values) => {
  console.log(values);
};
const validationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  gender: Yup.string(),
});

function FormikComp() {
  return (
    <>
      <Formik
        initialValues={{ email: "", password: "", gender: "" }}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        <Form>
          <Stack
            spacing={2}
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "300px",
            }}
          >
            <Stack>
              <Typography variant="h6">Email</Typography>
              <Field id="email" type="email" name="email"></Field>
              <ErrorMessage name="email"></ErrorMessage>
            </Stack>
            <Stack>
              <Typography variant="h6">Password</Typography>
              <Field id="password" type="password" name="password"></Field>
              <ErrorMessage name="password"></ErrorMessage>
            </Stack>
            <Stack direction="row">
              <Typography variant="h6">gender</Typography>
              <Field type="radio" name="gender" value="male" />
              Male
              <Field type="radio" name="gender" value="female" />
              Female
            </Stack>
            <Button type="submit" variant="contained" sx={{ mt: 2 }}>
              Submit
            </Button>
          </Stack>
        </Form>
      </Formik>
      
    </>
  );
}

export default FormikComp;
