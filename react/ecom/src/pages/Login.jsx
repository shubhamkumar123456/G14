import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='w-[550px] m-auto'>
      <h1>This is Login page</h1>
      <form action="" className='border flex flex-col p-5 rounded-2xl gap-2'>
      
                  <label htmlFor="">Email</label>
                  <input className='border px-2 py-1 rounded' type="email" placeholder='enter your email' />
      
                  <label htmlFor="">Password</label>
                  <input className='border px-2 py-1 rounded' type="password" placeholder='enter your password' />
                  <button className='bg-green-950 text-white w-full hover:bg-green-700 rounded p-2'>Signup</button>
      
                  <p className='text-center'>Don't have an account ? <Link className='text-blue-700' to={'/register'}>Signup</Link></p>
            </form>
    </div>
  )
}

export default Login
