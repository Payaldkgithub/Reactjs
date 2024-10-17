import { Component } from "react";
export class StateClass extends Component {
  constructor() {
    super();
    this.state = { count: 0 };
  }
   handleClick = () => {
    this.setState({ count: this.state.count + 10 });
  };
  render() {
    console.log(this.state.count);
    return (
      <>
        {this.state.count}
        <button onClick={this.handleClick}>Increment</button>
      </>
    );
  }
}
