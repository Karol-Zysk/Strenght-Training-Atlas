import React from "react";
import style from "./header.module.css";
import logo from "./logo.PNG";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { LoginContext } from "../../context/loginContext";

export const Header = ({ showTabFN, showContacts, setShowContacts }) => {
  let loginName = useContext(LoginContext);

  return (
    <>
      <header className={style.header}>
        <h3>Hello {loginName}</h3>
        <img className={style.logo} src={logo} alt="logo"></img>
        <nav>
          <ul className={style.nav_links}>
            <Link to="/" className={style.nav_links_li}>
              Home
            </Link>
            <Link to="/basics" className={style.nav_links_li}>
              Basics
            </Link>
            <Link to="/exercises" className={style.nav_links_li}>
              Exercises
            </Link>
            <Link to="/articles" className={style.nav_links_li}>
              Articles
            </Link>

            <li className={style.nav_links_li}>
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
