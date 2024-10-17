import { useState } from "react";
const ControlledFunction = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [userErr, setUserErr] = useState("");
  function handleUsername(e) {
    let value = e.target.value;
    if (value.length < 6) setUserErr("Username is too short");
    else setUserErr("");
    setUsername(e.target.value);
  }
  const submitHandler = (e) => {
    e.preventDefault();
    if (!username || !password) {
      alert("Username and Password is required");
    } else {
      console.log(username);
      console.log(password);
    }
  };
  return (
    <div>
      <h1>Controlled Function component</h1>
      <form>
        <label>UserName</label>
        <input
          type="text"
          name="username"
          onChange={handleUsername}
          value={username}
        />
        <span style={{ color: "red" }}>{userErr}</span>
        <br />
        <br />
        <label>Password</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <br />
        <button type="submit" onClick={submitHandler}>
          LogIn
        </button>
        <h1>Username: {username}</h1>
        <h1>Password: {password}</h1>
      </form>
    </div>
  );
};
export default ControlledFunction;
