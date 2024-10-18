import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Button, TextField, Stack, Typography } from "@mui/material";
const initialValues = {
  name: "",
  email: "",
  channel: "",
};
const onSubmit = (values) => {
  console.log(values);
};
const validate = (values) => {
  let errors = {};
  if (!values.name) {
    errors.name = "Name is Required";
  }
  if (!values.email) {
    errors.email = "Email is Required";
  }
  if (!values.channel) {
    errors.channel = "Channel is Required";
  }
  return errors;
};
function YoutubeForm() {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  });
  console.log(formik.errors);
  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <Stack
          spacing={2}
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "300px",
          }}
        >
          <Stack>
            <Typography variant="h6">Name</Typography>
            <TextField
              id="name"
              name="name"
              type="text"
              size="small"
              onChange={formik.handleChange}
              value={formik.values.name}
              variant="outlined"
            ></TextField>
            <Typography color="error" variant="subtitle2">
              {formik.errors.name ? formik.errors.name : null}
            </Typography>
          </Stack>
          <Stack>
            <Typography variant="h6">Email</Typography>
            <TextField
              id="email"
              name="email"
              type="email"
              size="small"
              onChange={formik.handleChange}
              value={formik.values.email}
              variant="outlined"
            ></TextField>
            <Typography color="error" variant="subtitle2">
              {formik.errors.email ? formik.errors.email : null}
            </Typography>
          </Stack>
          <Stack>
            <Typography variant="h6">Channel</Typography>
            <TextField
              id="channel"
              name="channel"
              type="text"
              size="small"
              onChange={formik.handleChange}
              value={formik.values.channel}
              variant="outlined"
            ></TextField>
            <Typography color="error" variant="subtitle2">
              {formik.errors.channel ? formik.errors.channel : null}
            </Typography>
          </Stack>
          <Button type="submit" variant="contained" sx={{ mt: 2 }}>
            Submit
          </Button>
        </Stack>
      </form>
    </>
  );
}

export default YoutubeForm;
