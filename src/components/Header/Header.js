import React from "react";
import style from "./header.module.css";
import logo from "./logo.PNG";

export const Header = ({ showTabFN, showContacts, setShowContacts }) => {
  return (
    <>
      <header className={style.header}>
        <img className={style.logo} src={logo} alt="logo"></img>
        <nav>
          <ul className={style.nav_links}>
            <li className={style.nav_links_li}>Basics</li>
            <li className={style.nav_links_li}>Exercises</li>
            <li className={style.nav_links_li}>Articles</li>
            <li class={style.nav_links_li}>
              <button
                className={style.btn}
                onClick={() => showTabFN(showContacts, setShowContacts)}
              >
                Ask Trainer
              </button>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
