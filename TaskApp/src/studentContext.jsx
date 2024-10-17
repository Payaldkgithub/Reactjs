import { createContext, useContext } from "react";
const stdcontext = createContext();

export function StudentContextWrapper(props) {
  let std = {
    name: "Payal Prajapati",
    institute: "Jspider",
    course: "MERN",
  };
  return (
    <stdcontext.Provider value={std}>{props.children}</stdcontext.Provider>
  );
}
export const useStudent = () => {
  return useContext(stdcontext);
};
