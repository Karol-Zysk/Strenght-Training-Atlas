import React from "react";
import style from "../../Main.module.css";
import BigCard from "../../BigCard";
import SmallCards from "../../SmallCards";
import { useQuery } from "react-query";

const Waist = (props) => {
  const fetchBodyParts = async () => {
    const response = await fetch("https://exercisedb.p.rapidapi.com/exercises/target/abs", {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "exercisedb.p.rapidapi.com",
        "x-rapidapi-key": "8d9795689emshed7c3647a112cd4p157e57jsne7ce521c319e"
      },
    });
    return response.json();
  }; 
  
 
  const [check, setTitleCheck] = React.useState({});
  const [showBigCard, setShowBigCard] = React.useState(false);

  const { data, status } = useQuery("bodyParts", fetchBodyParts);
  console.log(data, status);
  return (
    <>
      <div className={style.container}>
        <div className={style.card_container}>
          {data?.slice(0, 20)?.map((bodyPart) => {
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

export default Waist;
