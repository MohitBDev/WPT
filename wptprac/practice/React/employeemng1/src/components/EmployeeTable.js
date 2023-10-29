import React,{useState} from 'react'
const  EmployeeTable=(props)=>{
    let [myname,setmyname]=useState("");
    const addname=()=>{

        props.insertdata(myname)
    }
 let rendertable=props.empdata.map((name,index)=><tr key={index}>{name}</tr>)
    return(<div>
        <h1>EmployeeTable</h1>
        Add Employee Name:{props.text}
        <input type="text" className="emp" name="nm" id="nm" value={myname}
        onChange={(event)=>{setmyname(event.target.value)}}/><br/>
        <button type="submit"  onClick={addname} >ADD</button>
        <table>
            <thead><th>Names</th></thead>
            <tbody>{rendertable}</tbody>
        </table>


        </div>

    )

}

export default EmployeeTable;