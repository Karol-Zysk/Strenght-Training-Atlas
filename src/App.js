import React from "react";
import { useContext } from "react";
import "./App.module.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Contacts from "./components/Contacts/Contacts";
import Footer from "./components/Footer/Footer";
import style from "./App.module.css";

function App(props) {
  const [showContacts, setShowContacts] = React.useState(null);

  const handleSetShowContacts = () => {
    setShowContacts(!showContacts);
  };

  return (
    <div className={style.App}>
      <Header showTabFN={handleSetShowContacts} />
      <div className={style.mainContent}>
        <div
          className={style.contacts}

          /*className={clickValue === true ? style.showContacts : style.hideContacts}*/
        >
          <Contacts clickValue={showContacts} />
        </div>

        <Main />
      </div>

      <Footer />
    </div>
  );
}

export default App;
