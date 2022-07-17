import React from "react";

function Task5({ initialCount = 0, step = 1 }) {
    const countReducer = (state,action)=>{
        switch(action.type){
            case 'INCREMENT':
                const countIncrease=state.count + action.step;
                return {...state, count:countIncrease}
            case 'DECREMENT':
                const countDecrease=state.count - action.step;
                return {...state, count:countDecrease}
            default:
                return state;
        }
    }
  const [state, dispatch] = React.useReducer(countReducer, {
    count: initialCount,
  });
  const { count } = state;
  const increment = () => dispatch({ type: 'INCREMENT', step });
  const decrement = () => dispatch({ type: 'DECREMENT', step });
  return (
    <div>
      <h1>Task5</h1>
      <span>(using switch case for action type)</span>
      <div className='counterFlexDiv'>
             <div className='counterDiv'>Counter:{count}</div>
             <div><button onClick={increment}>Increment</button></div>
             <div><button onClick={decrement}>Decrement</button></div>
         </div>
    </div>
  );
}

export default Task5;
