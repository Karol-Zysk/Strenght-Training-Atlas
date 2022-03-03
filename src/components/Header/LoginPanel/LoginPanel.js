import React from "react";
import { useContext } from "react";
import { LoginContext } from "../../../context/loginContext";
import { useNavigate } from "react-router-dom";
import style from "../header.module.css";

const LoginPanel = () => {
  let { name: loginName } = useContext(LoginContext);

  let navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };
  return (
    <div style={{ display: "flex" }}>
      <p>Hello {loginName}</p>
      {!loginName ? (
        <>
          <button className={style.btn2} onClick={() => navigate("/register")}>
            Register
          </button>
          <button className={style.btn2} onClick={() => navigate("/login")}>
            Sign Up
          </button>
        </>
      ) : (
        <button className={style.btn2} onClick={logout}>
          LogOut
        </button>
      )}
    </div>
  );
};

export default LoginPanel;
