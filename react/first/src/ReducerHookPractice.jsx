// rafce
import React, { useReducer, useState } from 'react'

const ReducerHookPractice = () => {

    const[count , setCount] = useState(10);

    function reducers(state, action){
        if(action.task==="increment kro"){
                return state +1;
        }
        if(action.task === "decrement kro"){
                return state -1;
        }
    }

    const[state , disptach] = useReducer( reducers , 11);

    function handleIncrement(){
        // console.log("running")
        // setCount("hello");
        setCount(count+1);
    }

    function handleIncrementReducer(){
        // console.log("running")
        disptach({task:"increment kro"}) // action -->{task:"increment kro"}
    }

    function handleDecrementReducer(){
        disptach({task:"decrement kro"})
    }

  return (
    <div>
        <h1>Reducer Hook Component</h1>
        <p>Count : {count}</p>

        <h1>Reducer Count: {state}</h1>

        <button onClick={handleIncrement}>Increment</button>
        <button>Decrement</button>

        <button onClick={handleIncrementReducer}>Increment Reducer</button>
        <button onClick={handleDecrementReducer}>Decrement Reducer</button>
    </div>
  )
}

export default ReducerHookPractice
