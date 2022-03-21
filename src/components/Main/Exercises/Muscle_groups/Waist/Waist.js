import React from "react";
import style from "../../Main.module.css";
import BigCard from "../../BigCard";
import SmallCards from "../../SmallCards";
import { useEffect, useState } from "react";
import axios from "../../../../../axios";

const Waist = (props) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const bodyParts = {
      method: "GET",
      url: "/exercise/abs",
    };

    axios
      .request(bodyParts)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {});
  }, []);
  const [target, setTarget] = React.useState({});
  const [showBigCard, setShowBigCard] = React.useState(false);

  return (
    <>
      <div className={style.container}>
        <div className={style.card_container}>
          {data?.slice(0, 20)?.map((bodyPart) => {
            const check_target_card = () => {
              setTarget((...value) => (value = bodyPart));
            };
            return (
              <SmallCards
                key={bodyPart.id}
                bodyPart={bodyPart}
                check_target_card={check_target_card}
                setShowBigCard={setShowBigCard}
                showBigCard={showBigCard}
              />
            );
          })}
        </div>

        {showBigCard && <BigCard target={target} />}
      </div>
    </>
  );
};

export default Waist;
