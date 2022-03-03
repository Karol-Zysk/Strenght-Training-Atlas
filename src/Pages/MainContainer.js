import React from "react";
import style from "./Pages.module.css";
import logo from "../components/files/logo.PNG";

const MainContainer = ({ children }) => {
  return (
    <>
      <div className={style.fakeNav}></div>
      <div className={style.container}>
        <div className={style.pages_card}>
          <img src={logo} alt="img" className={style.pages_card_logo}></img>
          {children}
        </div>
      </div>
    </>
  );
};

export default MainContainer;
