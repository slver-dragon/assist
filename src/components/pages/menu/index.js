import React from "react";
import Main from "../../organism/Main";
import style from "./style.module.scss";

const Menu = () => {
  return (
    <div className={style.main}>
      <div className={style.container}>
        <Main />
      </div>
    </div>
  );
};

export default Menu;