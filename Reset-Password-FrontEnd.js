



Password-Reset-FrontEnd code


ApiServices.jsx :

import axios from "axios";

const AxiosService = axios.create({
    baseURL:`${import.meta.env.VITE_API_URL}`,
    headers:{
        "Content-Type":"application/json"
    }
})

export default AxiosService

App.css : 

* {
    box-sizing: border-box;
  }
  
  html,
  body,
  .wrapper {
    height: 100%;
  }
  
  @keyframes gradient {
    100% {
      background-size: 4000px 1000px;
    }
  }
     /*---------------- login and signup Css starts  here ----------- */
  
  body {
    display: grid;
    place-items: center;
    margin: 0;
    padding: 0 24px;
    background-color: #0C2435 !important;
    background-size: 2600px 1100px;
    background-position: -500px 0;
    color: #f9f9f9 !important;
    font-family: "Euclid Circular A";
    /* animation: gradient 10s infinite alternate linear; */
  }
  
  @media (width >= 500px) {
    body {
      padding: 0;
    }
  }
  
  .login {
    position: fixed;
    z-index: 3;
    top: 50%;
    left: 50%;
    translate: -50% -50%;
    width: 90%;
    padding: 70px 30px 44px;
    border-radius: 22px;
    background: #1b1a1a ;
    text-align: center;
  }
  
  @media (width >= 450px) {
    .login {
      width: 380px;
    }
  }
  
  .avatar {
    margin: 0 auto 16px;
    border-radius: 50%;
    background: linear-gradient(-45deg, #157ae1, #c7a1ff);
    padding: 2px;
    width: 120px;
    height: 120px;
  }
  
  .avatar > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
  
    border: 4px solid #161616;
  }
  
  .login > h2 {
    font-size: 36px;
    font-weight: 500;
    margin: 0 0 4px;
  }
  
  .login > h3 {
    color: rgba(255, 255, 255, 0.38);
    margin: 0 0 30px;
    font-weight: 500;
    font-size: 16px;
   
  }
  
  .login-form {
    display: grid;
    gap: 16px;
    place-items: center;
    width: 100%;
    margin: 0;
  }
  
  .textbox {
    width: 100%;
    position: relative;
  }
  
  .textbox span {
    position: absolute;
    top: 50%;
    left: 16px;
    translate: 0 -50%;
    color: rgba(231, 223, 223, 0.38);
  }
  
  .login-form input,
  .login-form button {
    width: 100%;
    height: 60px;
    outline: none;
    padding: 0;
    font-family: inherit;
    font-size: 16px;
    border-radius: 8px;
  }
  
  .login-form input {
    background: transparent;
    border: 2px solid rgba(228, 224, 224, 0.1);
    font-size: 18px;
    padding: 0 20px 0 50px;
    color: inherit;
  }
  
  .login-form input:focus {
    border-color: #157ae1;
  }
  
  .login-form input:focus ~ span {
    color: #157ae1;
  }
  
  .login-form button {
    cursor: pointer;
    background: #157ae1;
    color: #f9f9f9;
    border: 0;
    font-weight: 600;
    letter-spacing: 2px;
  }
  
  .login-form a {
    color: #157ae1;
    font-size: 16px;
    text-align: left;
    text-decoration: none;
  }
  
     /*---------------- login and signup Css ends  here ----------- */
  
  
  
  
     /*---------------- Dashboard Css starts  here ----------- */
  
  
  canvas { 
    overflow: hidden;
    width:100vw;
    height:100vh;
    background-color:black;
  }
  
  
  @font-face {
    font-family: Clip;
    src: url("https://acupoftee.github.io/fonts/Clip.ttf");
  }
  
  /* body {
    background-color: #141114;
    background-image: linear-gradient(335deg, black 23px, transparent 23px),
      linear-gradient(155deg, black 23px, transparent 23px),
      linear-gradient(335deg, black 23px, transparent 23px),
      linear-gradient(155deg, black 23px, transparent 23px);
    background-size: 58px 58px;
    background-position: 0px 2px, 4px 35px, 29px 31px, 34px 6px;
  } */
  
  .sign {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    height: 50%;
    transform: translate(-50%, -50%);
    letter-spacing: 2;
    left: 50%;
    top: 50%;
    font-family: "Clip";
    text-transform: uppercase;
    font-size: 6em;
    color: lightgrey;
    
  }
  
 
  /* -------logout button ------- */
  
  
  
  #log {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    background: lightskyblue;
    font-family: "Montserrat", sans-serif;
    box-shadow: 0px 6px 24px 0px rgba(0, 0, 0, 0.2);
    overflow: hidden;
    border: none;
   }
   
  #log:after {
    content: " ";
    width: 0%;
    height: 100%;
    background: #c5c221f3;
    position: absolute;
    transition: all 0.4s ease-in-out;
    right: 0;
   }
  #log:hover::after {
    right: auto;
    left: 0;
    width: 100%;
   }
   
  #log span {
    text-align: center;
    text-decoration: none;
    width: 100% !important;
    padding: 18px 25px;
    color: #fff;
    font-size: 15px;
    font-weight: 700;
    letter-spacing: 0.3em;
    z-index: 20;
    transition: all 0.3s ease-in-out;
   }
   
  #log:hover span {
    color: #000207;
    animation: scaleUp 0.3s ease-in-out;
   }
   
   @keyframes scaleUp {
    0% {
     transform: scale(1);
    }
   
    50% {
     transform: scale(0.95);
    }
   
    100% {
     transform: scale(1);
    }
   }
  
  
  
  
  
  
  
     /* @import url("https://fonts.googleapis.com/css?family=Source+Sans+Pro");
  :root,
  body {
    color: #fff;
    height: 100%;
    overflow: hidden;
    background: #333641;
  }
  body {
    display: flex;
    align-items: center;
    justify-content: center;
  }  */
  .wel {
    background: 50% 100% / 50% 50% no-repeat
                radial-gradient(ellipse at bottom, #fff, transparent, transparent);
    -webkit-background-clip: text;
    background-clip: text;
    color: white;
    font-size: 8vw;
    font-family: "Source Sans Pro", sans-serif;
    
  
    @keyframes reveal {
      80%{
        letter-spacing: 8px;
      }
      100% {
        background-size: 300% 300%;
      }
    }
    @keyframes glow {
      40% {
        text-shadow: 0 0 8px #fff;
      }
    }
  }
   
  
  /*---------------- Dashboard Css ends  here ----------- */



  .loading-screen {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    backdrop-filter: blur(2px);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
  }
    
  .loading-spinner {
    border: 4px solid #ebe8e8;
    border-top: 4px solid rgb(133, 133, 189);
    border-radius: 50%;
    width: 30px;
    height: 30px;
    animation: spin 1.5s linear infinite;
  }
    
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  } 


  @media only screen and (max-width: 767px) {
    canvas {

width:470px;
height: 1150px;
margin-left: -50px;


      
    }

    .wel{
      font-size: 70px;
      margin-top: 40px;
      color: #fff;
    }
    #sp{
      width: 120px;
      font-size: 15px;
      padding-right: 2px;

    }
    .login{

      width:370px;
    }
    
    /* Additional styles for other elements if needed */
  }


