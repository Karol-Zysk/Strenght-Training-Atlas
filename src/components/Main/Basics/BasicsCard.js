import style from "./BasicsCard.module.css";
import React from "react";
import basicsData from "./BasicsData";
import logo from "../files/logo.PNG";

const BasicsCard = () => {
  const [targetTab, setTargetTab] = React.useState({});
  const [showInfoCard, setShowInfoCard] = React.useState(false);

  const BasicsTab = basicsData.map((program) => {
    const takeTargetTab = (event) => {
      setTargetTab((...value) => (value = program));
      setShowInfoCard((prev) => (prev = true));
      event.preventDefault();
      console.log(targetTab);
      console.log(showInfoCard);
    };
    return (
      <div onClick={takeTargetTab} className={style.basic_flex_item}>
        {program.name}
      </div>
    );
  });

  return (
    <div className={style.container}>
      <div className={style.basics_card}>
        <img className={style.basics_card_logo} src={logo} alt="img"></img>
        <div className={style.basic_flex_tab}>{BasicsTab}</div>
        <div className={style.basics_info_card}>
          <h3 className={style.basics_card_h3}>Program name: {targetTab.name}</h3>
          <p>For: {targetTab.forWho}</p>
          <p>Basics about program: {targetTab.info}</p>
        </div>
      </div>
    </div>
  );
};

export default BasicsCard;
