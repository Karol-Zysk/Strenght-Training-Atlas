import style from "./main.module.css";
import TrainingInfo from "./MainInfo/TrainingInfo";

export const Main = () => {
  return (
    <div className={style.main}>
      <TrainingInfo />
    </div>
  );
};

export default Main;
