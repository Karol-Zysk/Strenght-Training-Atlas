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
        console.log(response.data);
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const [check, setTitleCheck] = React.useState({});
  const [showBigCard, setShowBigCard] = React.useState(false);

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
