import React, { useState } from 'react';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import Login from './views/Login'
import Signup from './views/Signup'
import List from './views/List'
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
          <Navbar user={user} logMeOut={logMeOut}/>
          <Routes>
            {/* <Route path='/' element={<Home />} /> */}
            <Route path='/Login' element={<Login logMeIn={logMeIn} user={user}/>} />
            <Route path='/Signup' element={<Signup />} />
            <Route path='/List' element={<List />}/>
          </Routes>
        </div>
    )
  
};
