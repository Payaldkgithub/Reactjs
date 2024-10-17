import { useContext, useState } from "react";
import { createContext } from "react";
const colorContext = createContext();

export function ColorContextWrapper(props) {
  const [color, setColor] = useState("red");
  return (
    <colorContext.Provider value={{ color, setColor }}>
      {props.children}
    </colorContext.Provider>
  );
}

export const useColor = () => {
  return useContext(colorContext);
};
