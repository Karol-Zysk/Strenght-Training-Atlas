import React from "react";
import { useQuery } from "react-query";
import style from "./TrainingInfo.module.css";
import { LoremIpsum } from "react-lorem-ipsum";
import BigCard from "./BigCard";

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

  const [check, setTitleCheck] = React.useState({});

  const { data, status } = useQuery("bodyParts", fetchBodyParts);

  return (
    <div className={style.container}>
      <button>Click</button>
      <nav style={{ width: "100%" }}>
        <h2>Body Parts</h2>
      </nav>

      <div className={style.card_Container}>
        {data?.slice(0, 16)?.map((bodyPart) => {
          const card_check = () => {
            setTitleCheck((...value) => (value = bodyPart));
          };

          return (
            <div className={style.exerciseTile}>
              <p className={style.paragraph}> {bodyPart.name.toUpperCase()}</p>
              <div className={style.imgContainer}>
                <img
                  src={bodyPart.imgpng}
                  alt="img"
                  className={style.exImg}
                ></img>

                <div className={style.overlay}>
                  <button className={style.btn} onClick={card_check}>
                    Viev more
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <BigCard check={check} />
    </div>
  );
};

export default TrainingInfo;
