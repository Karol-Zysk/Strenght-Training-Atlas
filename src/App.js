import React from "react";
import "./App.module.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Contacts from "./components/Contacts/Contacts";
import Footer from "./components/Footer/Footer";
import style from "./App.module.css";

function App(props) {
  const [showContacts, setShowContacts] = React.useState(false);

  const handleSetShowContacts = () => {
    setShowContacts(!showContacts);
    console.log("dupa");
  };

  return (
    <div className={style.App}>
      <Header showTabFN={handleSetShowContacts} />
      <div className={style.mainContent}>
        <Contacts clickValue={showContacts} />
        <Main />
      </div>

      <Footer />
    </div>
  );
}

export default App;
