import React from "react";
import style from "./Main.module.css";
import { exerciseDescription } from "./text";

const BigCard = ({ check }) => {
  let randomExerciseDescription =
    exerciseDescription[Math.floor(Math.random() * exerciseDescription.length)];

  return (
    <div className={style.big_card}>
      <p className={style.big_card_span}>{check.name}</p>
      <div style={{ display: "grid" }}>
        <img src={check.gifUrl} alt="img" className={style.big_card_img}></img>
        <div className={style.big_card_description_div}>
          <p className={style.big_card_target}>Target Muscle: {check.target}</p>
          <p className={style.big_card_description}>
            Description:<br></br>
            {randomExerciseDescription}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BigCard;
