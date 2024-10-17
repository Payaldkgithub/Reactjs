import React from "react";
import { Component } from "react";

function Props({ name, course, data, children }) {
  return (
    <div>
      <h1>{name}</h1>
      <h1>{course}</h1>
      <h1>{data.id}</h1>
      <h1>{data.name}</h1>
      <h1>{data.age}</h1>
      <h1>{children}</h1>
    </div>
  );
}
export class PropsExample extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <>
        <h1>{this.props.name}</h1>
        <h1>{this.props.course}</h1>
        <h1>{this.props.children}</h1>
      </>
    );
  }
}

export default Props;
