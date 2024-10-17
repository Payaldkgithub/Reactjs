import { useState } from "react";

function Five() {
  const [flag, setColor] = useState(true);

  let mystyle = {
    backgroundColor: flag ? "blue" : "red",
  };
  function changeColor() {
    setColor(!flag);
  }
  return (
    <>
      <div className="main" style={mystyle}>
        <button onClick={changeColor} style={{ padding: "10px" }}>
          {flag ? "blue" : "red"}
        </button>
      </div>
    </>
  );
}
export default Five;
