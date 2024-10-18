import React from "react";
import { useFormik } from "formik";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";

import * as Yup from "yup";

const validationSchema = Yup.object({
  username: Yup.string().required("Username is required"),
  email: Yup.string()
    .email("invalid email format")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "password must be 6 character")
    .required("Password is required"),
  mobileno: Yup.number()
    .min(10)
    .max(12, "enter valid mmobile no")
    .required("Mobile no is required"),
});

function SignUp() {
  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      mobileno: "",
      city: "",
    },
    onSubmit: (values) => {
      formik.resetForm();
    },
    validationSchema: validationSchema,
  });
  return (
    <>
      <Box sx={{ width: "300px", margin: "auto" }}>
        <Typography variant="h4" color="success" gutterBottom>
          SignUp Form
        </Typography>
        <Stack>
          <form onSubmit={formik.handleSubmit}>
            <Stack spacing={1}>
              <Typography variant="h6">Username</Typography>
              <TextField
                id="username"
                type="text"
                color="secondary"
                // value={formik.values.username}
                // onChange={formik.handleChange}
                // onBlur={formik.handleBlur}
                {...formik.getFieldProps("username")}
                variant="outlined"
                size="small"
              ></TextField>
              {formik.touched.username && formik.errors.username ? (
                <div style={{ color: "red" }}>{formik.errors.username}</div>
              ) : null}

              <Typography variant="h6">Email</Typography>
              <TextField
                id="email"
                type="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                variant="outlined"
                size="small"
              ></TextField>
              {formik.touched.email && formik.errors.email ? (
                <div style={{ color: "red" }}>{formik.errors.email}</div>
              ) : null}

              <Typography variant="h6">Password</Typography>
              <TextField
                id="password"
                type="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                variant="outlined"
                size="small"
              ></TextField>
              {formik.touched.password && formik.errors.password ? (
                <div style={{ color: "red" }}>{formik.errors.password}</div>
              ) : null}

              <Typography variant="h6">Mobile no</Typography>
              <TextField
                id="mobileno"
                type="number"
                value={formik.values.mobileno}
                onChange={formik.handleChange}
                variant="outlined"
                size="small"
              ></TextField>
              {formik.touched.mobileno && formik.errors.mobileno ? (
                <div style={{ color: "red" }}>{formik.errors.mobileno}</div>
              ) : null}

              <Typography variant="h6">city</Typography>
              <TextField
                id="city"
                type="text"
                value={formik.values.city}
                onChange={formik.handleChange}
                variant="outlined"
                size="small"
              ></TextField>
              <Button type="submit" variant="contained" color="secondary">
                Submit
              </Button>
            </Stack>
          </form>
        </Stack>
      </Box>
    </>
  );
}

export default SignUp;
