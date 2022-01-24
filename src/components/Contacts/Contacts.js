import React from "react";
import style from "./contacts.module.css";
import photo from "./Trainer1.jpg";
import photo2 from "./Trainer2.jpg";
import photo3 from "./Trainer3.jpg";

const trainers = [
  {
    photo: photo,
    name: "Karol Zyśk",
    specialization: [<li>Strenght Training</li>, <li>Mobility Training</li>],
    motto:
      "progress is not the result of hard training but the result of regularly repeated training",
  },
  {
    photo: photo2,
    name: "Michael Scott",
    specialization: [
      <li>Strenght Training</li>,
      <li>Motivation</li>,
      <li>Regeneration Expert</li>,
    ],
    motto: "You should never settle for who you are",
  },
  {
    photo: photo3,
    name: "Dwight Shrutt",
    specialization: [
      <li>Strenght Training</li>,
      <li>Martial Arts</li>,
      <li>Mental Training</li>,
    ],
    motto:
      "Whenever I'm about to do something, I think 'Would an idiot do that?' And if they would, I do not do that thing.",
  },
];

export const Contacts = () => {
  console.log(photo);
  console.log(trainers);

  return (
    <div className={style.contacts}>
      <h3>Contacts</h3>
      {trainers.map((trainer) => (
        <div className={style.trainers} key={trainer.name}>
          <img src={trainer.photo} alt="TrainerPhoto" />
          <p>
            <b>Trainer:</b> {trainer.name}
          </p>
          <div className={style.hoverTab}>
            <b>Specialization:</b>
            <ul className={style.specUL}>{trainer.specialization}</ul>
            <p>
              <b>Motto:</b> {trainer.motto}
            </p>
            <button className={style.emailButton}>write an email</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Contacts;
