import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Home from './pages/Home'
import Cart from './pages/Cart'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import ViewDeatils from './pages/ViewDeatils'
import Navbar from './components/Navbar'
import Login from './pages/Login'
import Signup from './pages/Signup'
import ProtectedRoute from './components/ProtectedRoute'
function App() {
  
  return (
    <>
        {/* <Home/>
        <Cart/> */}

        <BrowserRouter>
          <div className='h-[60px]'>
             <Navbar/>
          </div>
          <Routes>
              <Route path="/" element= {<ProtectedRoute>
                <Home/>
                </ProtectedRoute>}/>

              <Route path='/abc' element={<ProtectedRoute>
                <Cart/>
              </ProtectedRoute>}/>
              <Route path='/view' element={<ProtectedRoute>
                <ViewDeatils/>
              </ProtectedRoute>}/>
              
              <Route path='/login' element={<Login/>}/>
              <Route path='/register' element={<Signup/>}/>
          </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
