import "./BasicsCard.css";
import React from "react";
import basicsData from "./BasicsData";

const BasicsCard = () => {
  const [targetTab, setTargetTab] = React.useState({});
  const [infoCard, setShowInfoCard] = React.useState(false);
  const [showBasicTab, setShowBasicTab] = React.useState(false);

  const BasicsTab = basicsData.map((program) => {
    const takeTargetTab = (event) => {
      setTargetTab((...value) => (value = program));

      setShowInfoCard(!infoCard);
      setShowBasicTab(true);
      event.preventDefault();
    };
    return (
      <nav onClick={takeTargetTab} className={"skew_menu"}>
        <ul className={"skew_menu_ul"}>
          <li className={"skew_menu_li"}>
            <span className={"skew_menu_span"}>{program.name}</span>
          </li>
        </ul>
      </nav>
    );
  });

  return (
    <>
      <div className={"tabs"}>{BasicsTab}</div>
      {showBasicTab ? (
        <div className={"basics_tab_content"}>
          <div className={infoCard ? "show" : "show2"}>
            <h3 >
              Full program name: {targetTab.fullName}
            </h3>
            <p className={"textItem"}>For: {targetTab.forWho}</p>
            <p className={"textItem"}>About program: {targetTab.info}</p>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default BasicsCard;
