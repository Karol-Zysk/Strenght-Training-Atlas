import React from "react";
import style from "./ExerciseCards.module.css";
import { LoremIpsum } from "react-lorem-ipsum";

const BigCard = ({ check,  }) => {
  return (
    <div className={style.bigCard}>
        <h1 className={style.nameh1}>{check.name}</h1>
        <div style={{ display: "flex" }}>
          <img
            src={check.imgpng}
            alt="img"
            className={style.bigCardExImg}
          ></img>
          <div className={style.description}>
            <h3 className={style.nameh2}>Target Muscle: {check.target}</h3>
            <p className={style.big_card_paragraph}>
              <b>Description: </b>
              <LoremIpsum p={1} />
            </p>
          </div>
        </div>
      </div>
  );
};

export default BigCard;
