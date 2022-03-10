import React from "react";
import { useState } from "react";
import style from "../../Articles/Articles.module.css";

const EditArticle = ({ name, avatar, date, onEdit, _id, body, title }) => {
  const [newTitle, setTitle] = useState(title);
  const [newBody, setBody] = useState(body);

  const [newAvatar, setAvatar] = React.useState(avatar);
  const [newName, setName] = React.useState(name);

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

  const editArticle = () => {
    const article = {
      title: newTitle,
      body: newBody,
      _id: _id,
      date: date,

      avatar: newAvatar,
      name: newName,
    };
    onEdit(article);
  };

  return (
    <div className={style.article}>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <label>Tytuł: </label>
        <input
          type="text"
          placeholder="Article Title..."
          value={newTitle}
          onChange={setTitleHandler}
        ></input>
        <label>Article Body </label>
        <textarea onChange={setBodyHandler} value={newBody}></textarea>
        <label>Link to avatar</label>
        <input type="text" value={newAvatar} onChange={setAvatarHandler} />
        <label>Your Name</label>
        <input type="text" value={newName} onChange={setNameHandler} />
      </div>
      <button className={style.btn} onClick={editArticle}>
        Save
      </button>
    </div>
  );
};

export default EditArticle;
