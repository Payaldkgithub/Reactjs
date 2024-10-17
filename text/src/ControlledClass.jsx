import { Component } from "react";
class ControlledClass extends Component {
  constructor() {
    super();
    this.state = "";
  }
  handleUsername = (e) => {
    this.setState({ username: e.target.value });
  };
  submitHandler = (e) => {
    e.preventDefault();
    if (!this.state.username || !this.state.password) {
      alert("Username and Password is required!!!");
    } else {
      console.log(this.state.username);
      console.log(this.state.password);
    }
  };
  render() {
    return (
      <div>
        <h1>Controlled Class Component</h1>
        <form>
          <label>UserName</label>
          <input type="text" onChange={this.handleUsername} />
          <br />
          <br />
          <label>Password</label>
          <input
            type="password"
            onChange={
              (this.handlePassword = (e) =>
                this.setState({ password: e.target.value }))
            }
          />
          <br />
          <br />
          <button type="submit" onClick={this.submitHandler}>
            LogIn
          </button>
        </form>
        <h1>Username :{this.state.username}</h1>
        <h1>Password :{this.state.password}</h1>
      </div>
    );
  }
}
export default ControlledClass;
