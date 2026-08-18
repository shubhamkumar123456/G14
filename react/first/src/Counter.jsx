// create component --> rafce

import React from 'react'
import { useState } from 'react';

const Counter = () => {
    // let x = 30

    // const [state , updateFunction ] =  useState(value)

    const [x , updateX] = useState(30) // 31



    function handleIncrement(){
        // console.log("running")
        // x = x + 1;
        // console.log(x)
        updateX(x+1)
    }
  return (
    <div>
      <h1>THis is Counter App</h1>
      <h1> count : {x}</h1>
      <button onClick={handleIncrement}>Increment</button>
      <button>Decrement</button>
      <button>Multiply By 2</button>
      <button>Divide By 2</button>
      <button>Reset</button>
    </div>
  )
}

export default Counter
