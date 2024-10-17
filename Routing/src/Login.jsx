import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Login() {
  const navigate = useNavigate();
  const [user, setUsername] = useState("");
  const [pass, setPassword] = useState("");
  const userObj = { username: "payaldk", password: "123456" };
  function handleUsername(e) {
    setUsername(e.target.value);
  }
  // function handlePassword(e) {
  //   setPassword(e.target.value);
  // }
  function handleSubmit(e) {
    e.preventDefault();
    if (!user || !pass) {
      alert("username and password is required");
    } else if (user.length < 6 || pass.length < 6) {
      alert("provide currect inputs");
    } else {
      if (user == userObj.username && pass == userObj.password) {
        navigate("/");
        // <Navigate to="/"></Navigate>;
      } else {
        alert("incorrect username and password");
      }
    }
  }
  return (
    <>
      <h1>Login to the website</h1>
      <form onSubmit={handleSubmit}>
        <table>
          <tr>
            <td>
              <label htmlFor="username">Username</label>
            </td>
            <td>
              <input
                type="text"
                id="username"
                value={user}
                onChange={handleUsername}
              />
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="password">Password</label>
            </td>
            <td>
              <input
                type="password"
                id="password"
                value={pass}
                onChange={(e) => setPassword(e.target.value)}
              />
            </td>
          </tr>
          <tr>
            <td>
              <button type="submit" className="btn btn-dark">
                Login
              </button>
            </td>
          </tr>
        </table>
      </form>
    </>
  );
}

export default Login;
