import React from "react";
import style from "../../Articles/Articles.module.css";
import { useContext } from "react";
import { LoginContext } from "../../../../context/loginContext";

const Article = ({
  _id,
  avatar,
  name,
  title,
  body,
  onDelete,
  onEdit,
  date,
}) => {
  const loginName = useContext(LoginContext);

  const [a] = loginName;

  console.log(name, a);

  return (
    <div className={style.article}>
      <div className={style.flexDiv}>
        <div className={style.article_left}>
          <h4 className={style.article_h2}>{title}</h4>
          <p className={style.article_paragraph}>{body}</p>
        </div>
        <div className={style.article_right}>
          <img
            className={style.article_avatar}
            src={avatar}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src =
                "https://i1.sndcdn.com/avatars-000793647472-v44j43-t240x240.jpg";
            }}
            alt="imgg"
          />
          <div>
            <p className={style.article_name}>Added by: {name}</p>
            <p className={style.article_date}>on {date}</p>
          </div>
        </div>
      </div>
      {name === a ? (
        <>
          <div className={style.flexDiv}>
            <button className={style.btn} onClick={() => onDelete(_id)}>
              Usuń
            </button>
            <button
              className={style.btn}
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
        </>
      ) : (
        <p></p>
      )}
    </div>
  );
};

export default Article;
