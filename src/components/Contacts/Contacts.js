import React from "react";
import style from "./contacts.module.css";
import photo from "./Trainer1.jpg";
import photo2 from "./Trainer2.jpg";
import photo3 from "./Trainer3.jpg";

const trainers = [
  {
    photo: photo,
    name: "Karol Zyśk",
    specialization: ["Strenght Training", "Mobility Training"],
    motto:
      "progress is not the result of hard training but the result of regularly repeated training",
    id: true,
  },
  {
    photo: photo2,
    name: "Michael Scott",
    specialization: ["Strenght Training", "Motivation", "Regeneration Expert"],
    motto: "You should never settle for who you are",
    id: true,
  },
  {
    photo: photo3,
    name: "Dwight Shrutt",
    specialization: ["Strenght Training", "Martial Arts", "Mental Training"],
    motto:
      "Whenever I'm about to do something, I think 'Would an idiot do that?' And if they would, I do not do that thing.",
    id: true,
  },
];

export const Contacts = ({ clickValue }) => {
  const [openedCardId, setOpenedCardId] = React.useState(false);

  console.log(clickValue);

  return (
    <div
      className={style.contacts}
      className={clickValue === true ? style.showContacts : style.hideContacts}
    >
      <h3>Contacts</h3>
      {trainers.map((trainer) => (
        <div className={style.trainers}>
          <img src={trainer.photo} alt="TrainerPhoto" />
          <p>
            <b>Trainer:</b> {trainer.name}
          </p>

          <div
            className={
              trainer.id === openedCardId ? style.openedNot : style.opened
            }
          >
            <b>Specialization:</b>
            <ul className={style.specUL}>
              {trainer.specialization.map((spec, index) => (
                <li key={index}>{spec}</li>
              ))}
            </ul>
            <p>
              <b>Motto:</b> {trainer.motto}
            </p>
          </div>

          <button
            onClick={() => {
              setOpenedCardId((prevState) => (trainer.id = !prevState));
            }}
            className={style.emailButton}
          >
            More Info
          </button>
        </div>
      ))}
    </div>
  );
};

export default Contacts;
