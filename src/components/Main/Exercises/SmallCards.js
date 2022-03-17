import React from "react";
import style from "./Main.module.css";

const SmallCards = ({ bodyPart, card_check }) => {
  const scrollDownHandler = () => {
    card_check();
    if (window.innerWidth < 720) {
      window.scrollTo({ top: 1000, behavior: "smooth" });
    }
  };

  return (
    <div className={style.small_card}>
      <div className={style.img_container}>
        <p className={style.small_card_title}> {bodyPart.name}</p>
        <img
          src={bodyPart.gifUrl}
          alt="img"
          className={style.small_card_img}
        ></img>

        <div className={style.overlay}>
          <button className={style.btn} onClick={scrollDownHandler}>
            View more
          </button>
        </div>
      </div>
    </div>
  );
};

export default SmallCards;
