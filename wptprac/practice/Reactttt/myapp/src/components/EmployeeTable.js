import React,{useState,useEffect} from 'react'
import axios from 'axios';

const EmployeeTable=()=>{
    let[arr,setarr]=useState([])
    let showdata=()=>{
    let result=axios.get("http://localhost:8080/emp");
    result.then((result)=>{console.log(result.data)
        setarr(result.data)

    }).catch();

    }
    useEffect(()=>{console.log("use Effect Table")},[]);
    

    return(
        <div >
            <button type='button'onClick={showdata} >Show Data</button>
            <table border="2">
                <thead>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Password</th>
                    <th>Salary</th>
                    <th>Actions</th>
                </thead><tbody>{arr.map((emp,index)=><tr key={emp.id} >
                    <td>{emp.id}</td>
                    <td>{emp.name}</td>
                    <td>{emp.email}</td>
                    <td>{emp.password}</td>
                    <td>{emp.salary}</td>
                
                    <td><a href='/form'>Add</a>/
                <a href={`/edit/${emp.id}`}>Edit</a>/
            <a href={`/delete/${emp.id}`}>Delete</a>
                    </td>
                </tr>)}
               </tbody>
            </table>
        </div>
    )


}
export default EmployeeTable;