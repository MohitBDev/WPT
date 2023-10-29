import React,{useState,useEffect} from'react'
import {useNavigate,useParams} from 'react-router-dom'
import Studentservice from '../service/Studentservice'
const StudentDelete=()=>{
    let params=useParams();
    let navigate=useNavigate();
   
    let [form,setform]=useState({studid:""})
    useEffect(()=>{
        setform({...form,studid:params.id})

    },[])
    let del=()=>{
             setform({...form,studid:params.id})
        Studentservice.deletebyid(params.id)
      navigate("/table")


    }
    return(
        <div>
            Student ID To Delete:<br/>
            <input type='text' id='id' name='id' value={form.studid}
            onChange={(event)=>{setform({...form,studid:event.target.value})

            }} /><br/>
               <button type="button" onClick={del}>Delete </button>
            

        </div>
    )

}
export default StudentDelete;