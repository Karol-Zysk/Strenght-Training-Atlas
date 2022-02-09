import React from "react";
import style from "./Main.module.css";
import { LoremIpsum } from "react-lorem-ipsum";
import { exerciseDescription } from "./text";

const BigCard = ({ check }) => {
  let randomExerciseDescription =
    exerciseDescription[Math.floor(Math.random() * exerciseDescription.length)];

  return (
    <div className={style.big_card}>
      <span className={style.big_card_span}>{check.name}</span>
      <div style={{ display: "grid" }}>
        <img src={check.imgpng} alt="img" className={style.big_card_img}></img>
        <div className={style.big_card_description_div}>
          <p className={style.big_card_target}>Target Muscle: {check.target}</p>
          <p className={style.big_card_description}>
            Description:<br></br><br></br>
            {randomExerciseDescription}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BigCard;
