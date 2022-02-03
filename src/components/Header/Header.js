import React from "react";
import style from "./header.module.css";
import image from "./STAP.png";

export const Header = ({ showTabFN, showContacts, setShowContacts }) => {
  return (
    <div className={style.header}>
      <h1 className={style.headerH1}>Strenght Training Atlas</h1>
      <div className={style.headerNav}>
        <li>Training basics</li>
        <li onClick={() => showTabFN(showContacts, setShowContacts)}>
          Ask our trainer
        </li>
        <li>Exercises</li>
        <li>Articles</li>
      </div>
    </div>
  );
};

export default Header;
