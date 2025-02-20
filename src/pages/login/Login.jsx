import React, { useContext, useRef, useState } from 'react'
import './Login.css'
import { LoginContext } from './LoginContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
const Login = () => {
   let loginRef=useRef()
   let [show,setShow]=useState(false)
   let loginToggle=()=>{
    loginRef.current.classList.toggle('active')
    setShow(!show)
   }

    let {login,setLogin}=useContext(LoginContext)
    let [input,setInput]=useState({userName:'',password:''})
    let [err,setErr]=useState({userName:'username',password:'password'})
    let [color,setColor]=useState({userName:' rgb(32, 216, 0)',password:' rgb(32, 216, 0)'})
    let [isChecked, setIsChecked] = useState(false);

   
      let handleInput = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });
    
        if (e.target.name === 'userName') {
          if (e.target.value === '') {
            setErr({ ...err, userName: 'enter user name' });
            setColor({...color,userName:'red'});
         
          }
         

          else if (e.target.value.length <= 8) {
            setErr({ ...err, userName: 'name should be greater than 8' });
            setColor({...color,userName:'orange'});
            // setIsValid(false);
          } 
          else if(e.target.value !== 'bisworanjan'){
            setErr({...err,userName:'user name not match'})
            setColor({...color,userName:'red'});
          }
          else {
            setErr({ ...err, userName: 'username' });
            setColor({...color,userName:' rgb(32, 216, 0)'});
          }
        }
        // password section 
        else if (e.target.name === 'password') {
          if (e.target.value === '') {
            setErr({ ...err, password: 'enter password' });
            setColor({...color,password:'red'});
           
          }
         
          else if (e.target.value.length <= 8) {
            setErr({ ...err, password: 'password should be greater than 8' });
            setColor({...color,password:'orange'});
          
        }
        else if(e.target.value !== 'webdeveloper'){
            setErr({...err,password:'password not match'})
            setColor({...color,password:'red'});
          }
        else {
          setErr({ ...err, password: 'password' });
          setColor({...color,password:' rgb(32, 216, 0)'});
         
        }
       
        
    } 
      };
    
      let handleCheckboxChange = (e) => {
        setIsChecked(e.target.checked);
      };
    
      let handleSubmit = () => {
        if (input.userName.length > 8 && 
            input.password.length > 8 && 
            input.userName == 'bisworanjan' && 
            input.password == 'webdeveloper' && 
            isChecked) {
          setLogin(true);
        } else {
          if(input.userName == ''&& input.password == ''){

            setErr({...err,userName:'type username',password:'type password'})
            setColor({...color,userName:'red',password:'red'})
           
          }
         
          setLogin(false);
        }
      };
    
  
    return (
        <div className='login-div'  ref={loginRef}>
            <div className="login-form">
                <div className="login-title">
                    <h4>LogIn</h4>
                </div>
                <div className="login-input">
                    <input type="text" name='userName'  onChange={handleInput} placeholder='type username' /><br />
                    <p style={{color:color.userName}}>{err.userName}</p>
                    <input type="text" name='password' onChange={handleInput}  placeholder='type password' /><br />
                    <p style={{color:color.password}}>{err.password}</p>
                    <div className="check-loginbtn-div">
                        <div className="check-mark">

                            <input type="checkbox" 
                              onChange={handleCheckboxChange} 
                              checked={isChecked}              
                            /><span>select check mark</span>
                        </div>
                        <div className="login-btn">
                            <button onClick={()=>{
                               
                                handleSubmit()
                                }}>Login</button>
                        </div>
                    </div>
                </div>
            </div>
                <div className="toggle-main-div">
                  <div className="light-dark">
                  {
                    show ?
                   <h3> <FontAwesomeIcon icon={faMoon}/></h3>:
                   <h3> <FontAwesomeIcon icon={faSun}/></h3>
                  } 
                  </div>
                <div className="login-toggle-div " onClick={loginToggle}>
                  <div className="login-toggle"></div>
                 </div>
                </div>
        </div>
    )
}

export default Login
