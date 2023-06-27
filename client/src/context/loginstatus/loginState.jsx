import React, { useState } from "react";
import loginContext from "./loginContext";

const LoginState = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <loginContext.Provider value={{ loggedIn, setLoggedIn }}>
      {children}
    </loginContext.Provider>
  );
};

export default LoginState;
