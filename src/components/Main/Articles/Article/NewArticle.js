import React from "react";
import style from "../../Articles/Articles.module.css";

const NewArticle = ({ onAdd, avatar, name, article, title, _id, body }) => {
  const [showModal, setShowModal] = React.useState(false);
  const [newTitle, setTitle] = React.useState("");
  const [newBody, setBody] = React.useState("");
  const [newAvatar, setAvatar] = React.useState("");
  const [newName, setName] = React.useState("");

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

  const setNameHandler = (event) => {
    const value = event.target.value;
    setName(value);
  };

  const addArticle = () => {
    const article = {
      title: newTitle,
      body: newBody,
      _id: _id,
      avatar: newAvatar,
      name: newName,
    };
    onAdd(article);
    setTitle("");
    setAvatar("");
    setName("");
    setBody("");
    setShowModal(!showModal);
  };
  return showModal ? (
    <div className={style.article}>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <label>Title:</label>
        <input type="text" value={title} onChange={setTitleHandler} />

        <label>Article Body:</label>
        <textarea type="text" value={body} onChange={setBodyHandler} />
        <label>Link to avatar</label>
        <input type="text" value={avatar} onChange={setAvatarHandler} />
        <label>Your Name</label>
        <input type="text" value={name} onChange={setNameHandler} />

        <button onClick={() => addArticle()}>Dodaj Artykuł</button>
      </div>
    </div>
  ) : (
    <button onClick={() => setShowModal(true)}>Nowa notatka</button>
  );
};

export default NewArticle;
