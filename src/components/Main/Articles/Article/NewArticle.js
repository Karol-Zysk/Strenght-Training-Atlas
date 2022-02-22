import React from "react";
import style from "../../Articles/Articles.module.css";

const NewArticle = ({
  onAdd,

  article,
  title,
  _id,
  body,
}) => {
  const [showModal, setShowModal] = React.useState(false);
  const [newTitle, setTitle] = React.useState("");
  const [newBody, setBody] = React.useState("");

  const setBodyHandler = (event) => {
    const value = event.target.value;
    setBody(value);
  };

  const setTitleHandler = (event) => {
    const value = event.target.value;
    setTitle(value);
  };

  const addArticle = () => {
    const article = {
      title: newTitle,
      body: newBody,
      _id: _id
    };
    onAdd(article);
    setTitle("");
    setBody("");
    setShowModal(!showModal);
  };
  return showModal ? (
    <div className={style.article}>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <label>Tytuł:</label>
        <input type="text" value={title} onChange={setTitleHandler} />

        <label>Opis:</label>
        <input type="text" value={body} onChange={setBodyHandler} />

        <button onClick={() => addArticle()}>Dodaj notatkę</button>
      </div>
    </div>
  ) : (
    <button onClick={() => setShowModal(true)}>Nowa notatka</button>
  );
};

export default NewArticle;
