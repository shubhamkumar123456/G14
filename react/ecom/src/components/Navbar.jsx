// rafce
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex fixed top-0 left-0 right-0 px-10 bg-black h-[60px] items-center  justify-between text-white'>
        <h1>Ecom Web</h1>
      <ul className='flex gap-10'>
        <li> <Link to={'/'}> Home</Link> </li>
        <li> <Link to={'/abc'}> Cart</Link> </li>
        <li> <Link to={'/view'}> View</Link> </li>
      </ul>
    </div>
  )
}
export default Navbar
