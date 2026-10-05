import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import TrendingProducts from '../components/TrendingProducts';
import { Link } from 'react-router-dom';

const Home = () => {

    const[productsArr , setProductsArr] = useState([]);
    console.log(productsArr); // [{}, {}, {}....194]

   async function getData(){
        let res =await fetch('https://dummyjson.com/products?skip=0&limit=0'); 
        let data = await res.json();
        // console.log(data); //{}
        // console.log(data.products) //[{}, {}, {}...30]
        setProductsArr(data.products)
    }


    let laptops = productsArr.filter((val)=>val.category==="laptops")//[{},{}..5]
    let smartPhones = productsArr.filter((val)=>val.category==="smartphones")//[{}...16]

    // console.log(laptops)
    // console.log(smartPhones)
    
    useEffect(()=>{
            getData();
    } , [])

    

  return (
    <div className=' text-white pt-10'>
      {/* <h1 className=' text-white h-[60px]'>This is Home Page</h1> */}

      <div className='bg-black text-white p-5'>
        <h1 className='font-bold text-2xl'>Laptops</h1>
        <TrendingProducts data = {laptops}/>
      </div>

      <div className='my-10 bg-black text-white p-5'>
        <h1 className='font-bold text-2xl'>Laptops</h1>
        <TrendingProducts data = {smartPhones}/>
      </div>

      <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-3'>
        {productsArr.map((val , i)=>{
            return <div key={val.id} className='border flex flex-col items-center gap-3 p-10'>
                <img src={val.thumbnail} alt="" />
                <p className='text-black font-semibold text-xl'>{val.title}</p>
                <p>{val.price}</p>
                <button className='bg-black cursor-pointer hover:bg-[#202020] text-white px-5 py-4 w-full rounded-2xl'>Add to Cart</button>
                
                <Link state={val} to={'/view'} className='bg-blue-950 text-center cursor-pointer hover:bg-blue-800 text-white px-5 py-4 w-full rounded-2xl'>View Product</Link>
            </div>
        })}
      </div>
    </div>
  )
}

export default Home
