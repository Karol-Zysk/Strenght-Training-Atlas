import React from "react";
import { QueryClientProvider, QueryClient } from "react-query";
import "./App.module.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Contacts from "./components/Contacts/Contacts";
import Footer from "./components/Footer/Footer";
import style from "./App.module.css";

const queryClient = new QueryClient();

function App(props) {
  const [showContacts, setShowContacts] = React.useState(null);

  const handleSetShowContacts = () => {
    setShowContacts(!showContacts);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <div className={style.App}>
        <Header showTabFN={handleSetShowContacts} />
        <div className={style.mainContent}>
          <div className={style.contacts}>
            <Contacts clickValue={showContacts} />
          </div>

          <Main />
        </div>

        <Footer />
      </div>
    </QueryClientProvider>
  );
}

export default App;
