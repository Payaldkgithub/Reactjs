import React from "react";
import { useState, useEffect } from "react";
import "./box.css";
import { useRef } from "react";

function Box() {
  const [boxes, setBoxes] = useState([]);
  const [start, setStart] = useState(false);
  let boxIndex = useRef();

  // const boxes = Array.from({ length: 100 });
  useEffect(() => {
    //create 50 array elements
    let newArray = [];
    for (let i = 0; i < 50; i++) {
      newArray.push({ bgColor: "" });
    }
    setBoxes(newArray);
    // setBoxes(
    //   Array.from({ length: 77 }).map((e) => {
    //     bgColor: "";
    //   })
    // );
  }, []);
  useEffect(() => {
    let interval;
    if (start) {
      interval = setInterval(() => {}, 1000);
    } else {
      clearInterval(interval);
    }
    //cleanup function
    return () => {
      clearInterval(interval);
    };
  }, [start]);

  return (
    <>
      <div className="btns">
        <button className="btn" style={{ backgroundColor: "red" }}>
          Play
        </button>
        <button className="btn" style={{ backgroundColor: "Orange" }}>
          Stop
        </button>
        <button className="btn" style={{ backgroundColor: "Green" }}>
          Reset
        </button>
      </div>
      <div className="boxes">
        {boxes.map((ele, index) => {
          return <div key={index} className="box"></div>;
        })}
      </div>
    </>
  );
}

export default Box;
