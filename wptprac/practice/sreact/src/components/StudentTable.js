import React,{useState,useEffect} from 'react'
import Studentservice from '../service/Studentservice'
const StudentTable=()=>{
let [arr,setarr]=useState([])


 let  showdata=()=>{
    Studentservice.getall().then((result)=>{console.log(result.data)
        setarr(result.data)
    }).catch();
    

 }

useEffect(()=>{
    
},[])
return(<div>
    <button type='button' onClick={showdata}> showdata</button>
    <table border="2">
        <thead>
            <th>student ID</th>
            <th>student Name</th>
            <th>student Course</th>
            <th>Actions</th>
        </thead>
        <tbody>
        {arr.map((stud,index)=><tr key={index}>
            <td>{stud.studid}</td>
            <td>{stud.Sname}</td>
            <td>{stud.Course}</td>
            <td><a href='/form'>Add</a>/
                <a href={`/edit/${stud.studid}`}>Edit</a>/
            <a href={`/delete/${stud.studid}`}>Delete</a>
            </td>
            
        </tr>)}

       

        </tbody>
    </table>
    

    

</div>

)


}
export default StudentTable;