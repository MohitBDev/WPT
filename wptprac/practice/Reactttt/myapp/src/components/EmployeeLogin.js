import React,{useState,useEffect} from "react";
import axios from 'axios'

import { useNavigate } from "react-router-dom";

const EmployeeLogin=()=>{
    let [user,setuser]=useState({email:"" ,password:""})
    let navigate =useNavigate();
    let check=()=>{
      axios.post("http://localhost:8080/emp/login",user).then((result)=>{
        console.log("use effect Login")
        console.log(result.data)
         }).catch((err)=>{
      console.log(JSON.stringify(err))
    })
      

    }
  let show=()=>{
    
    navigate('/table')

  }
    useEffect(()=>{
        console.log(user)
    },[])

return(
    <div className="centered-container" >
      <div className="login-box" >
    <h2>Employee Login</h2>
   
          <button type="button" onClick={show}>Show Employee Tables</button><br/>
          <br/>
        <label htmlFor="username">Username:</label><br/>
        <input
          type="text"
          id="un"
          name="un"
          value={user.email}
          onChange={(event)=>{setuser({...user,email:event.target.value})}}
          required
        />
      <br/>
    
      
     
        <label htmlFor="password">Password:</label><br/>
        <input
          type="password"
          id="pass"
          name="pass"
          value={user.password}
          onChange={(event)=>{setuser({...user,password:event.target.value})}}
          required
        />
    
      <br/>
      <br/>
     
        <button type="button" onClick={check} >Login</button>
     
        </div>
  </div>
  

)
}
export default EmployeeLogin;