import React from "react";
class Fourth extends React.Component {
  constructor() {
    super();
    this.msg = "It is class based component";
  }
  render() {
    return (
      <div>
        <h1>{this.msg}</h1>
        <h2>{this.props.msg}</h2>
        <h2>Name={this.props.name}</h2>
        <h2>Age={this.props.age}</h2>
      </div>
    );
  }
}
export default Fourth;
