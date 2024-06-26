import React, { useEffect } from 'react'
import "../styles/login.css"
import { useState } from 'react';
const Login = () => {
    const [action,setAction]=useState("Login");
    const [data,setData]=useState({
        name:'',
        email:'',
        password:'',


    })
useEffect(()=>{
    console.log(data)
},[data])
    const handleChange=(event,property)=>{
        //setData({...data,name:event.target.value})
        //setData({...data,email:event.target.value})
       // setData({...data,password:event.target.value})

       //dynamic value setting
     setData({...data,[property]:event.target.value})



       // console.log("name changed");
       // console.log(event.target.value)
    }


    
  return (
    <div className='container'>
        <div className="header">
            <div className="text">{action}</div>
        </div>
        <div className="inputs">
            {action==="Login"?<div></div>:<div id="sides">Names<div className="input">
                            <input type="text"
                             placeholder='   Full Name'
                             id="name"
                             onChange={(e)=>handleChange(e,'name')}
                             value={data.name}/>
                            </div></div>
                            }
            
            <div id="sides">Email</div>
            <div className="input">
        
            <input type="email"  
            placeholder='   Student Email' 
            id="email"
            onChange={(e)=>handleChange(e,'email')}
            value={data.email}/>
        </div>
        <div id="sides">Password</div>
        <div className="input">
       
            <input type="password"
             placeholder='   Enter Password here' 
             id="password"
             onChange={(e)=>handleChange(e,'password')}
             value={data.password}/>

        </div>
        </div>
        <div className="submit-container">
        <div className={action==="Sign up"?"submit gray":"submit"} onClick={()=>{setAction("Sign up")}}>Sign up</div>
        <div className={action==="Login"?"submit gray":"submit"} onClick={()=>{setAction("Login")}}>Login</div>

</div>
    </div>
  );
}

export default Login;
