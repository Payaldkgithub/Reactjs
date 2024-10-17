import { Component } from "react";
class ClassComponent extends Component {
  constructor() {
    super();
    this.state = { count: 0 };
  }
  handleClick = () => {
    console.log("btn is clicked");
    this.setState({ count: this.state.count + 1 });
    console.log(this.state.count);
  };
  decrementCount = () => {
    this.setState({ count: this.state.count - 1 });
  };
  render() {
    console.log("Render", this.state.count);
    return (
      <div>
        <h1>Class Component</h1>
        <h1>{this.state.count}</h1>
        <button onClick={this.handleClick}>Increment</button>&nbsp;
        <button onClick={this.decrementCount}>Decrement</button>
      </div>
    );
  }
}
export default ClassComponent;
