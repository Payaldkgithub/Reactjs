import { createContext, useContext } from "react";
//creating
const userContext = createContext();
//providing component(wrapper component)

export const UserConextWrapper = (props) => {
  let user = { username: "payal", age: "25", address: "Banglore" };
  return (
    <userContext.Provider value={user}>{props.children}</userContext.Provider>
  );
};
//consuming
export const useUser = () => {
  return useContext(userContext);
};
