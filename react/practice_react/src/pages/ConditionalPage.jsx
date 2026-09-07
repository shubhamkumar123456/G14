import React from 'react'
import { useState } from 'react';
import { FaRegEye } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";

const ConditionalPage = () => {

    // ternary operator --> 
        // let x = 11;
        // if(x>5){
        //     console.log("good")
        // }
        // else{
        //     console.log("not good")
        // }

        // x > 5 ? console.log("good")  :  console.log("not good")

        // let val = false;
        const [val , setVal] = useState(false) //true
            console.log(val); //false //true

        function handleSwap(){
                if(val==true){
                       setVal(false)
                }
                else{
                    setVal(true)
                }       
        }


        const [inputType , setInputType] = useState("password")

        function handleInput(){
            if(inputType==="password"){
                setInputType("text")
            }
            else{
                setInputType("password")
            }
        }
  return (
    <div>
        <h1>This is Conditional Rendering Component</h1>

            { val ? <p>this is para 1</p>  : <p>this is para 2</p> }

            { val  &&  "hello" }
            { !val  &&  "hello again" }
        
        <button onClick={handleSwap}>click me</button> <br />

        <input type={inputType} /> 
        <FaRegEye onClick={handleInput}  size={40} color='green'/>

        <input type={  val===false ? "password" : "text"} />
        <FaFacebookSquare/>
    </div>
  )
}

export default ConditionalPage
