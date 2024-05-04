import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [count, setCount] = useState(0);

  const incrementHandler = () => {
    setCount(count + 1);
  };

  const decrementHandler = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const resetHandler = () => {
    setCount(0);
  };

  return (
    <div className="content">
      <h1>Counter App</h1>
      <h2>{count}</h2>
      <div className="button">
        <button onClick={incrementHandler}>+</button>
        <button onClick={decrementHandler}>-</button>
        <button onClick={resetHandler}>Reset</button>
      </div>
    </div>
  );
};

export default App;
