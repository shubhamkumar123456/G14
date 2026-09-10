import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

const TryEffect = () => {
    const[count , setCount] = useState(0);//

    useEffect(()=>{
               for(let i=1; i<=10; i++){
                    console.log(i)
            }
    } , [])


    console.log(count);//0

    function handleIncrement(){
            setCount(count+1)
    }

    

    
  return (
    <div>
      <h1>This is use Effect component</h1>
      <p>Count = {count}</p>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  )
}

export default TryEffect
