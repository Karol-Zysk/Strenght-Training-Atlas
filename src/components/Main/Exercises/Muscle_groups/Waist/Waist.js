import React from "react";
import style from "../../Main.module.css";
import BigCard from "../../BigCard";
import SmallCards from "../../SmallCards";
import data_waist from "../../data/data_waist";

const Waist = (props) => {
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
  const data = data_waist;
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