Dashboard.jsx :

import React, { useEffect, useRef,useState} from 'react';
import useLogout from '../hooks/useLogout.jsx';


function Dashboard() {
 const logout = useLogout()
  const ParticleCanvas = () => {
    const canvasRef = useRef(null);
    let w, h, ctx, rate, arc, time, count, size, speed, parts, colors, mouse;

    useEffect(() => {
      const canvas = canvasRef.current;
      ctx = canvas.getContext('2d');
      rate = 60;
      arc = 100;
      size = 7;
      speed = 20;
      colors = ['red', '#f57900', 'yellow', '#ce5c00', '#5c3566'];
      mouse = { x: 0, y: 0 };

      const resizeCanvas = () => {
        w = window.innerWidth;
        h = window.innerHeight;
        canvas.width = w;
        canvas.height = h;
      };

      const create = () => {
        time = 0;
        count = 0;
        parts = [];

        for (let i = 0; i < arc; i++) {
          parts[i] = {
            x: Math.ceil(Math.random() * w),
            y: Math.ceil(Math.random() * h),
            toX: Math.random() * 5 - 1,
            toY: Math.random() * 2 - 1,
            c: colors[Math.floor(Math.random() * colors.length)],
            size: Math.random() * size,
          };
        }
      };

      const particles = () => {
        ctx.clearRect(0, 0, w, h);

        for (let i = 0; i < arc; i++) {
          const li = parts[i];
          const distanceFactor = DistanceBetween(mouse, parts[i]);
          const distance = Math.max(Math.min(15 - distanceFactor / 10, 10), 1);
          ctx.beginPath();
          ctx.arc(li.x, li.y, li.size * distance, 0, Math.PI * 2, false);
          ctx.fillStyle = li.c;
          ctx.strokeStyle = li.c;
          if (i % 2 === 0) ctx.stroke();
          else ctx.fill();

          li.x = li.x + li.toX * (time * 0.05);
          li.y = li.y + li.toY * (time * 0.05);

          if (li.x > w) li.x = 0;
          if (li.y > h) li.y = 0;
          if (li.x < 0) li.x = w;
          if (li.y < 0) li.y = h;
        }

        if (time < speed) {
          time++;
        }
        setTimeout(particles, 1000 / rate);
      };

      const handleMouseMove = (e) => {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
      };

      const DistanceBetween = (p1, p2) => {
        const dx = p2.x - p1.x;
        const dy = p2.y - p1.y;
        return Math.sqrt(dx * dx + dy * dy);
      };

      window.addEventListener('resize', resizeCanvas);
      canvas.addEventListener('mousemove', handleMouseMove);

      resizeCanvas();
      create();
      particles();

      return () => {
        window.removeEventListener('resize', resizeCanvas);
      };
    }, []);

    return <canvas ref={canvasRef} />;
  };


  const [userName,setUserName]=useState("")

  useEffect(()=>{
    let userName = sessionStorage.getItem("userName")
    if(userName)
    {
      setUserName(userName)
    }
  },[])


  return (
    <>
    
      <ParticleCanvas  />
      
   
      
      <div className="sign " id='sign' style={{paddingBottom:"180px", color:'white'}} >
      <div className='wel' style={{paddingBottom:'30px'}}>
       <h1>Welcome to our website...</h1>
    </div>
    <br/>
      <br/>
      <br/>
      <div style={{ position:'absolute', marginTop:"300px" }}>
  <span className="fast-flicker"></span><span  className="flicker" style={{fontSize:'50px'}}>{`Hello ${userName}...!`}</span>
  <br />
  </div>
  
  <button id='log' style={{ position:'absolute', marginTop:"500px", color:'black' }}>
  <span onClick={logout} >LOGOUT</span>
</button>



  
</div>


   
</>
  );
}

