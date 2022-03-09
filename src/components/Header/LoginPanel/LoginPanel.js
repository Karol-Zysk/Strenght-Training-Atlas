import React from "react";
import { useContext } from "react";
import { LoginContext } from "../../../context/loginContext";
import { useNavigate } from "react-router-dom";
import style from "../header.module.css";

const LoginPanel = () => {
  let [loginName, setLoginName] = useContext(LoginContext);

  let navigate = useNavigate();

  const logoutHandler = () => {
    localStorage.removeItem("token");
    setLoginName("");
    navigate("/login");
  };
  return (
    <div className={style.loginPanel}>
      <p className={style.loginPanel_paragraph}>Hello {loginName}</p>
      {!loginName ? (
        <div className={style.loginPanel_btn_div}>
          <button
            className={style.loginPanel_btn}
            onClick={() => navigate("/register")}
          >
            Register
          </button>
          <button
            className={style.loginPanel_btn}
            onClick={() => navigate("/login")}
          >
            Sign Up
          </button>
        </div>
      ) : (
        <button className={style.loginPanel_btn} onClick={logoutHandler}>
          Logout
        </button>
      )}
    </div>
  );
};

export default LoginPanel;
