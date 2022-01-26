import React from "react";
import style from "./header.module.css";
import image from "./STAP.png";

export const Header = ({ showTabFN, showContacts, setShowContacts }) => {
  return (
    <div className={style.header}>
      <img className={style.image} src={image} alt="logo" />
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