export default Dashboard;


ForgetPassword.jsx :

import React,{useState} from 'react'
import icon from '../images/icon.png'
import { useNavigate } from 'react-router-dom'
import './App.css'
import AxiosService from '../commen/ApiService'
import { toast } from 'react-toastify'



function Forgetpassword() {
let navigate = useNavigate()

const [email,setEmail] = useState("")
const [loading, setLoading] = useState(false)
const forgetpassword = async(e)=>{
    e.preventDefault()
    setLoading(true)
    try {
        let res = await AxiosService.post('/user/forget-password',{
            email
        })
        if(res.status==201)
        {
            toast.success("Reset link sent successfully to your email.please check the email ")
        }
    } catch (error) {
        console.log(error)
        toast.error("Invalid email")
    }
    finally{
      setLoading(false)
    }
}
  return (
    <>
    

    {loading && (
        <div className="loading-screen">
          <div className="loading-spinner"></div>
        </div>
      )}
      
    <div className="login" style={{height:"510px"}}>
    <div className="avatar" style={{width:"100px", height:"100px"}}>
        <img src={icon} />
      </div>
      <h2>Forget Password</h2>
      <h3>Enter your email to get reset link </h3>

      <form className="login-form">

        <div className="textbox">
          <input type="email" placeholder="Email" onChange={(e)=>setEmail(e.target.value)} />
          <span className="material-symbols-outlined"> email </span>
        </div>

        
       
        <button type="submit" onClick={forgetpassword} >Send</button>

        <p style={{ color: '#157ae1',fontSize:'18px',  }}>
            Remember your password ?&nbsp; &nbsp;
            <span style={{ cursor: 'pointer' }} onClick={() => navigate('/login')}>
              Login
            </span>{' '}
          </p>
       
      </form>
    </div>
    </>
  )
}

export default Forgetpassword


Login.jsx : 

