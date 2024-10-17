import React from "react";
import { useEffect } from "react";
import { useState } from "react";

function UseEffect() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(10);
  //useEffect without second argument
  useEffect(() => {
    //execute after every render of component
    //setCount1(count1+1) we cant set state here it will be  infinite
    console.log("1st useEffect syntax");
  });
  //useEffect with empty dependancy array as second argument
  useEffect(() => {
    //to perform any sideeffects after the initial render or one time
    //it execute only for once after 1st render
    console.log("useEffect  with empty dependancy array");
  }, []);
  //useEffect with dependancies array as second arg
  useEffect(() => {
    //execute only after the dependancie array state or props updation
    //use to perform some sidEffects or operation with depending on the
    //props or state values
    console.log("useEffect with dependencies");
  }, [count1]);
  useEffect(() => {
    console.log("this is the 4th syntax");
    return () => {
      console.log("clean-up function");
    };
  });
  return (
    <>
      {console.log("this is render()")}
      <h1>useEffect() hook</h1>
      <h1>Count1={count1}</h1>
      <h1>Count2={count2}</h1>
      <button onClick={() => setCount1(count1 + 1)}>Change count1</button>
      &nbsp;&nbsp;
      <button
        onClick={() => {
          setCount2(count2 + 10);
        }}
      >
        Change count2
      </button>
    </>
  );
}

export default UseEffect;
