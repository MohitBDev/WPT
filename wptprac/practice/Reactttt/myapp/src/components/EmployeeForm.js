import React,{useState,useEfect} from 'react'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'
const EmployeeForm=()=>{
  let navigate=useNavigate();
   let [form,setform]=useState({name:"",email:"",password:"" ,salary:""});
   let add=()=>{
    console.log(form)
     axios.post("http://localhost:8080/emp/add",form)
     setform({name:"",email:"" ,password:"",salary:""})
     navigate('/table')
   

   


   }
  

    return(
      <div >
            <h2>Employee Form</h2>
           
              Employee Name :<br/>
            <input type='text' id='nm' name='nm' value={form.name}
            onChange={(event)=>{setform({...form,name:event.target.value})}}/><br/>
              Employee Email :<br/>
            <input type='text' id='em' name='em' value={form.email}
            onChange={(event)=>{setform({...form,email:event.target.value})}}/><br/>
               Employee Password :<br/>
            <input type='text' id='pass' name='pass' value={form.password}
            onChange={(event)=>{setform({...form,password:event.target.value})}}/><br/>
              Employee Salary :<br/>
            <input type='text' id='sal' name='sal' value={form.salary}
            onChange={(event)=>{setform({...form,salary:event.target.value})}}/><br/>
            <button type='button' onClick={add}>Submit</button>
            
        </div>
    )
}
export default EmployeeForm;