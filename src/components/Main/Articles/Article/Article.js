import React from "react";
import style from "../../Articles/Articles.module.css";
import { useNavigate } from "react-router-dom";
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

  let navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className={style.article}>
      <button onClick={logout}>LogOut</button>
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
      {name === loginName && (
        <>
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
        </>
      )}
    </div>
  );
};

export default Article;
