import React from "react";
import Button from "../../atom/Button";
import { Link } from "react-router-dom";
import style from "./style.module.scss";

const Main = () => {
  return (
    <div className={style.main}>
      <div className={style.container}>
        <Link to="pomodoro">
          <Button text="Pomodoro" />
        </Link>
        <Link to="note">
          <Button text="Заметки" />
        </Link>
        <Button text="3" />
        <Link to="rest">
          <Button text="Отдых" />
        </Link>
      </div>

    </div>
  );
};

export default Main;