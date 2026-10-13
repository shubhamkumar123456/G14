import React, { useRef } from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {

    let nameRef = useRef()  //{current:undefined}   // {current:<input>}
    let emailRef = useRef()
    let passwordRef = useRef()

    function handleSubmit(e){
        e.preventDefault();
        let obj =  {
            name: nameRef.current.value,
            email:emailRef.current.value,
            password:passwordRef.current.value
        }

        console.log(obj)
    }
  return (
    <div className='w-[550px] m-auto'>
      <h1>This is Signup page</h1>
      <form action="" className='border flex flex-col p-5 rounded-2xl gap-2'>
            <label htmlFor="">Name</label>
            <input ref={nameRef} className='border px-2 py-1 rounded' type="text" placeholder='enter your name' />

            <label htmlFor="">Email</label>
            <input ref={emailRef} className='border px-2 py-1 rounded' type="email" placeholder='enter your email' />

            <label htmlFor="">Password</label>
            <input ref={passwordRef} className='border px-2 py-1 rounded' type="password" placeholder='enter your password' />
            <button onClick={handleSubmit} className='bg-green-950 text-white w-full hover:bg-green-700 rounded p-2'>Signup</button>

            <p className='text-center'>Already a user ? <Link className='text-blue-700' to={'/login'}>Login</Link></p>
      </form>
    </div>
  )
}

export default Signup
