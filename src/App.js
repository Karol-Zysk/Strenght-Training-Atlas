import "./App.module.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Contacts from "./components/Contacts/Contacts";
import Footer from "./components/Footer/Footer";
import style from "./App.module.css";

function App() {
  return (
    <div className={style.App}>
      <Header />
      <Contacts />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
