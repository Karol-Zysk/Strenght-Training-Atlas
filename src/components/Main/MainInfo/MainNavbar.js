import React from "react";
import style from "./Main.module.css";
import Main from "./Muscle_groups/Legs/Main";
import Main4 from "./Muscle_groups/Waist/Main2";
import Main2 from "./Muscle_groups/Back/Main3";
import Main3 from "./Muscle_groups/Arms/Main4";
import { Link, Route, Routes } from "react-router-dom";
import Chest from "./Muscle_groups/Chest/Chest";

const MainNavbar = () => {
  return (
    <>
      <div className={style.main_navbar}>
        <ul className={style.nav_links}>
          <Link to="/" className={style.nav_links_li}>
            Legs
          </Link>
          <Link to="/legs" className={style.nav_links_li}>
            Waist
          </Link>
          <Link to="/back" className={style.nav_links_li}>
            Torso
          </Link>
          <Link to="/waist" className={style.nav_links_li}>
            Arms
          </Link>
          <Link to="/chest" className={style.nav_links_li}>
            Chest
          </Link>
        </ul>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/legs" element={<Main2 />}></Route>
          <Route path="/back" element={<Main3 />}></Route>
          <Route path="/waist" element={<Main4 />}></Route>
          <Route path="/chest" element={<Chest />}></Route>
        </Routes>
      </div>
    </>
  );
};

export default MainNavbar;
