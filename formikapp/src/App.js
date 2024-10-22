import React from "react";
import Login from "./Login";
import SignUp from "./SignUp";
import MyForm from "./Login2";
import YoutubeForm from "./component/YoutubeForm";
import FormikComp from "./component/FormikComp";
import Radio from "./component/Radio";
import Test from "./component/Test";
import NewForm from "./component/NewForm";
function App() {
  return (
    <>
      <NewForm />
      <Radio />
      <Test />
      <Radio></Radio>
      <FormikComp />
      <YoutubeForm />
      <MyForm></MyForm>
      <SignUp />
      <Login></Login>
    </>
  );
}

export default App;
