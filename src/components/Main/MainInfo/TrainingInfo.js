import React from "react";
import { useQuery } from "react-query";

const TrainingInfo = () => {
  const fetchBodyParts = async () => {
    const response = await fetch(
      "https://exercisedb.p.rapidapi.com/exercises",
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "exercisedb.p.rapidapi.com",
          "x-rapidapi-key":
            "xxx",
        },
      }
    );
    return response.json();
  };

  const { data, status } = useQuery("bodyParts", fetchBodyParts);
  console.log(data);

  return (
    <div>
      {data?.map((bodypart) => (
        <div>
          {bodypart.bodyPart === "upper arms" ? (
            <div>
              {bodypart.name.slice(0, 5)}
              <img src={bodypart.gifUrl.slice(0, 5)} alt="img"></img>
            </div>
          ) : null}
        </div>
      ))}
    </div>
  );
};

export default TrainingInfo;
