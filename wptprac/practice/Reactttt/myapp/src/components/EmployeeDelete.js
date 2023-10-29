import React,{useState,useEffect} from 'react'
import {useNavigate,useParams} from 'react-router-dom'
import axios from 'axios'
const EmployeeDelete=()=>{
  let navigate=useNavigate();
  let params=useParams();
   let [form,setform]=useState({id:params.id});
   let del=()=>{
    console.log(form)
     axios.delete("http://localhost:8080/emp/delete/"+params.id)
     setform({id:""})
     navigate('/table')
   

   


   }
  

    return(
      <div >
            <h2>Employee Form</h2>
              Employee Id :<br/>
            <input type='text' id='id' name='id' value={form.id}
            onChange={(event)=>{setform({...form,id:event.target.value})}}/><br/>
          
            <button type='button' onClick={del}>Submit</button>
        </div>
    )
}
export default EmployeeDelete;