import React from "react";
import { useQuery } from "react-query";
import style from "./TrainingInfo.module.css";
import { loremIpsum } from "react-lorem-ipsum";

const TrainingInfo = () => {
  const [bodyParts, setBodyParts] = React.useState(
    "https://exercisedb.p.rapidapi.com/exercises"
  );

  const back = "https://exercisedb.p.rapidapi.com/exercises/bodyPart/back";
  const waist = "https://exercisedb.p.rapidapi.com/exercises/bodyPart/waist";

  const handleBodyPartChange = (prev) => {
    setBodyParts((prev = back));
    console.log(prev);
  };

  const fetchBodyParts = async () => {
    const response = await fetch(
      `
      ${bodyParts}`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "exercisedb.p.rapidapi.com",
          "x-rapidapi-key":
            "aeffdb04d0mshe7c5d05286567c1p1d6819jsn1024fe6655c0",
        },
      }
    );
    return response.json();
  };

  const { data, status } = useQuery("bodyParts", fetchBodyParts);

  console.log(data);
  const bodyy = data?.slice(0, 9)?.map((bodyPart) => (
    <>
      <div className={style.exerciseTile}>
        <p className={style.paragraph}> {bodyPart.name.toUpperCase()}</p>
        <img src={bodyPart.gifUrl} alt="img" className={style.exImg}></img>
        <p className={style.paragraph}>
          Target muscle: {bodyPart.target.toUpperCase()}
        </p>
      </div>
    </>
  ));
  return (
    <>
      <button onClick={handleBodyPartChange}>C</button>
      <nav style={{ width: "100%" }}>
        <h2>Body Parts</h2>
      </nav>
      <div className={style.tileContainer}>{bodyy}</div>
    </>
  );
};

export default TrainingInfo;
