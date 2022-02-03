import React from "react";
import { useQuery } from "react-query";
import style from "./TrainingInfo.module.css";
import { LoremIpsum } from "react-lorem-ipsum";

const TrainingInfo = (props) => {
  const fetchBodyParts = async () => {
    const response = await fetch("./data.json", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    return response.json();
  };
  const [title, setTitle] = React.useState();
  const [check, setTitleCheck] = React.useState({});
  const handleSetTitle = ({ currentTarget: { textContent } }) => {
    setTitle(textContent);
    console.log(title);
  };

  const { data, status } = useQuery("bodyParts", fetchBodyParts);

  return (
    <div className={style.container}>
      <button>Click</button>
      <nav style={{ width: "100%" }}>
        <h2>Body Parts</h2>
      </nav>

      
      <div className={style.tileContainer}>
        {data?.slice(0, 16)?.map((bodyPart) => {
          const tilecheck = () => {
            setTitleCheck((...value) => (value = bodyPart));
          };

          return (
            <div className={style.exerciseTile} onClick={handleSetTitle}>
              <p className={style.paragraph}> {bodyPart.name.toUpperCase()}</p>
              <div className={style.imgContainer}>
                <img
                  src={bodyPart.imgpng}
                  alt="img"
                  className={style.exImg}
                ></img>

                <div className={style.overlay}>
                  <button className={style.btn} onClick={tilecheck}>
                    Viev more
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

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
            <p className={style.paragraph}>
              <b>Description: </b>
              <LoremIpsum p={1} />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrainingInfo;
