import React,{useState,useEffect} from'react'
import {useParams,useNavigate}from'react-router-dom'
import ProductService from '../service/ProductService'
const ProductDelete=()=>{
    let params=useParams();
    let navigate=useNavigate();
    let[form,setform]=useState({pid:""})
    useEffect(()=>{
        ProductService.getbyid(params.pid).then((result)=>{
            setform({...form,...result.data})

        }).catch()
    },[])
    let deletep=()=>{
        ProductService.delete(params.pid)
        navigate("/table")

    }
    return(
        <div>
            <label>Product ID</label><br/>
            <input type='text' id='pid' name='pid' 
            value={form.pid} onChange={(event)=>{setform({...form,pid:event.target.value})}} readOnly/><br/>
             
            <button type='button' onClick={deletep}> Delete</button>
            

        </div>

    )
}
export default ProductDelete;