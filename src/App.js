import React from "react";
import { useState } from "react/cjs/react.development";
import mockData from "../data.json";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { List } from "./components/List";
import styles from "./index.css"
// import { PracticeContainer } from "./practice/PracticeContainer";

export const App = () => {
  const [foodList, setFoodlist] = useState(mockData);
  return (
    <div className="appContainer">
      {/* <PracticeContainer></PracticeContainer> */}
      <Header changeList={setFoodlist} ></Header>
      <List list={foodList}></List>
      <Footer></Footer>
    </div>
  );
};
