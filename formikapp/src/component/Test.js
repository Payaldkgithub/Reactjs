import React from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import { Button, Stack, TextField, Typography } from "@mui/material";
const validationSchema = Yup.object({
  email: Yup.string().email("Enter valid email").required("Email is required"),
  password: Yup.string()
    .required("Password is required")
    .min(6, "Password at least 6 character"),
});
function Test() {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      console.log(formik);
      formik.resetForm();
    },
    validationSchema: validationSchema,
    // validate: (values) => {
    //   let errors = {};
    //   if (!values.email) errors.email = "Email is required";
    //   if (!values.password) errors.password = "password is required";
    //   return errors;
    // },
  });
  return (
    <>
      <Stack spacing={2} width="250px">
        <form onSubmit={formik.handleSubmit}>
          <Stack>
            <Typography variant="h6">Email</Typography>
            <TextField
              variant="standard"
              id="email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            ></TextField>
            {formik.touched.email && formik.errors.email ? (
              <div style={{ color: "red" }}>{formik.errors.email}</div>
            ) : null}
            <Typography variant="h6">Password</Typography>
            <TextField
              variant="standard"
              id="password"
              name="password"
              type="password"
              onChange={formik.handleChange}
              value={formik.values.password}
            ></TextField>
            {formik.touched.password && formik.errors.password ? (
              <div style={{ color: "red" }}>{formik.errors.password}</div>
            ) : null}
          </Stack>
          <Stack>
            <Button type="submit" variant="contained">
              Submit
            </Button>
          </Stack>
        </form>
      </Stack>
    </>
  );
}

export default Test;
