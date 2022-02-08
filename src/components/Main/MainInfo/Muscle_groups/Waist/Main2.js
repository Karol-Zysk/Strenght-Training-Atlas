import React from "react";
import { useQuery } from "react-query";
import style from "../../Main.module.css";
import BigCard from "../../BigCard";
import SmallCards from "../../SmallCards";
import photo from "./muscle.jpg";
import text from "../../text";


const Main = (props) => {
  const fetchBodyParts = async () => {
    const response = await fetch("./data2.json", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    return response.json();
  };

  const [check, setTitleCheck] = React.useState({});
  const [showBigCard, setShowBigCard] = React.useState(false);

  const { data, status } = useQuery("bodyParts", fetchBodyParts);
  console.log(check, status);

  return (
    <>
      <div className={style.container}>
      <div className={style.muscle_info}>
          <h2 className={style.muscle_info_h2}>Chest</h2>
          <img className={style.muscle_info_img} src={photo} alt="img"></img>
          <p className={style.muscle_info_paragraph}>Muscle functions</p>
          <p className={style.muscle_info_description}>
            {text}
          </p>
        </div>
        <div className={style.card_container}>
          {data?.slice(0, 15)?.map((bodyPart) => {
            const card_check = () => {
              setTitleCheck((...value) => (value = bodyPart));
              setShowBigCard((prev) => (prev = true));
            };
            return <SmallCards bodyPart={bodyPart} card_check={card_check} />;
          })}
        </div>

        {showBigCard && <BigCard check={check} />}
      </div>
    </>
  );
};

export default Main;
