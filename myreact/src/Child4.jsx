import React from "react";
import { useUser } from "./UserContext";
function Child4() {
  const user = useUser();
  console.log(user);
  return (
    <div>
      <h1>Userame:{user.username}</h1>
      <h1>Age:{user.age}</h1>
      <h1>Address:{user.address}</h1>
    </div>
  );
}

export default Child4;
