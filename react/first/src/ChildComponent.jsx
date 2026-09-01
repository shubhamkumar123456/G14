import React from 'react'

const ChildComponent = (props) => {

    console.log(props)  //{data:10, arr:[10, 20, 30]}
    console.log(props.data)
   
  return (
    <div style={{backgroundColor:"aqua"}}>
      This is Child Component
      <p>{props.data}</p>
    </div>
  )
}

export default ChildComponent
