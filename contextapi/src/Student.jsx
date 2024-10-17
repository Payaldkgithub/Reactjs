import { createContext, useContext } from "react";
const stdContext = createContext();

export const StudentContextWrapper = (props) => {
  let std = {
    fname: "Payal",
    address: "Banglore",
    course: "MERN",
    age: 25,
  };
  return (
    <stdContext.Provider value={std}>{props.children}</stdContext.Provider>
  );
};

export const useStudent = () => {
  return useContext(stdContext);
};
