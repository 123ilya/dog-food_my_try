import React from "react";
import { Card } from "../Card";

export const List = ({ list }) => {
  // console.log(list);
  return (
    <div>
      {list.map((item, index) => (
        <Card itemFood={item} key={index}></Card>
      ))}
    </div>
  );
};
