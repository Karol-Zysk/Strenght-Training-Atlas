import React from "react";
import style from "../components/Main/Exercises/Main.module.css";
import Legs from "../components/Main/Exercises/Muscle_groups/Legs/Legs";
import Waist from "../components/Main/Exercises/Muscle_groups/Waist/Waist";
import Back from "../components/Main/Exercises/Muscle_groups/Back/Back";
import Arms from "../components/Main/Exercises/Muscle_groups/Arms/Arms";
import { Link, Route, Routes } from "react-router-dom";
import Chest from "../components/Main/Exercises/Muscle_groups/Chest/Chest";
import MuscleInfo from "../components/Main/Exercises/Muscle_groups/MuscleInfo/MuscleInfo";

const MainNavbar = () => {
  return (
    <>
      <div className={style.main_navbar}>
        <ul className={style.nav_links}>
          <Link to="/exercises/waist" className={style.nav_links_li}>
            Abs
          </Link>
          <Link to="/exercises/back" className={style.nav_links_li}>
            Back
          </Link>
          <Link to="/exercises/arms" className={style.nav_links_li}>
            Arms
          </Link>
          <Link to="/exercises/chest" className={style.nav_links_li}>
            Chest
          </Link>
          <Link to="/exercises/legs" className={style.nav_links_li}>
            Legs
          </Link>
        </ul>
      </div>
      <Routes>
        <Route path="/" element={<MuscleInfo />}></Route>
        <Route path="/legs" element={<Legs />}></Route>
        <Route path="/waist" element={<Waist />}></Route>
        <Route path="/back" element={<Back />}></Route>
        <Route path="/arms" element={<Arms />}></Route>
        <Route path="/chest" element={<Chest />}></Route>
      </Routes>
    </>
  );
};

export default MainNavbar;
