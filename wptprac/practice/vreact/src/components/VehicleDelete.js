import React,{useState,useEffect} from 'react'
import {useNavigate,useParams} from 'react-router-dom'
import Vehicleservice from '../service/Vehicleservice'
const VehicleDelete=()=>{
    let navigate=useNavigate();
    let params=useParams();
    let [form,setform]=useState({vid:""})
    let  delv=()=>{
        console.log(params.vid)
        Vehicleservice.delete(params.vid)

        navigate("/table")

    }
    useEffect(()=>{
        Vehicleservice.getbyid(params.vid).then((result)=>{
            setform({...result.data})

        }).catch()

    },[])
   
    return(
        <div>
            <h2>Vehicle Delete By Id</h2><br/>
            <h3>Vehicle  ID</h3><br/>
            <input type='text' id='vid' name='vid' value={form.vid}
            onChange={(event)=>{setform({...form,vid:event.target.value})}}/><br/>
          
            <button type='button' onClick={delv}>Delete</button>
            
         
           

        </div>
    );


}
export default VehicleDelete;