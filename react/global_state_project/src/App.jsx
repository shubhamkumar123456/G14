
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import UserState from './context/UserState';

function App() {
 
    let x = 10;

  return (
   
    <div style={{backgroundColor:"black" , color:"white",padding:"30px",minHeight:"60vh"}}>
        <Home x={x}/>
        <About data={x}/>
    </div>

  )
}

export default App
