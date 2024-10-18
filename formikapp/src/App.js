import React from "react";
import Login from "./Login";
import SignUp from "./SignUp";
import MyForm from "./Login2";
import YoutubeForm from "./component/YoutubeForm";
function App() {
  return (
    <>
      <YoutubeForm/>
      <MyForm></MyForm>
      <SignUp />
      <Login></Login>
    </>
  );
}

export default App;
