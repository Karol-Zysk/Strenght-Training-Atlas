import React from "react";
import { QueryClientProvider, QueryClient } from "react-query";
import "./App.module.css";
import Header from "./components/Header/Header";
import Contacts from "./components/Contacts/Contacts";
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Exercises from "./Pages/Exercises";
import Home from "./Pages/Home";
import Basics from "./Pages/Basics";
import ArticlesPage from "./Pages/ArticlesPage";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import { LoginProvider } from "./context/loginContext";

const queryClient = new QueryClient();

function App(props) {
  const [showContacts, setShowContacts] = React.useState(null);

  const handleSetShowContacts = () => {
    setShowContacts(!showContacts);
  };

  return (
    <Router>
      <LoginProvider>
        <QueryClientProvider client={queryClient}>
          
            <Header showTabFN={handleSetShowContacts} />

            <Contacts clickValue={showContacts} />

            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/basics" element={<Basics />}></Route>
              <Route path="/articles" element={<ArticlesPage />}></Route>
              <Route path="/register" element={<Register />}></Route>
              <Route path="/login" element={<Login />}></Route>
              <Route path="/exercises/*" element={<Exercises />}></Route>
            </Routes>

            <Footer />
          
        </QueryClientProvider>
      </LoginProvider>
    </Router>
  );
}

export default App;
