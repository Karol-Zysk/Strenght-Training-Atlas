import React from "react";
import style from "../../Articles/Articles.module.css";

const Article = ({
  _id,
  name,
  avatar,
  title,
  body,
  onDelete,
  onEdit,
  date,
}) => {
  return (
    <div className={style.article}>
      <h2 className={style.article_h2}>{title}</h2>
      <p className={style.article_paragraph}>{body}</p>
      <img src={avatar} alt="img"></img>
      <p>{name}</p>
      <p>{date}</p>
      <button onClick={() => onDelete(_id)}>Usuń</button>
      <button onClick={() => onEdit({ title: title, body: body, _id: _id })}>
        Edytuj
      </button>
    </div>
  );
};

export default Article;
