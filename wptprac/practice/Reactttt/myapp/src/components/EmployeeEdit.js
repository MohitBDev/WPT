import React,{useState,useEffect} from 'react'
import {useNavigate,useParams} from 'react-router-dom'
import axios from 'axios'
const EmployeeEdit=()=>{
  let navigate=useNavigate();
  let params=useParams();
   let [form,setform]=useState({name:"",email:"",password:"" ,salary:""});

   useEffect(()=>{
    axios.get("http://localhost:8080/emp/"+params.id).then((result)=>{
        console.log("use effect Edit")
        console.log(result.data.id)
        setform({...result.data})

    }).catch((err)=>{
      console.log(JSON.stringify(err))
    })
},[])

   let update=()=>{
    console.log(form)
    
     axios.put("http://localhost:8080/emp/update/"+params.id,form)
     navigate('/table');
     setform({name:"",email:"",password:"" ,salary:""})
   

   


   }


    return(
      <div >
      <h2>Employee Update</h2>
     
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
      <button type='button' onClick={update}>Submit</button>
      
  </div>
    )
}
export default EmployeeEdit;