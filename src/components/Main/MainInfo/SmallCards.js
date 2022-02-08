import React from "react";
import style from "./Main.module.css";

const SmallCards = ({ bodyPart, card_check }) => {
  return (
    <div className={style.small_card}>
      <p className={style.small_card_title}> {bodyPart.name.toUpperCase()}</p>
      <div className={style.img_container}>
        <img src={bodyPart.imgpng} alt="img" className={style.small_card_img}></img>

        <div className={style.overlay}>
          <button className={style.btn} onClick={card_check}>
            Viev more
          </button>
        </div>
      </div>
    </div>
  );
};

export default SmallCards;
