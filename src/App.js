import React from "react";
import Header from "./components/organism/Header";
import Main from "./components/organism/Main";
import Footer from "./components/organism/Footer";
import style from "./style.module.scss";

function App() {
  return (
    <div className={style.body}>
      <div className={style.wrapper}>
        <Header />
        <Main />
        <Footer />
      </div>
    </div>
  );
}

export default App;