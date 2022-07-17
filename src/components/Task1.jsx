import React from "react";

function Task1({ initialCount = 0, step = 1 }) {
  const countReducer = (state, action) => {
    return action;
  };
  const [count, setCount] = React.useReducer(countReducer, initialCount);
  const increment = () => {
    setCount(count + step);
  };
  return (
    <div>
      <h1>Task1</h1>
      <span>(using setCount(count + step))</span>
      <div className="counterFlexDiv">
        <div className="counterDiv">Counter:{count}</div>
        <div><button onClick={increment}>Click me</button></div>
      </div>
    </div>
  );
}

export default Task1;
