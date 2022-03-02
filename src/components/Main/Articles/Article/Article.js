import React from "react";
import style from "../../Articles/Articles.module.css";
import { useNavigate,  } from "react-router-dom";
import jwt from "jsonwebtoken";

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
  const { replace } = useNavigate();
  const [loginName, setLoginName] = React.useState();
  async function getName() {
    const req = await fetch("http://localhost:3001/api/name", {
      headers: {
        "x-access-token": localStorage.getItem("token"),
      },
    });
    const data = await req.json();
    if (data.status === "ok") {
      setLoginName(data.name);
    } else {
      console.log(data.error);
    }
  }

  React.useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const user = jwt.decode(token);
      if (!user) {
        localStorage.removeItem("token");
        replace({
          goTo: "/login",
          
        })
        
      } else {
        getName();
        
      }
    }
  }, []);

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
