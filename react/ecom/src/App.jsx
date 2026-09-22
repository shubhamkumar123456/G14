import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Home from './pages/Home'
import Cart from './pages/Cart'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import ViewDeatils from './pages/ViewDeatils'

function App() {
  
  return (
    <>
        {/* <Home/>
        <Cart/> */}

        <BrowserRouter>
          <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path='/abc' element={<Cart/>}/>
              <Route path='/view' element={<ViewDeatils/>}/>
          </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
