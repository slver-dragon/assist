import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import Header from "./components/organism/Header";
//import Main from "./components/organism/Main";
import Footer from "./components/organism/Footer";
import Menu from "./components/pages/menu";
import Note from "./components/pages/note";
import Pomodoro from "./components/pages/pomodoro";
import Rest from "./components/pages/rest";
import style from "./style.module.scss";

function App() {
  return (
    <div className={style.body}>
      <div className={style.wrapper}>
        <HashRouter>
          <Header />
          <Routes>
            <Route exact path="/" element={<Menu />} />
            <Route path="/pomodoro" element={<Pomodoro />} />
            <Route path="/note" element={<Note />} />
            <Route path="/rest" element={<Rest />} />
          </Routes>
          <Footer />
        </HashRouter>
      </div>
    </div>
  );
}

export default App;