import React,{useState} from'react'
import Studentservice from '../service/Studentservice'
const StudentForm=()=>{
    
    let [form,setform]=useState({studid:"",Sname:"",Course:""})
    let add=()=>{
        Studentservice.addstud(form)
        setform({studid:"",Sname:"",Course:""})
        
    

    }
    return(
        <div>
            <h2>Employee Form :</h2>
            Student ID:<br/>
            <input type='text' id='id' name='id' value={form.studid}
            onChange={(event)=>{setform({...form,studid:event.target.value})

            }} /><br/>
              Student Name :<br/>
            <input type='text' id='nm' name='nm' value={form.Sname}
            onChange={(event)=>{setform({...form,Sname:event.target.value})

            }} /><br/>
              Student  Course :<br/>
            <input type='text' id='cr' name='cr' value={form.Course}
            onChange={(event)=>{setform({...form,Course:event.target.value})

            }} /><br/>
            <button type="button" onClick={add}>Submit </button>

        </div>
    )

}
export default StudentForm;