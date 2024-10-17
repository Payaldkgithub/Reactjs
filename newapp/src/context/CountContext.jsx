import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";
const countContext = createContext();

export const CountContextWrapper = (props) => {
  let [count, setCount] = useState(0);
  return (
    <countContext.Provider value={{ count, setCount }}>
      {props.children}
    </countContext.Provider>
  );
};
//consume(custom hook)
export const useCount = () => {
  return useContext(countContext);
};
