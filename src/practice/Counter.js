import React from "react";
import { useEffect, useState } from "react/cjs/react.development";

export const Counter = () => {
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    console.log("UPDATE, counter");
  }, [counter]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prevState) => (prevState += 1));
    }, 1000);
    return () => {
      console.log("UNMOUNT");
      clearInterval(interval);
    };
  }, []);
  return <div>{counter}</div>;
};
