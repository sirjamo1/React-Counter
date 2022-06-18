import React from "react";
import Header from "./components/Header.js";
import Count from "./components/Count.js"
export default function App() {
  const [count, setCount] = React.useState(0);

  function add() {
    setCount((prevCount) => prevCount + 1);
  }

  function subtract() {
    setCount((prevCount) => prevCount - 1);
  }

  return (
    <div className="main--container">
      <Header />
      <div className="counter--container">
        <button className="counter--minus" onClick={subtract}>
          –
        </button>
        <Count number={count} />
        <button className="counter--plus" onClick={add}>
          +
        </button>
      </div>
    </div>
  );
}