import React, { useState } from 'react';
import icon from '../images/icon.png';
import './App.css';
import { useNavigate } from 'react-router-dom';
import AxiosService from '../commen/ApiService';
import { toast } from 'react-toastify';

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false)

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  

  const [email,setEmail]  = useState("")
  const [password,setPassword] = useState("")
  let navigate = useNavigate();

  const existUser  = async(e)=>{
    e.preventDefault()
    setLoading(true)
    try {
      let res = await AxiosService.post('/user/login',{
        email,
        password
      })
      if(res.status==201){
       toast.success("Login successfully")
       
       sessionStorage.setItem("userName",res.data.user.userName)
       sessionStorage.setItem('email',res.data.user.email)
       navigate('/dashboard')
      }
    } catch (error) {
      console.log(error)
      toast.error("Incorrct email or password")
    }
    finally{
      setLoading(false)
    }
  }

  

  return (
    <>
    {loading && (
        <div className="loading-screen">
          <div className="loading-spinner"></div>
        </div>
      )}
      <div className="login" style={{height:"600px",paddingTop:"35px"} }>
      <div className="avatar" style={{width:"100px", height:"100px"}}>
        <img src={icon} />
      </div>
        <h2>Login</h2>
        <h3>Welcome back!</h3>

        <form className="login-form">
          <div className="textbox">
            <input type="email" placeholder="Email" onChange={(e)=>setEmail(e.target.value)} />
            <span className="material-symbols-outlined"> email </span>
          </div>

          <div className="textbox">
            <input
              type={showPassword ? 'text' : 'password'} // Here is the change
              placeholder="Password" onChange={(e)=>setPassword(e.target.value)}
            />
            <span  className="material-symbols-outlined">
              {' '}
              lock{' '}
            </span>
           </div>

           <div  id='ch' style={{display:'flex',marginTop:"px"}}>
            <input style={{width:"15px",margin:"-18px 6px 0px 0px"}}
              type="checkbox"
              checked={showPassword}
              onChange={togglePasswordVisibility}
              
            /> 
            
            <span id='sp' style={{marginRight:"45px",color:'#157ae1' }}>
              Show Password
            </span>
            &nbsp; &nbsp;
            <span id='sp' style={{ color: '#157ae1', cursor: 'pointer' }} onClick={()=>navigate('/forgetpassword')}>
              Forgot Password ?{' '}
            </span>

</div>

          <button type="submit"  onClick={(e)=>existUser(e)} > LOGIN</button>

          <p style={{ color: '#157ae1', fontSize: '18px' }}>
            Create Account ?&nbsp; &nbsp;{' '}
            <span style={{ cursor: 'pointer' }} onClick={() => navigate('/signup')}>
              {' '}
              Signup
            </span>{' '}
          </p>
        </form>
      </div>
    </>
  );
}

export default Login;


ResetPassword :

import React,{useState} from 'react'
import icon from '../images/icon.png'
import { useNavigate, useParams } from 'react-router-dom'

import './App.css'
import AxiosService from '../commen/ApiService';
import { toast } from 'react-toastify';



function Resetpassword() {

    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false)
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const [password,setPassword] = useState("")

  const{randomString,expirationTimestamp}=useParams();
    let navigate = useNavigate()

    const resetpassword = async(e)=>{
        e.preventDefault()
        setLoading(true)
        try {
            let res = await AxiosService.post(`/user/reset-password/${randomString}/${expirationTimestamp}`,{
                newPassword:password
            })

            if(res.status==201)
            {
                toast.success("password updated")
                navigate('/login')
            }
        } catch (error) {
            if (error.response && error.response.status === 400) {
                toast.error("Invalid token or token has expired. Please request a new reset link.");
              } else {
                console.log(error);
              }

        }
        finally{
          setLoading(false)
        }

    }

  return (


    <>
    {loading && (
        <div className="loading-screen">
          <div className="loading-spinner"></div>
        </div>
      )}
    <div className="login" style={{height:"530px",paddingTop:"50px"} }>
      <div className="avatar" style={{width:"100px", height:"100px"}}>
        <img src={icon} />
      </div>
        <h2>Reset Password</h2>
        <h3>Enter your new password</h3>

        <form className="login-form">
         
          <div className="textbox">
            <input
              type={showPassword ? 'text' : 'password'} // Here is the change
              placeholder="Password" onChange={(e)=>setPassword(e.target.value)}
            />
            <span style={{ paddingBottom: '70px' }} className="material-symbols-outlined">
              {' '}
              lock{' '}
            </span>
            
            <div style={{display:'flex'}}>
            <input style={{width:"15px",}}
              type="checkbox"
              checked={showPassword}
              onChange={togglePasswordVisibility}
              
            /> 
            
            <span style={{paddingTop:'60px', paddingLeft:'10px',color:'#157ae1' }}>
              Show Password
            </span>
            
</div>

            

            
          </div>

          <button type="submit" onClick={resetpassword}>Set Password</button>

          
        </form>
      </div>
    </>
  )
}

