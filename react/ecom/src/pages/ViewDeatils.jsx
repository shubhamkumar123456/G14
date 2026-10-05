// rafce
import React from 'react'
import { useLocation } from 'react-router-dom'

const ViewDeatils = () => {
  let location = useLocation() // {path, state}
  // console.log(location.state)
  let product = location.state  //{id:titlem,price}
  console.log(product)
  return (
    <div>
      {/* <h1>This is View Detail Page</h1> */}
      <div className='border justify-center rounded-3xl items-center flex lg:flex-row flex-col gap-10 p-20 w-[80%] mx-auto'>
        <div>
          <img className='min-w-[350px]' src={product.thumbnail} alt="" />
        </div>

        <div className='flex flex-col gap-4 text-xl'>
            <h1><span className='font-bold'>Title:</span>{product.title}</h1>
            <h1><span className='font-bold'>Price:</span>{product.price}</h1>
            <h1><span className='font-bold'>Brand:</span>{product.brand}</h1>
            <h1><span className='font-bold'>Category:</span>{product.category}</h1>
            <h1><span className='font-bold'>Rating:</span>{product.rating}</h1>
            <h1><span className='font-bold'>Return Policy:</span>{product.returnPolicy}</h1>
            <h1><span className='font-bold'>Stocks:</span>{product.stock}</h1>
            <h1><span className='font-bold'>weight:</span>{product.weight}</h1>
            <h1><span className='font-bold'>Warranty Information:</span>{product.warrantyInformation}</h1>
            <h1>{product.description}</h1>
        </div>

      </div>
    </div>
  )
}

export default ViewDeatils
