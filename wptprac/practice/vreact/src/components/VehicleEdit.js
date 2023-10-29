import React,{useState,useEffect} from 'react'
import {useNavigate,useParams} from 'react-router-dom'
import Vehicleservice from '../service/Vehicleservice'

const VehicleEdit=()=>{
    let navigate=useNavigate();
    let params=useParams();
    let [form,setform]=useState({vid:"",vname:"",price:""})
    useEffect(()=>{
        Vehicleservice.getbyid(params.vid).then((result)=>{
            console.log("use effect")
            console.log(result.data)
            setform({...result.data})

        }).catch()
    },[])
    let  updatev=()=>{
        Vehicleservice.update(form)
        navigate("/table")

    }
   
    return(
        <div>
            <h2>Vehicle Edit </h2><br/>
            <h3>Vehicle  ID</h3><br/>
            <input type='text' id='vid' name='vid' value={form.vid}
            onChange={(event)=>{setform({...form,vid:event.target.value})}} readOnly/><br/>
               <h3>Vehicle Name </h3><br/>
            <input type='text' id='vname' name='vname' value={form.vname}
            onChange={(event)=>{setform({...form,vname:event.target.value})}}/><br/>
         <h3>Vehicle  Price</h3><br/>
            <input type='text' id='price' name='price' value={form.price}
            onChange={(event)=>{setform({...form,price:event.target.value})}}/><br/>
            <button type='button' onClick={updatev}>Submit</button>
            
         
           

        </div>
    );


}
export default VehicleEdit;