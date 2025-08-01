import { useState } from 'react'
import './App.css'
import Login from './Pages/Login'
import SignUp from './Pages/SignUp'
// import HomePage from './Pages/Home'
// import Navbar from './Pages/Navbar'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      {/* <Navbar/>   
  <HomePage/> */}
  <Login/>
  <SignUp/>


      
    </>
  )
}

export default App
