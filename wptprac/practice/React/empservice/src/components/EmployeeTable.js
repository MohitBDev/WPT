import React,{useState,useEffect} from 'react'
import EmployeeService from '../service/EmployeeService'
import EmployeeForm from './EmployeeForm'

 function EmployeeTable(props){
    let [emparr,setemparr]=useState([])
    let[flag,setflag]=useState(false)
useEffect(()=>{
    console.log("use effect")
    setemparr(EmployeeService.earr)
    console.log(emparr)
    

})
let showemp=()=>{
    EmployeeService.getemp();
    setflag(true)
   
      }
let adde=()=>{

    setemparr(EmployeeService.earr)
    EmployeeService.getemp();
    console.log("Employee Table" ,emparr)

}
    
    return(
        <div>
               <button type="button"  table={flag} onClick={showemp}>Show form</button>
            <table border="2">
                <thead>
                    <th>Employee Id</th>
                    <th>Employee name</th>
                    <th>Employee sal</th>

                </thead>
                <tbody>
                    {emparr.map((emp,index)=><tr key={index}>
                        <td>{emp.empid}</td>
                        <td>{emp.ename}</td>
                        <td>{emp.sal}</td>
                    </tr>)}


                </tbody>
            </table>

            {flag?<EmployeeForm addData={adde}/>:""}
        </div>
    )




}
export default EmployeeTable;