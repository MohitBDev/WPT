import React,{useState} from 'react'
 function EmployeeForm(props){
    let [form,setform]=useState({empid:"",ename:"",sal:""})
let inserte=()=>{
    if(form.empid==="" || form.ename===""|| form.sal===""){
         alert("fill formdetails")
    }
    console.log(form)
   props.insert(form)
   setform({empid:"",ename:"",sal:""})
}

    return(
        <div>
            <h1>EmployeeForm</h1>
            <form>
                Employee ID <br/>
                <input type="text" id="empid" name="empid" value={form.empid} onChange={(event)=>setform({...form,empid:event.target.value})} /><br/>
                Employee Name <br/>
                <input type="text" id="ename" name="ename" value={form.ename} onChange={(event)=>setform({...form,ename:event.target.value})} /><br/>
                Employee SAL <br/>
                <input type="text" id="sal" name="sal"  value={form.sal} onChange={(event)=>setform({...form,sal:event.target.value})}/><br/>
                <button type="button" id="btn" name="btn" onClick={inserte} >ADD</button><br/>
            </form>
        </div>
    )
}
export default EmployeeForm;