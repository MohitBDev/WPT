import React,{useState} from 'react'
import {useNavigate} from 'react-router-dom'
import Vehicleservice from '../service/Vehicleservice'
const VehicleForm=()=>{
    let navigate=useNavigate();
    let [form,setform]=useState({vid:"",vname:"",price:""})
    let  addv=()=>{
        console.log(form)
        Vehicleservice.add(form)
        navigate("/table")
        

    }
   
    return(
        <div>
            <h2>Vehicle Form</h2><br/>
            <h3>Vehicle  ID</h3><br/>
            <input type='text' id='vid' name='vid' value={form.vid}
            onChange={(event)=>{setform({...form,vid:event.target.value})}}/><br/>
               <h3>Vehicle Name </h3><br/>
            <input type='text' id='vname' name='vname' value={form.vname}
            onChange={(event)=>{setform({...form,vname:event.target.value})}}/><br/>
         <h3>Vehicle  Price</h3><br/>
            <input type='text' id='price' name='price' value={form.price}
            onChange={(event)=>{setform({...form,price:event.target.value})}}/><br/>
            <button type='button' onClick={addv}>Submit</button>
            
         
           

        </div>
    );


}
export default VehicleForm;