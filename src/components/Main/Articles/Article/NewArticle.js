import React from "react";
import style from "../../Articles/Articles.module.css";

const NewArticle = ({ onAdd, avatar, title, _id, body }) => {
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

      console.log(data.name);
    }
  }

  getName();

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
    <div className={style.article}>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <label>Title:</label>
        <input type="text" value={title} onChange={setTitleHandler} />

        <label>Article Body:</label>
        <textarea type="text" value={body} onChange={setBodyHandler} />
        <label>Link to avatar</label>
        <input type="text" value={avatar} onChange={setAvatarHandler} />

        <button onClick={() => addArticle()}>Dodaj Artykuł</button>
      </div>
    </div>
  ) : (
    loginName !== undefined && (
      <button onClick={() => setShowModal(true)}>aaaaa</button>
    )
  );
};

export default NewArticle;
