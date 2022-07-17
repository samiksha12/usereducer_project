import React from "react";

function Task3({ initialCount = 0, step = 1 }) {
    const countReducer = (state,action)=>{
        return action;
    }
  const [state, setState] = React.useReducer(countReducer, {
    count: initialCount,
  });
  const { count } = state;
  const increment = () => setState({ count: count + step });
  return (
    <div>
      <h1>Task3</h1>
      <span>(using state as an Object)</span>
      <div className='counterFlexDiv'>
             <div className='counterDiv'>Counter:{count}</div>
             <div><button onClick={increment}>Click me</button></div>
         </div>
    </div>
  );
}

export default Task3;
