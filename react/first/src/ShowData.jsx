// component create -->  rafce ,rafc , rfce, rfc

import React from 'react'

const ShowData = () => {
    //write  variable or function decleration here -->
    let x = 10;
    let text = "hello";
    let data = {name:"one", age:33, course:"fullstack"}
    
    let arr = [10, 20, 30, 40];

    let products = [
        {name:"iphone", price:45000, rating:3},
        {name:"Nokia", price:55000, rating:2},
        {name:"Realme", price:65000, rating:3},
        {name:"MI", price:75000, rating:4},
        {name:"Oppo", price:85000, rating:5},
    ]
  return (
    <div>
            { arr.map((val , i)=>{
                return <p>{val}</p>
            })}

        {/* <p>{arr[0]}</p>
        <p>{arr[1]}</p>
        <p>{arr[2]}</p>
        <p>{arr[3]}</p> */}

      <h1>This is Show Component</h1>
      <p>{x}</p>
      <p>{text}</p>

      <p>Username = {data.name}</p>
      <p>Userage = {data.age}</p>
      <p>Course  = {data.course}</p>
    </div>
  )
}

export default ShowData
