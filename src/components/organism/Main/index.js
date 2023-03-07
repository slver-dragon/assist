import React from "react";
import style from "./style.module.scss";
import Button from "../../atom/Button";

const Main = () => {
  return (
    <div className={style.main}>
      <div className={style.container}>
        <Button text="1" />
        <Button text="2" />
        <Button text="3" />
      </div>

    </div>
  );
};

export default Main;