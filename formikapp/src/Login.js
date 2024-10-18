import React, { useState } from "react";
import { Button, Stack, TextField, Typography } from "@mui/material";
import { useFormik } from "formik";

function Login() {
  const [user, setUser] = useState("");
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },

    onSubmit: (values) => {
      setUser(formik.values.email);
      formik.values.email = "";
      formik.values.password = "";
    },
  });
  return (
    <>
      {console.log(formik)}
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
            <Typography variant="h6">Email</Typography>
            <TextField
              id="email"
              type="email"
              onChange={formik.handleChange}
              value={formik.values.email}
              variant="outlined"
            ></TextField>
          </Stack>
          <Stack>
            <Typography variant="h6">Password</Typography>
            <TextField
              id="password"
              type="password"
              onChange={formik.handleChange}
              value={formik.values.password}
              variant="outlined"
            ></TextField>
          </Stack>
          <Button type="submit" variant="contained" sx={{ mt: 2 }}>
            Submit
          </Button>
          <Typography>{user && `Hello ${user}`}</Typography>
        </Stack>
      </form>
      {/* <form onSubmit={formik.handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          //   id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        <button type="submit">submit</button>
      </form> */}
    </>
  );
}

export default Login;
