// create a functional component --> rafce , rfce , rfc rafc

import React from 'react'
import { CiMobile1 } from "react-icons/ci";
import { FaMobile } from "react-icons/fa";

function Home() {
  let expensesArr = [
    {id:1 , expenseName:"petrol" , price:300 , date:"12-08-26"},
    {id:2 , expenseName:"Dinner" , price:500 , date:"13-08-26"},
    {id:3 , expenseName:"Zoo" , price:700 , date:"14-08-26"},
    {id:4 , expenseName:"mobile recharge" , price:600 , date:"30-08-26"},
  ]
  let x = 10
  return (
    <div>
      {/* <h1>THis is Home Page</h1> */}
      {/* <FaMobile size={60} color='green'/> */}
      <h1>Expense Tracker App</h1>

      {/* <div>
        <p>{expensesArr[0].id}</p>
        <p>{expensesArr[0].expenseName}</p>
        <p>{expensesArr[0].price}</p>
        <p>{expensesArr[0].date}</p>
      </div>
      <div>
        <p>{expensesArr[1].id}</p>
        <p>{expensesArr[1].expenseName}</p>
        <p>{expensesArr[1].price}</p>
        <p>{expensesArr[1].date}</p>
      </div> */}

      {/* {
        expensesArr.map((val , i)=>{
          return <div>
                <p>{val.id}</p>
                <p>{val.expenseName}</p>
                <p>{val.price}</p>
                <p>{val.date}</p>
          </div>
        })
      } */}

      <table border={1}>
          <thead>
            <tr>
              <th>Sno</th>
              <th>Expense Name</th>
              <th>Price</th>
              <th>Date</th>
              <th></th>
            </tr>
          </thead>

          <tbody>
              {/* <tr>
                <td>{expensesArr[0].id}</td>
                <td>{expensesArr[0].expenseName}</td>
                <td>{expensesArr[0].price}</td>
                <td>{expensesArr[0].date}</td>
                <td>{expensesArr[0].date}</td>
              </tr> */}

              {
                expensesArr.map((val, i)=>{
                  return <tr>
                        <td>{val.id}</td>
                        <td>{val.expenseName}</td>
                        <td>{val.price}</td>
                        <td>{val.date}</td>
                        <td><button>Delete</button></td>
                  </tr>
                })
              }
          </tbody>
      </table>


    </div>
  )
}

export default Home

