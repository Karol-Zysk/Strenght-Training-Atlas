import React from "react";
import style from "../../Main.module.css";
import BigCard from "../../BigCard";
import SmallCards from "../../SmallCards";
import photo from "./muscle.jpg";
import text from "../../text";
import data_chest from "../../data/data_chest";

export default function Chest() {
  /* const fetchBodyParts = async () => {
    const response = await fetch("%PUBLIC_URL%/data_chest.json", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    return response.json();
  }; */
  const data = data_chest;
  console.log(data);
  const [check, setTitleCheck] = React.useState({});
  const [showBigCard, setShowBigCard] = React.useState(false);

  /*const { data, status } = useQuery("bodyParts", fetchBodyParts);
  console.log(check, status);*/
  return (
    <>
      <div className={style.container}>
        <div className={style.muscle_info}>
          <h2 className={style.muscle_info_h2}>Chesty</h2>
          <img className={style.muscle_info_img} src={photo} alt="img"></img>
          <p className={style.muscle_info_paragraph}>Muscle functions</p>
          <p className={style.muscle_info_description}>{text}</p>
        </div>
        <div className={style.card_container}>
          {data?.slice(0, 16)?.map((bodyPart) => {
            const target_object_to_variable = () => {
              setTitleCheck((...value) => (value = bodyPart));
              setShowBigCard((prev) => (prev = true));
            };
            return (
              <SmallCards
                bodyPart={bodyPart}
                card_check={target_object_to_variable}
              />
            );
          })}
        </div>

        {showBigCard && <BigCard check={check} />}
      </div>
    </>
  );
}
