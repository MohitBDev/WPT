import React,{useState,useEffect} from 'react'
import Vehicleservice from '../service/Vehicleservice'
const VehicleTable=()=>{
    let [arr,setarr]=useState([])
    useEffect(()=>{
        Vehicleservice.getall().then((result)=>{
            setarr(result.data)

        }).catch()

    })
    return(
        <div>
            <h2>Vehicle Table</h2>
         
            <table border="2" align="center" >
                <thead>
                    <th>Vehicle  Id</th>
                    <th>Vehicle Name </th>
                    <th>Vehicle  price</th>
                    <th>Actions </th>
                   

                </thead>
                <tbody>
                    {arr.map((v)=><tr key={v.vid}>
                        <td>{v.vid}</td>
                        <td>{v.vname}</td>
                        <td>{v.price}</td>
                        <td>
                        <a href='/form'> Add</a>/
                            <a href={`/edit/${v.vid}`}> Edit</a>/
                            <a href={`/delete/${v.vid}`}> Delete</a>

                        </td>
                    </tr>)}

                </tbody>
            </table>

        </div>
    );


}
export default VehicleTable;