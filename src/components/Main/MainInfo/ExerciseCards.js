import React from "react";
import style from "./ExerciseCards.module.css";

export const ExerciseCards = ({
  bodyPart,
  data,
  setTitleCheck,
  tilecheck,
  handleSetTitle,
}) => {
  return (
    <div className={style.exerciseTile} onClick={handleSetTitle}>
      <div className={style.paragraph}>{bodyPart.name.toUpperCase()}</div>
      <div className={style.imgContainer}>
        <img src={bodyPart.imgpng} alt="img" className={style.exImg}></img>

        <div className={style.overlay}>
          <button className={style.btn} onClick={tilecheck}>
            Viev more
          </button>
        </div>
      </div>
    </div>
  );
};
export default ExerciseCards;
