import React from 'react';
import { useDispatch,useSelector } from 'react-redux'
import { decrementCounter, incrementCounter, resetCounter } from '../services/actions/counterAction';

const Counter = () => {
    const count =useSelector(state =>state.count)
    const dispatch =useDispatch();

    const handleIncrement =()=>{
        dispatch(incrementCounter());
    }
    const handleDecrement =()=>{
        dispatch(decrementCounter());
    }
    const handleReset =()=>{
        dispatch(resetCounter());
    }
  return (
    <div>
        <h2>Counter App</h2>
        <h3>Count : {count}</h3>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
        <button onClick={handleReset}>Reset</button>
    </div>
  )
}

export default Counter;


//Counter->Counter2 -> counter3

// 1. State-count: 0
// 2. ACtions-incrememtn, decrement, reset
// 3. reducer - logic->incriment-> count=count+1
//                 deccriment-> count=count-1
//                 reset-> count=>0
// 4. store 
// 5.Providing Store in React
// 6.Use Store

