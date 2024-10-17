import { createContext, useContext } from "react";
const studentContext = createContext();

export const StudentWrapper = ({ children }) => {
  let obj = { name: "payal", city: "blr" };
  return (
    <studentContext.Provider value={obj}>{children}</studentContext.Provider>
  );
};

export const useStudent = () => {
  return useContext(studentContext);
};
