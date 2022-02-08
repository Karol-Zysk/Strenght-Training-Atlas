import React from "react";
import { QueryClientProvider, QueryClient } from "react-query";
import "./App.module.css";
import Header from "./components/Header/Header";
import Contacts from "./components/Contacts/Contacts";
import Footer from "./components/Footer/Footer";
import style from "./App.module.css";
import { BrowserRouter as Router } from "react-router-dom";
import MainNavbar from "./components/Main/MainInfo/MainNavbar";

const queryClient = new QueryClient();

function App(props) {
  const [showContacts, setShowContacts] = React.useState(null);

  const handleSetShowContacts = (event) => {
    setShowContacts(!showContacts);
    event.preventDefault();
  };

  return (
    <Router>
      <QueryClientProvider client={queryClient}>
        <div className={style.App}>
          <Header showTabFN={handleSetShowContacts} />

          <Contacts clickValue={showContacts} />
          <MainNavbar />

          <Footer />
        </div>
      </QueryClientProvider>
    </Router>
  );
}

export default App;
