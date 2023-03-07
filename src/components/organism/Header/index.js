import React from "react";
import style from "./style.module.scss";

const Header = () => {
    let date = new Date().toDateString();  
  return (
    <div className={style.main}>
      <div className={style.container}>
        <p>Ассистент</p>
        <p>{date}</p>
      </div>
      
    </div>
  );
};

export default Header;