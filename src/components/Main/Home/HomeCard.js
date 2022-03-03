import React from "react";
import style from "./Home.module.css";

const HomeCard = () => {
  return (
    <>
      {/* <h1 className={style.home_card_h1}>Strenght Training bible</h1> */}

      <h2 className={style.home_card_h3}>
        Page created by an enthusiast of strength sports.
      </h2>
      <p className={style.home_card_paragraph}>
        For those who want to learn more about Strenght Training.
      </p>
      <h3 className={style.home_card_h3}>What can you learn out here?</h3>

      <ul className={style.home_card_ul}>
        <li>
          You will find here, above all, in the Exercises tab, hundreds of
          exercises divided into muscle groups. Each exercise has an animation
          and a short description.
        </li>
        <li>
          You will find here, above all, in the Exercises tab, hundreds of
          exercises divided into muscle groups. Each exercise has an animation
          and a short description.
        </li>
        <li>Basic principles of strength training in the Articles tab</li>
        <li>
          After logging in, a tab with articles written by our trainers is
          available.
        </li>
        <li>
          If you have any questions, feel free to contact our experts. you can
          find contacts to them in the contacts tab.
        </li>
      </ul>
    </>
  );
};

export default HomeCard;
