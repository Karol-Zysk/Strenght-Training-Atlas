import React from "react";
import { QueryClientProvider, QueryClient } from "react-query";
import "./App.module.css";
import Header from "./components/Header/Header";
import Contacts from "./components/Contacts/Contacts";
import Footer from "./components/Footer/Footer";
import style from "./App.module.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Exercises from "./Pages/Exercises";
import Home from "./Pages/Home";
import Basics from "./Pages/Basics";
import ArticlesPage from "./Pages/ArticlesPage";
import Login from "./Pages/Login";
import FormikRegister from "./Pages/FormikRegister";
import { LoginProvider } from "./context/loginContext";

const queryClient = new QueryClient();

function App(props) {
  const [showContacts, setShowContacts] = React.useState(null);

  const handleSetShowContacts = (event) => {
    setShowContacts(!showContacts);
    event.preventDefault();
  };

  return (
    <Router>
      <LoginProvider>
        <QueryClientProvider client={queryClient}>
          <div className={style.App}>
            <Header showTabFN={handleSetShowContacts} />

            <Contacts clickValue={showContacts} />

            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/basics" element={<Basics />}></Route>
              <Route path="/articles" element={<ArticlesPage />}></Route>
              <Route path="/register" element={<FormikRegister />}></Route>
              <Route path="/login" element={<Login />}></Route>
              <Route path="/exercises/*" element={<Exercises />}></Route>
            </Routes>

            <Footer />
          </div>
        </QueryClientProvider>
      </LoginProvider>
    </Router>
  );
}

export default App;
