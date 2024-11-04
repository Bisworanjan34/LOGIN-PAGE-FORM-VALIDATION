import React, { useContext } from 'react'
import './Navbar.css'
import { LoginContext } from '../../pages/login/LoginContext'
const Navbar = () => {
  let {login,setLogin}=useContext(LoginContext)
  return (
    <div>
      <div className="container " style={{height:'50px'}}>
        <div className="row align-items-center h-100">
            <div className="col-3 align-items-center h-100 d-flex">
                <div className="logo">
                    <h3>Login</h3>
                </div>
            </div>
            <div className="col-6 d-flex justify-content-center gap-4 align-items-center nav-cont ">
             <p>Home</p>  
              <p onClick={()=>{
                  setLogin(false)
                  }}>Logout</p>
                  <p>id::-bisworanjan</p>
                  <p>pas::-webdeveloper</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
