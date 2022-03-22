import React from "react";
import { createContext } from "react";

import useFetch from "./useFetch";

export const LoginContext = createContext();

export const LoginProvider = ({ children }) => {
  const { loginName, setLoginName  } = useFetch();
  

  return (
    <LoginContext.Provider value={[loginName, setLoginName]}>
      {children}
    </LoginContext.Provider>
  );
};
