import React from "react";
import style from "./Main.module.css";
import { LoremIpsum } from "react-lorem-ipsum";

const BigCard = ({ check }) => {
  return (
    <div className={style.big_card}>
      <span className={style.big_card_span}>{check.name}</span>
      <div style={{ display: "grid" }}>
        <img src={check.imgpng} alt="img" className={style.big_card_img}></img>
        <div className={style.big_card_description_div}>
          <p className={style.big_card_target}>Target Muscle: {check.target}</p>
          <p className={style.big_card_description}>
            Description:
            <LoremIpsum p={1} />
          </p>
        </div>
      </div>
    </div>
  );
};

export default BigCard;
