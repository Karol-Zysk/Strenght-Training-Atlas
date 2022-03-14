import React from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { LoginContext } from "../../../../context/loginContext";
import style from "../../Articles/Articles.module.css";

const NewArticle = ({ onAdd, avatar, title, _id, body }) => {
  let [loginName] = useContext(LoginContext);
  let navigate = useNavigate();
  const [showModal, setShowModal] = React.useState(false);
  const [newTitle, setTitle] = React.useState("");
  const [newBody, setBody] = React.useState("");
  const [newAvatar, setAvatar] = React.useState("");

  const setBodyHandler = (event) => {
    const value = event.target.value;
    setBody(value);
  };

  const setTitleHandler = (event) => {
    const value = event.target.value;
    setTitle(value);
  };

  const setAvatarHandler = (event) => {
    const value = event.target.value;
    setAvatar(value);
  };

  const addArticle = () => {
    const article = {
      title: newTitle,
      body: newBody,
      _id: _id,
      avatar: newAvatar,
      name: loginName,
    };
    console.log(loginName);
    onAdd(article);
    setTitle("");
    setAvatar("");
    setBody("");
    setShowModal(!showModal);
  };
  return showModal ? (
    <div className={style.new_article_div}>
      <label>Title:</label>
      <input type="text" value={title} onChange={setTitleHandler} />

      <label>Article Body:</label>
      <textarea className={style.textarea_newArticle} type="text" value={body} onChange={setBodyHandler} />
      <label>Link to avatar</label>
      <input type="text" value={avatar} onChange={setAvatarHandler} />

      <button className={style.btn} onClick={() => addArticle()}>
        Dodaj Artykuł
      </button>
    </div>
  ) : !loginName ? (
    <div style={{ display: "flex", justifyItems: "space-between" }}>
      <p>Adding articles available for logged in users</p>
      <button onClick={() => navigate("/login")}>Sign Up</button>
    </div>
  ) : (
    <button className={style.btn} onClick={() => setShowModal(true)}>
      New Article
    </button>
  );
};

export default NewArticle;
