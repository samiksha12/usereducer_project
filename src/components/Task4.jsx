import React from "react";

function Task4({ initialCount = 0, step = 1 }) {
    const countReducer = (state,action)=>{
        if(typeof action === "object"){
            return action;
        }
        if(typeof action === "function"){
           const newState =  action(state);
           return newState;
        }
        return state;
        
    }
  const [state, setState] = React.useReducer(countReducer, {
    count: initialCount,
  });
  const { count } = state;
  const increment = () => setState((currentState) => ({ count: currentState.count + step }));
  const incrementObject = () => setState({ count: count + step });
  return (
    <div>
      <h1>Task4</h1>
      <span>(using function inside setState)</span>
      <div className='counterFlexDiv'>
             <div className='counterDiv'>Counter:{count}</div>
             <div><button onClick={increment}>Click me</button>(action as function)</div>
             <div><button onClick={incrementObject}>Click me</button>(action as object)</div>
         </div>
    </div>
  );
}

export default Task4;
