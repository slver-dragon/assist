import React from "react";
import { Link } from "react-router-dom";
import Button from "../../atom/Button";
import style from "./style.module.scss";

const Note = () => {
    return (
        <div className={style.main}>
            <div className={style.container}>
                <Link to="/">
                    <Button text="Возврат в меню" />
                </Link>
                <p>Здесь будет Блокнот</p>
            </div>
        </div>
    );
};

export default Note;