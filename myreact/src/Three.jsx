import { useState } from "react";
export function Three() {
  let [str, setString] = useState("");
  let [noOfchar, setChar] = useState("");
  let [noOfword, setWord] = useState("");
  //let word = 0;
  let char;
  function charCounter(e) {
    char = e.target.value;
    setString(e.target.value);
    setChar(char.trim().length);
    setWord(char.trim().split(" ").length);
    // for (let i = 0; i <= char.trim().length; i++) {
    //   let currChar = char[i];
    //   if (currChar === " ") word++;
    //   setWord(word + 1);
    // }
  }
  function removeString() {
    setChar("");
    setWord("");
    setString("");
  }
  function strTouppercase() {
    let upperstr = str.toUpperCase();
    setString(upperstr);
  }
  function backspace() {
    let rs = str.slice(0, -1);
    setString(rs.trim());
    setChar(rs.trim().length);
    setWord(rs.split(" ").length);
    // for (let i = 0; i <= rs.trim().length; i++) {
    //   let currChar = rs[i];
    //   if (currChar === " ") word++;
    //   setWord(word + 1);
    // }
  }

  return (
    <div className="main">
      <section>
        <textarea
          onChange={charCounter}
          style={{ height: "50px" }}
          value={str}
        ></textarea>
        <h1>No of Words:{noOfword}</h1>
        <h1>No of Chars:{noOfchar}</h1>
        <button className="btn" onClick={removeString}>
          Delete
        </button>
        &nbsp;
        <button className="btn" onClick={strTouppercase}>
          UpperCase
        </button>
        &nbsp;
        <button className="btn" onClick={backspace}>
          Backspace
        </button>
      </section>
    </div>
  );
}
export default Three;
