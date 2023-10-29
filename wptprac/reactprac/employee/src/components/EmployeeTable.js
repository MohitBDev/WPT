import {useState} from 'react'



const EmployeeTable=(props)=>{
    let [myname,setmyname]=useState("")
    let addname=()=>{
        props.insertD(myname)
    }
    let render=props.empdata.map((name,index)=><tr key={index}><td>{name}</td></tr>)
    return(
        <div>

            <input type="text" name="nm" id="nm"
            value={myname}
            onChange={(event)=>{setmyname(event.target.value)}}
            
            ></input>&nbsp;&nbsp;&nbsp;
            <button type="button" name="btn" id="btn"  onClick={addname}>Add New</button>


            <table border='2'>
        <thead>
        <tr>
            <th>Employee names</th>
        </tr>
        </thead>
        <tbody>
           {render}

        </tbody>
       
               
        </table>

        </div>




    )


    
    

}
export default EmployeeTable;