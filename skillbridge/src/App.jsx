import { useState } from 'react';
import './App.css';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import AdminDashboard from './Pages/DashBoard';
import HomePage from './Pages/Home';
import Navbar from './Pages/Navbar';
import AdminLogin from './Pages/AdminLogin';
 // ✅ Add this line
// import HomePage from './Pages/Home';
// import Navbar from './Pages/Navbar';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <HomePage /> 
      <Login />
      <SignUp />
      <AdminLogin/>
      <AdminDashboard /> 
    </>
  );
}

export default App;
