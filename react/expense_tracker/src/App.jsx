import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import PNF from './PNF'
function App() {
  
  return (
    <div>
      {/* <Home/>
      <Home/> */}
      {/* <Home/>
      <About/>
      <Contact/> */}
      <BrowserRouter>
            <Navbar/>
          <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/xyz' element={<About/>}/>
              <Route path='/abc' element={<Contact/>}/>
              <Route path='*' element={<PNF/>}/>
          </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
