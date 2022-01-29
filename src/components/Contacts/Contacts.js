import { useContext } from "react";
import React from "react";
import style from "./contacts.module.css";
import photo from "./Trainer1.jpg";
import photo2 from "./Trainer2.jpg";
import photo3 from "./Trainer3.jpg";

const cardData = [
  {
    photo: photo,
    name: "Karol Zyśk",
    specialization: ["Strenght Training", "Mobility Training"],
    motto:
      "progress is not the result of hard training but the result of regularly repeated training",
    id: 1,
    expanded: false,
  },
  {
    photo: photo2,
    name: "Michael Scott",
    specialization: ["Strenght Training", "Motivation", "Regeneration Expert"],
    motto: "You should never settle for who you are",
    id: 2,
    expanded: false,
  },
  {
    photo: photo3,
    name: "Dwight Shrutt",
    specialization: ["Strenght Training", "Martial Arts", "Mental Training"],
    motto:
      "Whenever I'm about to do something, I think 'Would an idiot do that?' And if they would, I do not do that thing.",
    id: 3,
    expanded: false,
  },
];

export const Contacts = ({ clickValue }) => {
  const [cards, setCards] = React.useState(cardData);

  return (
    <div
      className={
        clickValue == null
          ? style.contacts
          : clickValue === true
          ? style.showContacts
          : clickValue === false
          ? style.hideContacts
          : "blabla"
      }
    >
      <h3>Contacts</h3>
      {cards.map((trainer) => (
        <div className={style.trainers}>
          <p>
            <b>Trainer:</b> {trainer.name}
          </p>

          <div
            className={
              trainer.expanded === true ? style.opened : style.openedNot
            }
          >
            <img src={trainer.photo} alt="TrainerPhoto" className={style.trainerAvatar} />
            <b>Specialization:</b>
            <ul className={style.specUL}>
              {trainer.specialization.map((spec, index) => (
                <li key={index}>{spec}</li>
              ))}
            </ul>
            <p>
              <b>Motto:</b> {trainer.motto}
            </p>
            <div className={style.questionary}>
              <textarea
                style={{
                  height: "15vh",
                  width: "10vw",
                  borderRadius: "20px",
                  border: "none",
                  margin: "5px",
                  padding: "10px",
                }}
              >
                Ask a question....
              </textarea>
              <button className={style.emailButton} type="submit">
                send
              </button>
            </div>
          </div>

          <button
            className={style.emailButton}
            onClick={() => {
              setCards((current) => {
                const currentCopy = [...current];

                const result = currentCopy.map((currentItem) => {
                  if (currentItem.id === trainer.id) {
                    return {
                      ...currentItem,
                      expanded: !currentItem.expanded,
                    };
                  }
                  return currentItem;
                });
                console.log(result);
                console.log(trainer.expanded);
                return result;
              });
            }}
          >
            {trainer.expanded === true ? "Hide" : "Show More"}
          </button>
        </div>
      ))}
    </div>
  );
};

export default Contacts;
