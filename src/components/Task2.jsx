import React from 'react'

function Task2({ initialCount = 0, step = 1 }) {
    const countReducer =(state,action)=>{
        const newState = state + action.step;
         return newState;
     }
     const[count,setCount]=React.useReducer(countReducer,initialCount);
     const increment =()=>{
         setCount({step});
     }
   return (
     <div>
         <h1>Task2</h1>
         <span>(passing step as a action in setCount)</span>
         <div className='counterFlexDiv'>
             <div className='counterDiv'>Counter:{count}</div>
             <div><button onClick={increment}>Click me</button></div>
         </div>
     </div>
   )
}

export default Task2