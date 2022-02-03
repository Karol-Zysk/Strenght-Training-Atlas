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
    <nav className={clickValue ? style.nav_menu_active : style.nav_menu}>
      <h2 className={style.contactsH2}>Contacts</h2>
      {cards.map((trainer) => (
        <div className={style.trainers}>
          <p className={style.paragraph}>
            <b>Trainer:</b> {trainer.name}
          </p>

          <div
            className={
              trainer.expanded === true ? style.opened : style.openedNot
            }
          >
            <div className={style.trainer_flex_div}>
              <div>
                <b>Specialization:</b>
                <ul className={style.specUL}>
                  {trainer.specialization.map((spec, index) => (
                    <li key={index}>{spec}</li>
                  ))}
                </ul>
              </div>

              <img
                src={trainer.photo}
                alt="TrainerPhoto"
                className={style.trainerAvatar}
              />
            </div>

            <p>
              <b>Motto:</b> {trainer.motto}
            </p>
            <div className={style.questionary}>
              <textarea
                className={style.mail_area}
                defaultValue={"Ask a question...."}
              ></textarea>
              <button className={style.btn} type="submit">
                send
              </button>
            </div>
          </div>

          <button
            className={style.btn}
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
    </nav>
  );
};

export default Contacts;
