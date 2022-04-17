import React from "react";
import style from "./style.module.css";
import "./styleCommon.css";
import cn from "classnames";
import { useState } from "react";
const Button = () => {
  const [isColorfull, setColorfull] = useState(false);
  // const [col, setCol] = useState("red");
  const handleClick = () => {
    setColorfull((prevState) => !prevState);
    console.log(isColorfull);

    // if (isColorfull) {
    //   setCol("green");
    // } else {
    //   setCol("red");
    // }
  };

  return (
    <button
      // style={{
      //   backgroundColor:col
      // }}
      className={
        cn("smallHeader",{
          [style.green] : !isColorfull,
          [style.red]: isColorfull
        })
      }
      onClick={handleClick}>
      Change button collour
    </button>
  );
};

export const Styles = () => {
  console.log(style);
  const styleObject = {
    textAlign: "center",
  };
  return (
    <div className={cn(style.basic, "header")}>
      I AM DIV DIV DIV!!!
      <Button></Button>
    </div>
  );
};
