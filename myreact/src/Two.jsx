import { useState } from "react";
export function Two() {
  let [bgColor, setColor] = useState("white");
  function changeBackground(e) {
    setColor(e.target.value);
  }
  return (
    <div className="main" style={{ backgroundColor: bgColor }}>
      <input
        type="text"
        onChange={changeBackground}
        style={{
          height: "30px",
          width: "200px",
          borderRadius: "5px",
          fontSize: "20px",
        }}
      />
    </div>
  );
}
export default Two;
