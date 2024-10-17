import React from "react";
import { useCallback } from "react";
import { useState, useEffect, useRef } from "react";

function PasswordGenerator() {
  const [length, setLength] = useState(8);
  const [password, setPasseord] = useState("");
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [characterAllowed, setCharacterAllowed] = useState(false);
  let mystyle = {
    margin: "auto",
    height: "220px",
    width: "500px",
    backgroundColor: "gray",
    borderRadius: "10px",
    textAlign: "center",
  };
  const passRef = useRef(null);
  const PasswordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (characterAllowed) str += "~!@$%^&*()_+{}|><?";
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPasseord(pass);
  }, [length, numberAllowed, characterAllowed, setPasseord]);
  useEffect(() => {
    PasswordGenerator();
  }, [length, numberAllowed, characterAllowed, PasswordGenerator]);
  const copyPasswordToClipboard = useCallback(() => {
    passRef.current?.select();
    passRef.current?.setSelectionRange(0, 20);
    window.navigator.clipboard.writeText(password);
  }, [password]);
  return (
    <>
      <div
        style={{
          backgroundColor: "black",
          height: "98vh",
          color: "orange",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div style={mystyle}>
          <h1>Password Generator</h1>
          <input
            type="text"
            value={password}
            readOnly
            style={{ width: "280px", height: "30px", borderRadius: "5px" }}
            placeholder="password"
            ref={passRef}
          />
          <button
            style={{
              height: "35px",
              width: "60px",
              color: "white",
              backgroundColor: "Blue",
              borderRadius: "5px",
              marginLeft: "5px",
            }}
            onClick={copyPasswordToClipboard}
          >
            Copy
          </button>
          <div style={{ marginTop: "20px" }}>
            <input
              type="range"
              min={6}
              max={20}
              value={length}
              onChange={(e) => setLength(e.target.value)}
            ></input>
            <span>Length:{length}</span>
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              onChange={(e) => {
                setNumberAllowed((prev) => !prev);
              }}
            ></input>
            Number
            <input
              type="checkbox"
              defaultChecked={characterAllowed}
              onChange={(e) => {
                setCharacterAllowed((prev) => !prev);
              }}
            ></input>
            Character
          </div>
        </div>
      </div>
    </>
  );
}

export default PasswordGenerator;
