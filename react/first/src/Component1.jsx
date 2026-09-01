import React from 'react'
import ChildComponent from './ChildComponent'

const Component1 = (props) => {
    
     let x = 10;
  return (
    <div style={{backgroundColor:"brown",padding:"30px"}}>
      
        <h1>This is Component 1</h1>
        <ChildComponent data={x} arr={[10, 20, 30]} />

    </div>
  )
}

export default Component1
