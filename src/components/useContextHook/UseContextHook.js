import React, { createContext, useState } from "react";
import Login from "./Login";
import User from "./User";

export const AppContext = createContext(null);

const UseContextHook = () => {
  const [userName, setUserName] = useState("");
  return (
    <AppContext.Provider value={{ userName, setUserName }}>
      <h1>I am use context hook</h1>
      <Login />
      <User />
    </AppContext.Provider>
  );
};

export default UseContextHook;
