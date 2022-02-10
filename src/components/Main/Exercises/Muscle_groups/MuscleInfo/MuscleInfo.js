import React from "react";
import style from "../../Main2.module.css";
import photo from "./muscle.png";
import text from "../../text";

const MuscleInfo = (props) => {
  return (
    <>
      <div className={style.container}>
        <div className={style.muscle_info}>
          <h2 className={style.muscle_info_h2}>
            Chose muscle group to see exercises
          </h2>
          <div style={{ display: "flex" }}>
            <img className={style.muscle_info_img} src={photo} alt="img"></img>
            <div>
              <p className={style.muscle_info_paragraph}>
                <b>Muscle Functions</b>
              </p>
              <p className={style.muscle_info_description}>{text}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MuscleInfo;
