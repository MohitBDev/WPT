import React,{useState} from 'react'
import EmployeeService from '../service/EmployeeService'


function EmployeeForm(props){
    let[form,setform]=useState({empid:"",ename:"",sal:""})
   let add=()=>{
    if(form.empid=="" || form.ename=="" ||form.sal=="")
    {
        alert("Fill form Deatils")
    }
    EmployeeService.add(form)
    console.log(form)
      props.addData();
      setform({empid:"",ename:"",sal:""})
    
    
   
   }
    return(
        <div>
            <h3>Employee Form </h3>

            Employee Id :<br/>
            <input type='text' id="empid" name="empid" 
             onChange={(event)=>{setform({...form,empid:event.target.value})}} value={form.empid} /><br/>
            Employee Name:<br/>
            <input type='text' id="ename" name="ename" 
            value={form.ename} onChange={(event)=>{setform({...form,ename:event.target.value})}}/><br/>
            Employee Sal:<br/>
            <input type='text' id="sal" name="sal" 
            value={form.sal} onChange={(event)=>{setform({...form,sal:event.target.value})}}/><br/><br/>
            <button type='button' onClick={add} > Submit</button>
        </div>
    )
}
export default EmployeeForm;