export default Resetpassword

Signup.jsx : 

import React, { useState } from "react";
import icon from "../images/icon.png";
import { useNavigate } from "react-router-dom";
import AxiosService from "../commen/ApiService";
import {toast} from 'react-toastify'
import "./App.css";

function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false)
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  let [userName,setUserName] = useState("")
  let [email,setEmail] = useState("")
  let [password,setPassword] = useState("")
  
  let navigate = useNavigate();

  const createUser = async(e)=>{
    e.preventDefault()
    setLoading(true)
    try {
      let res = await AxiosService.post('/user/signup',{
        userName,
        email,
        password
      })
      if(res.status==201)
      {
        toast.success("User created successfully")
        navigate('/login')
      }
    } catch (error) {
      console.log(error)
      toast.error("Fill all the detials")
    }
    finally{
      setLoading(false)
    }
  }

  return (
    <>
     {loading && (
        <div className="loading-screen">
          <div className="loading-spinner"></div>
        </div>
      )}
      <div className="login" style={{ height: "635px", paddingTop: "11px" }}>
        <div className="avatar" style={{ width: "100px", height: "100px" }}>
          <img src={icon} />
        </div>
        <h2>Signup</h2>

        <h3>Welcome </h3>
        <form className="login-form">
          <div className="textbox">
            <input type="text" placeholder="Username" required onChange={(e)=>setUserName(e.target.value)}  />
            <span className="material-symbols-outlined"> account_circle </span>
          </div>

          <div className="textbox">
            <input type="email" placeholder="Email" required onChange={(e)=>setEmail(e.target.value)} />
            <span className="material-symbols-outlined"> email </span>
          </div>

          <div className="textbox" >
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              pattern=".{8,}" // Minimum of 8 characters
              title="Password must be at least 8 characters"
              required onChange={(e)=>setPassword(e.target.value)}
            />
            <span
              style={{ paddingBottom: "70px" }}
              className="material-symbols-outlined"
            >
              {" "}
              lock{" "}
            </span>

            <div style={{ display: "flex" }}>
              <input
                style={{ width: "15px" }}
                type="checkbox"
                checked={showPassword}
                onChange={togglePasswordVisibility}
              />
              <span
                style={{
                  paddingTop: "60px",
                  paddingLeft: "10px",
                  color: "#157ae1",
                }}
              >
                Show Password
              </span>
            </div>
          </div>

          <button type="submit" onClick={(e)=>createUser(e)} >SIGNUP</button>

          <p style={{ color: "#157ae1", fontSize: "18px", marginTop: "4px" }}>
            Already have an account?&nbsp; &nbsp;
            <span
              style={{ cursor: "pointer" }}
              onClick={() => navigate("/login")}
            >
              Login
            </span>{" "}
          </p>
        </form>
      </div>
    </>
  );
}

export default Signup;


useLogout.jsx :


import { useNavigate } from 'react-router-dom'

function useLogout() {
    let navigate = useNavigate()
  return()=>{
        sessionStorage.clear()
        navigate('/login')
    }
}


export default useLogout


App.jsx :

import React from 'react'
import Signup from './components/Signup'
import Login from './components/Login'
import Dashboard from './components/Dashboard.jsx'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Forgetpassword from './components/Forgetpassword'
import Resetpassword from './components/Resetpassword'


function App() {
  return (
   <>
   <BrowserRouter>
   <Routes>

<Route path='/signup' element={<Signup/>}/>

<Route path='/login' element={<Login/>}/>

<Route path='/dashboard' element={<Dashboard/>}/>

<Route path='/forgetpassword' element={<Forgetpassword/>}/>

<Route path='/reset-password/:randomString/:expirationTimestamp' element={<Resetpassword/>}/>

<Route path='*' element={<Login/>}/>

   </Routes>
   
   </BrowserRouter>
   
   </>
  )
}

export default App


main.jsx : 

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <ToastContainer autoClose={2000}/>
  </React.StrictMode>,
)


