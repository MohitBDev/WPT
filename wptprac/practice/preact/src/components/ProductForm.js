import React,{useState} from'react'
import {useNavigate}from'react-router-dom'
import ProductService from '../service/ProductService'
const ProductForm=()=>{
    let navigate=useNavigate();
    let[form,setform]=useState({pid:"",pname:"",price:""})
    let addp=()=>{
        ProductService.add(form)
        navigate("/table")

    }
    return(
        <div>
            <label>Product ID</label><br/>
            <input type='text' id='pid' name='pid' 
            value={form.pid} onChange={(event)=>{setform({...form,pid:event.target.value})}}/><br/>
               <label>Product Name</label><br/>
            <input type='text' id='pname' name='pname' 
            value={form.pname} onChange={(event)=>{setform({...form,pname:event.target.value})}}/><br/>
               <label>Product Value</label><br/>
            <input type='text' id='price' name='price' 
            value={form.price} onChange={(event)=>{setform({...form,price:event.target.value})}}/><br/>
            <button type='button' onClick={addp}> Submit</button>
            

        </div>

    )
}
export default ProductForm;