import React from "react";
import { useState } from "react";
import style from "../../Articles/Articles.module.css";

const EditArticle = ({ onEdit, _id, body, title }) => {
  const [newTitle, setTitle] = useState(title);
  const [newBody, setBody] = useState(body);

  const setBodyHandler = (event) => {
    const value = event.target.value;
    setBody(value);
  };

  const setTitleHandler = (event) => {
    const value = event.target.value;
    setTitle(value);
  };

  const editArticle = () => {
    const article = {
      title: newTitle,
      body: newBody,
      _id: _id,
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
        <label>Treść Artykułu: </label>
        <textarea
          placeholder="Write..."
          onChange={setBodyHandler}
          value={newBody}
        ></textarea>
      </div>
      <button onClick={editArticle}>Zapisz</button>
    </div>
  );
};

export default EditArticle;
