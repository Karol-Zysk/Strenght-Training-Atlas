import React from "react";
import style from "./Home.module.css";

const HomeCard = () => {
  return (
    <div className={style.container}>
      <div className={style.home_card}>
        <h1 className={style.home_card_h1}>Strenght Training bible</h1>
        <h2 className={style.home_card_h2}>From who:</h2>
        <p className={style.home_card_paragraph}>
          The website was created by an enthusiast of strength sports.
        </p>
        <h2 className={style.home_card_h2}>For who:</h2>
        <p className={style.home_card_paragraph}>
          For those who want to learn more about Strenght Training topic.
        </p>
        <h2 className={style.home_card_h2}>What can you learn out here?</h2>

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
      </div>
    </div>
  );
};

export default HomeCard;
