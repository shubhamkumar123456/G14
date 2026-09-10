import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

const Home = () => {

    const[productsArr , setProductsArr] = useState([]);
    console.log(productsArr);

   async function getData(){
        let res =await fetch('https://dummyjson.com/products'); 
        let data = await res.json();
        console.log(data); //{}
        console.log(data.products) //[{}, {}, {}...30]
        setProductsArr(data.products)
    }
    
    useEffect(()=>{
            getData();
    } , [])

    

  return (
    <div>
      <h1>This is Home Page</h1>

      <div>
        {productsArr.map((val , i)=>{
            return <div>
                <img src={val.thumbnail} alt="" />
                <p>{val.title}</p>
                <p>{val.price}</p>
                <button>Add to Cart</button>
            </div>
        })}
      </div>
    </div>
  )
}

export default Home
