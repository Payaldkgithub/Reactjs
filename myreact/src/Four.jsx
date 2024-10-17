import { useState } from "react";
import React, { useRef } from "react";
export function Four() {
  const inputRed = useRef();
  const inputGreen = useRef();
  const inputBlue = useRef();
  let [red, setRed] = useState("0");
  let [green, setgreen] = useState("0");
  let [blue, setBlue] = useState("0");
  let [redErr, setRedErr] = useState("");
  let [greenErr, setGreenErr] = useState("");
  let [blueErr, setBlueErr] = useState("");

  function handleRed(e) {
    if (e.target.value < 0 || e.target.value > 255) {
      setRedErr("value must be in between 0 and 255");
    } else setRedErr("");
  }
  function handleGreen(e) {
    if (e.target.value < 0 || e.target.value > 255) {
      setGreenErr("value must be in between 0 and 255");
    } else setGreenErr("");
  }
  function handleBlue(e) {
    if (e.target.value < 0 || e.target.value > 255) {
      setBlueErr("value must be in between 0 and 255");
    } else setBlueErr("");
  }
  function rgbHandler() {
    setRed(inputRed.current.value);
    setgreen(inputGreen.current.value);
    setBlue(inputBlue.current.value);
  }

  return (
    <div className="main">
      <section>
        <label>Red</label>
        <input
          type="text"
          class="rgb"
          ref={inputRed}
          onChange={handleRed}
          placeholder="0-255"
        />
        <span>{redErr}</span>
        <br />
        <br />
        <label>Green </label>
        <input
          type="text"
          class="rgb"
          ref={inputGreen}
          onChange={handleGreen}
          placeholder="0-255"
        />
        <span>{greenErr}</span>
        <br />
        <br />
        <label>Blue</label>
        <input
          type="text"
          id="red"
          className="rgb"
          ref={inputBlue}
          onChange={handleBlue}
          placeholder="0-255"
        />
        <span>{blueErr}</span>
        <br />
        <br />
        <button className="btn" type="submit" onClick={rgbHandler}>
          Generate
        </button>

        <div
          style={{
            height: "50px",
            width: "50px",
            backgroundColor: `rgb(${red},${green},${blue})`,
            padding: "10px",
            position: "relative",
            left: "200px",
          }}
        ></div>
      </section>
    </div>
  );
}
