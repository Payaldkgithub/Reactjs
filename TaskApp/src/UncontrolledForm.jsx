import React from "react";
import { useRef } from "react";

function UncontrolledForm() {
  const username = useRef(null);
  const password = useRef(null);
  const data = useRef(0);
  function incrementdata() {
    data.current = data.current + 1;
    console.log(data.current);
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(username.current.value);
    console.log(password.current.value);
    e.target.reset();
  }
  return (
    <div>
      <h1>{data.current}</h1>
      <button onClick={incrementdata}>Increment</button>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input type="text" ref={username} />
        <label>Password</label>
        <input type="password" ref={password} />
        <input type="submit" />
      </form>
    </div>
  );
}

export default UncontrolledForm;
