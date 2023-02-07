import React, { useContext } from "react";
import { AppContext } from "./UseContextHook";

const User = () => {
  const { userName } = useContext(AppContext);
  return (
    <div>
      <h3>{userName}</h3>
    </div>
  );
};

export default User;
