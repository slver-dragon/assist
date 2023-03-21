import React from "react";
import { Link } from "react-router-dom";
import Button from "../../atom/Button";
import style from "./style.module.scss";

const Rest = () => {
    return (
        <div className={style.main}>
            <div className={style.container}>
                <Link to="/">
                    <Button text="Возврат в меню" />
                </Link>
                <p>Здесь можно будет отдохнуть и поиграться</p>
            </div>
        </div>
    );
};

export default Rest;