import React, { useState, useEffect } from "react";
import { Counter } from "./Counter";

export const PracticeContainer = () => {
  const [isVisible, setIsVisible] = useState(false);
  // console.log(isVisible);
  // useEffect(() => {
  //   console.log("RENDER RERENDER");
  // });
  // useEffect(() => {
  //   console.log("MOUNT");
  //   return () => {
  //     console.log("UNMOUNT");
  //   };
  // }, []);
  // useEffect(() => {
  //   console.log("UPDATE");
  // }, [isVisible]);
  return (
    <div>
      <h6>PracticeContainer</h6>
      {isVisible && <Counter></Counter>}
      <div>I am STATE{JSON.stringify(isVisible)}</div>
      <button
        onClick={() => {
          setIsVisible((prevState) => !prevState);
        }}>
        CLick
      </button>
    </div>
  );
};
