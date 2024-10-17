import React from "react";
import { useState } from "react";
import "./eight.css";
function Eight() {
  let [circles, setCircles] = useState([]);
  let btnStyle = {
    height: "80px",
    width: "150px",
    margin: "30px 10px",
    color: "white",
    fontSize: "18px",
    boxShadow: "0 0 5px black",
  };
  let divStyle = {
    marginTop: "100px",
    display: "flex",
    flexWrap: "wrap",
    gap: "10px",
  };

  function createCircle() {
    let obj = {
      isSelected: false,
      id: Math.trunc(Math.random() * 10000),
    };
    setCircles([...circles, obj]);
  }
  function selectedCircles(id) {
    let newCircles = circles.map((ele) => {
      if (ele.id == id) {
        ele.isSelected = !ele.isSelected;
      }
      return ele;
    });
    setCircles(newCircles);
  }
  function deleteCircle() {
    let newCircle = circles.filter((ele) => !ele.isSelected);
    setCircles(newCircle);
  }

  return (
    <div style={{ height: "98vh", width: "100%" }}>
      <center>
        <button
          style={{ ...btnStyle, backgroundColor: "green" }}
          onClick={createCircle}
        >
          Create Circle
        </button>
        <button
          style={{ ...btnStyle, backgroundColor: "Red" }}
          onClick={deleteCircle}
        >
          Delete Circle
        </button>
        <h3>Total No. of Circle Created={circles.length}</h3>
        <h3>
          Total No. of Circle Selected=
          {circles.filter((ele) => ele.isSelected).length}
        </h3>
      </center>
      <div style={divStyle}>
        {circles.map((ele) => {
          return (
            <div
              className="circle"
              style={{
                backgroundColor: ele.isSelected ? "red" : "green",
              }}
              onClick={() => selectedCircles(ele.id)}
            ></div>
          );
        })}
      </div>
    </div>
  );
}

export default Eight;
