import React from "react";
import jwt from "jsonwebtoken";
import { createContext } from "react";
import { useNavigate } from "react-router-dom";

export const LoginContext = createContext();

export const LoginProvider = ({ children }) => {
  const navigate = useNavigate();
  const [loginName, setLoginName] = React.useState();
  async function getName() {
    const req = await fetch("http://localhost:3001/api/name", {
      headers: {
        "x-access-token": localStorage.getItem("token"),
      },
    });
    const data = await req.json();
    if (data.status === "ok") {
      setLoginName(data.name);
    } else {
      console.log(data.error);
    }
  }
  const elo = () => {
    const token = localStorage.getItem("token");
    if (token) {
      const user = jwt.decode(token);
      if (!user) {
        localStorage.removeItem("token");
        navigate("/login");
      } else {
        getName();
      }
    }
  };

  elo();

  return (
    <LoginContext.Provider value={{ name: loginName }}>
      {children}
    </LoginContext.Provider>
  );
};
