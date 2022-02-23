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
      <img
        src={avatar}
        onError={(e) => {
          e.target.onerror = null;
          e.target.src =
            "https://i1.sndcdn.com/avatars-000793647472-v44j43-t240x240.jpg";
        }}
        alt="imgg"
      />
      <p>{name}</p>
      <p>{date}</p>
      <button onClick={() => onDelete(_id)}>Usuń</button>
      <button
        onClick={() =>
          onEdit({
            avatar: avatar,
            name: name,
            date: date,
            title: title,
            body: body,
            _id: _id,
          })
        }
      >
        Edytuj
      </button>
    </div>
  );
};

export default Article;
