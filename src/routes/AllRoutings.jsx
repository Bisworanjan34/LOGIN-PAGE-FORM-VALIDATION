import React, { useContext } from 'react'
import Navbar from '../components/navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/home/Home'
import Login from '../pages/login/Login'
import { LoginContext } from '../pages/login/LoginContext'

const AllRoutings = () => {
    let {login,setLogin}=useContext(LoginContext)
  return (
    <div>
       <Navbar/>
  <Routes>
     <Route path='/' element={login ?<Home/>:<Login/>}/>
    
  </Routes>
    </div>
  )
}

export default AllRoutings
