import React, { useRef, useState } from "react";

function Seven() {
  let [count, setCount] = useState(0);
  let [scount, setScount] = useState(0);
  let [btn, setButton] = useState([]);
  let divRef = useRef();

  let btnStyle = {
    height: "80px",
    width: "150px",
    margin: "30px 10px",
    color: "white",
    fontSize: "18px",
    boxShadow:"0 0 5px black"
  };
  let divStyle = {
    marginTop: "100px",
    display: "flex",
    flexWrap: "wrap",
    gap: "10px",
  };

  function createCircle() {
    setCount(count + 1);
    let btnTag = document.createElement("button");
    btnTag.setAttribute(
      "style",
      "height:100px;width:100px;border-radius:100%;background-color:green"
    );
    btn.push(btnTag);
    divRef.current.appendChild(btnTag);
  }
  function deleteCircle() {
    let c = 0;
    for (let b of btn) {
      if (b.style.backgroundColor === "red") {
        b.setAttribute("style", "display:none");
        setScount(0);
      }
      if (b.style.backgroundColor === "green") c = c + 1;
      setCount(c);
    }
  }

  for (let b of btn) {
    b.addEventListener("click", function () {
      b.setAttribute(
        "style",
        "height:100px;width:100px;border-radius:100%;background-color:red"
      );
      setScount(scount + 1);
    });
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
        <h3>Total No. of Circle Created={count}</h3>
        <h3>Total No. of Circle Selected={scount}</h3>
      </center>
      <div style={divStyle} ref={divRef}></div>
    </div>
  );
}

export default Seven;
