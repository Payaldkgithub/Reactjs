import React, { useState } from "react";
import "./stopwatch.css";

function stopwatch() {
  const [time, setTime] = useState({ hr: 0, min: 0, sec: 0, milli: 0 });
  const [status, setStatus] = useState();
  let updateHr = time.hr;
  let updateMin = time.min;
  let updateSec = time.sec;
  let updateMilli = time.milli;

  const startTimer = () => {
    myFun();
    setStatus(setInterval(myFun, 10));
  };
  const stop = () => {
    clearInterval(status);
  };
  const reset = () => {
    clearInterval(status);
    setTime({ hr: 0, min: 0, sec: 0, milli: 0 });
  };
  const myFun = () => {
    updateMilli++;
    if (updateMilli === 100) {
      updateMilli = 0;
      updateSec++;
    }
    if (updateSec == 60) {
      updateSec = 0;
      updateMin++;
    }
    if (updateMin == 60) {
      updateMin = 0;
      updateHr++;
    }
    return setTime({
      hr: updateHr,
      min: updateMin,
      sec: updateSec,
      milli: updateMilli,
    });
  };

  return (
    <div className="watch">
      <div className="stopwatch">
        <h3>
          {time.hr + " : " + time.min + " : " + time.sec + " : " + time.milli}
        </h3>
        <div className="btns">
          <button
            className="btn"
            style={{ backgroundColor: "red" }}
            onClick={startTimer}
          >
            Start
          </button>
          <button
            className="btn"
            style={{ backgroundColor: "Orange" }}
            onClick={stop}
          >
            Stop
          </button>
          <button
            className="btn"
            style={{ backgroundColor: "Green" }}
            onClick={reset}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default stopwatch;
