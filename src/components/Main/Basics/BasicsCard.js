import style from "./BasicsCard.module.css";
import React from "react";
import basicsData from "./BasicsData";

const BasicsCard = () => {
  const [targetTab, setTargetTab] = React.useState({});
  const [showInfoCard, setShowInfoCard] = React.useState(false);

  const BasicsTab = basicsData.map((program) => {
    const takeTargetTab = (event) => {
      setTargetTab((...value) => (value = program));
      setShowInfoCard((prev) => (prev = true));
      event.preventDefault();
      console.log(showInfoCard);
    };
    return (
      <div onClick={takeTargetTab} className={style.basic_flex_item}>
        {program.name}
      </div>
    );
  });

  return (
    <>
      <h2 className={style.basics_card_h2}>Training Programs</h2>
      <div className={style.basic_flex_tab}>{BasicsTab}</div>
      <div className={style.basics_info_card}>
        <h3 className={style.basics_card_h3}>
          Full program name: {targetTab.fullName}
        </h3>
        <p className={style.basics_card_paragraph}>For: {targetTab.forWho}</p>
        <p className={style.basics_card_paragraph}>
          About program: {targetTab.info}
        </p>
      </div>
    </>
  );
};

export default BasicsCard;
