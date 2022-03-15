import React from "react";
import style from "./Home.module.css";

const HomeCard = () => {
  return (
    <>
      <div className={style.home_card}> <h2 className={style.home_card_h3}>
        Page created by an enthusiast of strength sports.
      </h2>
      <p className={style.home_card_paragraph}>
        For those who want to learn more about <b>Strenght Training.</b>
      </p>

      <ul className={style.home_card_ul}>
        <li>
          You will find here, above all, in the Exercises tab, <u>hundreds of
          exercises</u> divided into muscle groups. Each exercise has an <b>animation </b> 
          and a short description.
        </li>
        
        <li><u>Basic principles</u> of strength training in the Basics tab</li>
        <li>
          After logging in, a tab with articles written by <b><u>Our Trainers </u></b> is
          available.
        </li>
        <li>
          If you have any questions, feel free to contact our experts. you can
          find contacts to them in the contacts tab.
        </li>
      </ul></div>
     
    </>
  );
};

export default HomeCard;
