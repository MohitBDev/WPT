import React,{useState,useEffect} from'react'
import {useNavigate,useParams}from'react-router-dom'
import ProductService from '../service/ProductService'
const ProductEdit=()=>{
    let params=useParams();
    let navigate=useNavigate();
    let[form,setform]=useState({pid:"",pname:"",price:""})
    useEffect(()=>{
        ProductService.getbyid(params.pid).then((result)=>{
            setform(result.data)

        }).catch();
    },[])
    let updatep=()=>{
        ProductService.update(form)
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
            <button type='button' onClick={updatep}> Submit</button>
            

        </div>

    )
}
export default ProductEdit;