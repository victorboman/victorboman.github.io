import React, { useState } from "react";
import "./incrementor.scss";

function Incrementor(props) {
  const { initialValue } = props;
  const [counter, setCounter] = useState(initialValue);

  const increaseCounter = () => {
    setCounter(counter + 1);
  };

  const decreaseCounter = () => {
    setCounter(counter - 1);
  };
  return (
    <div className="wrapper">
      <button className="button_add" onClick={increaseCounter}>
        Add
      </button>
      <p className="counter">
        <span>{counter}</span>
      </p>
      <button className="button_reduce" onClick={decreaseCounter}>
        Reduce
      </button>
    </div>
  );
}

export default Incrementor;
