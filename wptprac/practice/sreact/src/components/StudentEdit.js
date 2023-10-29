import React,{useState,useEffect} from'react'

import {useParams,useNavigate} from'react-router-dom'
import Studentservice from '../service/Studentservice'

const StudentEdit=()=>{
    let params=useParams();
    let navigate=useNavigate();
    let [form,setform]=useState({studid:"",Sname:"",Course:""})
    useEffect(()=>{
        Studentservice.getbyid(params.id).then((result)=>{
            console.log("use effect")
            console.log(result.data)
           setform({...result.data})
            
           
        }).catch()

    },[])
    let update=()=>{
        Studentservice.updatestud(form)
        setform({studid:"",Sname:"",Course:""})
        navigate("/table")


    }
    return(
        <div>
            
            <h3>Update Student</h3>
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
            <button type="button" onClick={update}>Submit </button>

        </div>
    )

}
export default StudentEdit;