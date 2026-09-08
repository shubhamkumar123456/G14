import './App.css'
import About from './pages/About'
import Contact from './pages/Contact'
import Navbar from './components/Navbar'

import {BrowserRouter , Routes , Route} from 'react-router-dom'
import ConditionalPage from './pages/ConditionalPage'
import TryEffect from './pages/TryEffect'


export function Home(){
    return (
      <div>
          <h1>This is Home Page</h1>
      </div>
    )
}



function App() {
    let x = 10
  return (
    <div>
      {/* <h1>This is App component</h1>
      <Home/>
      <Home/>
      <About/>
      <Contact/> */}
      <BrowserRouter>
        <Navbar/>
          <Routes>
              <Route path='/'  element={<Home/>}/>
              <Route path='/about' element={<About a={x} b={"hello"}/>}/>
              <Route path='/xyz' element={<Contact/>}/>
              <Route path='/condition' element={<ConditionalPage/>}/>
              <Route path="/effect"  element={<TryEffect/>} />
          </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
