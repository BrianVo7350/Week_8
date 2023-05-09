import React, { Component } from 'react';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import Login from './views/Login'
import Signup from './views/Signup'
// import Home from '/.views/Home'

export default function App () {

  const [user, setUser] = useState({})

  const logMeIn = (user) => {
    setUser(user)
  };
  const logMeOut = () => {
    setUser({})
  };
  
    return (
        <div>
          <Navbar></Navbar>
          <Routes>
            {/* <Route path='/' element={<Home />} /> */}
            <Route path='/Login' element={<Login />} />
            <Route path='/Signup' element={<Signup />} />
          </Routes>
        </div>
    )
  
};
