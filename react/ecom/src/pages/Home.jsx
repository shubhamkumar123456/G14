import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import TrendingProducts from '../components/TrendingProducts';
import { Link } from 'react-router-dom';
import InfiniteScroll from 'react-infinite-scroll-component';

const Home = () => {

    const[productsArr , setProductsArr] = useState([]);
    const[slicedArr , setSlicedArr] = useState([]);
    const [skip, setskip] = useState(0);
    const [hasMore, sethasMore] = useState(true);
    
    const limit = 10
    console.log(productsArr); // [{}, {}, {}....194]

   async function getData(){
        if(slicedArr.length ==0){
          let res =await fetch('https://dummyjson.com/products?skip=0&limit=0'); 
          let data = await res.json();
        // console.log(data); //{}
        // console.log(data.products) //[{}, {}, {}...30]
          setProductsArr(data.products)  //[{}, {}, {}...194]
          setSlicedArr(data.products.slice(skip, limit));
          setskip(limit)
        }
        else{ 
              
            setSlicedArr([...slicedArr ,...productsArr.slice(skip , skip+limit)])
            setskip(skip + limit)
        }
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
        <h1 className='font-bold text-2xl'>Smartphones</h1>
        <TrendingProducts data = {smartPhones}/>
      </div>

      <InfiniteScroll
        dataLength={slicedArr.length}
      next={getData}
      hasMore={hasMore}
      loader={<p>Loading...</p>}
      endMessage={<p style={{ textAlign: 'center' }}>All items loaded.</p>}
      className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-3'>

        {slicedArr.map((val , i)=>{
            return <div key={val.id} className='border flex flex-col items-center gap-3 p-10'>
                <img src={val.thumbnail} alt="" />
                <p className='text-black font-semibold text-xl'>{val.title}</p>
                <p>{val.price}</p>
                <button className='bg-black cursor-pointer hover:bg-[#202020] text-white px-5 py-4 w-full rounded-2xl'>Add to Cart</button>
                
                <Link state={val} to={'/view'} className='bg-blue-950 text-center cursor-pointer hover:bg-blue-800 text-white px-5 py-4 w-full rounded-2xl'>View Product</Link>
            </div>
        })}
      </InfiniteScroll>
    </div>
  )
}

export default Home
