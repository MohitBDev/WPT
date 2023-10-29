import React,{ useState,useEffect}from 'react'
import ProductService from '../service/ProductService'
const ProductTable=()=>{
    let [arr,setarr]=useState([])
    useEffect(()=>{
        ProductService.getall().then((result)=>{
            console.log(result.data)
            setarr(result.data)

        }).catch()

    },[])
    return(
        <div>
            <table border="2" align='center'>
                <caption>Employee Management System</caption>
                <thead>
                    <th>Product ID</th>
                    <th>Product Name </th>
                    <th>Product Price</th>
                    <th>Actions</th>
                </thead>
                <tbody>
                    {arr.map((pro)=><tr key={pro.pid}>
                        <td>{pro.pid}</td>
                        <td>{pro.pname}</td>
                        <td>{pro.price}</td>
                        <td>
                            <a href="/form">ADD</a>/
                            <a href={`/edit/${pro.pid}`}>Update</a>/
                            <a href={`/delete/${pro.pid}`}>Delete</a>

                        </td>
                    </tr>)}
                </tbody>
            </table>


        </div>
    )


}
export default ProductTable;