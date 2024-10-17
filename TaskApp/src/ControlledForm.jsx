import React from "react";
import { useState } from "react";
function ControlledForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  function handleUsername(e) {
    let value = e.target.value;
    setUsername(value);
    if (username.length < 6) {
      setError("username is too short");
    } else setError("");
  }
  return (
    <div>
      <form>
        <label>Username</label>
        <input type="text" onChange={handleUsername} />
        <span>{error}</span>
        <label>Password</label>
        <input type="password" onChange={(e) => setPassword(e.target.value)} />
        <span>{error}</span>
        <h1>Username:{username}</h1>
        <h1>Password:{password}</h1>
      </form>
    </div>
  );
}

export default ControlledForm;
