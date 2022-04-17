import React, { useState } from "react";
import style from "./style.module.css";

export const Header = ({ changeList }) => {
  const [inputValue, setInputValue] = useState("");
  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    changeList((prevList) => {
      console.log(prevList);

      return prevList.filter(({name})=>name.includes(value));
    });
  };
  return (
    <div className={style.mainContainer}>
      <div className={style.logoContainer}>logo</div>
      <div className={style.searchContainer}>
        <input onChange={handleChange}></input>
      </div>
      <div className={style.restButtonsContainer}>restbuttons</div>
    </div>
  );
};
