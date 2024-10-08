import React from "react";
import style from "./button.module.scss";

export const Button = ({children, variant, type="button"}) => {
    return <button className={`${style[variant]} ${style.btn}`} type={type}>{children}</button>
}