import React, { Component } from "react";

export class ClassLifecycle extends Component {
  constructor() {
    //1st method of mounting phase which initilize the variable and state
    super();
    this.state = { count: 0, color: "red" };
  }
  static getDerivedStateFromProps(props, state) {
    //2nd method of mounting phase and it returns state value from props data
    //this method is also the 1st method of updateing phase which everytime updates the state value with props data after every state or props updation
    console.log("this is getDerivedStateFromProps()");
    return { color: props.color };
  }
  componentDidMount() {
    //last method of mounting phase
    //it executes only for once after the initial render of the component
    //it is used for the side effects like data fetching and asynchornous operations
    console.log("this is componentDidMount()");
  }
  shouldComponentUpdate() {
    //this is the 2nd method of updation phase which defines the component will re-render or not
    //it return boolen value the default return type true
    console.log("this is shouldComponentUpdate()");
    return true;
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    //this method is used to get the values of previous props and state data
    //using those we can perform any operation in the component
    //this method should be used along with the componentDidUpdate() method
    console.log("this is getSnapshotBeforeUpdate");
    console.log(prevProps, prevState);
    return null;
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    //to perform any side effects for the component after updation of state or props data
    //this method is the last method of updation phase,it executes after component re-render
    console.log("This is componentDidUpdate");
    console.log(prevProps, prevState, snapshot);
  }
  componentWillUnmount() {
    //this method executes when the component is going to be remove from DOM
    //this is used for the clean-up functionalitty of the state or props values of the component
    console.log("this is componentWillUnmount");
  }
  render() {
    //3rd method of mounting method executes after the derived method
    console.log("this is render()");
    return (
      <>
        <h1 style={{ color: this.state.color }}>Class Life Cycle Methods</h1>
        <h1>{this.state.count}</h1>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Change Count
        </button>
        <button
          onClick={() => {
            color: this.setState({ color: "blue" });
          }}
        >
          Change color
        </button>
      </>
    );
  }
}

export default ClassLifecycle;
