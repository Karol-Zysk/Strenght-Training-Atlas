import React from "react";
import style from "../../Main.module.css";
import BigCard from "../../BigCard";
import SmallCards from "../../SmallCards";
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
        
        <div className={style.card_container}>
          {data?.slice(0, 20)?.map((bodyPart) => {
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
