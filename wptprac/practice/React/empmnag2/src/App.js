import React,{useState,useEffect} from 'react'
import './App.css';
import EmployeeTable from './components/EmployeeTable'


function App() {
  let [emparr,setemparr]=useState([{empid:1,ename:"kiran",sal:10060},{empid:2,ename:"shriyah",sal:10400},{empid:3,ename:"rushi",sal:10300}])
  let insertemp=(emp)=>{
    setemparr([...emparr,{empid:parseInt(emp.empid),ename:emp.ename,sal:parseInt(emp.sal)}]);

  }
  useEffect(()=>{
    console.log("emp change")
    console.log(emparr)

  },[emparr])

  return (
    <div className="App">
     <h1>Employee Mangement System</h1>
<EmployeeTable arr={emparr}  add={insertemp}/>

    </div>
  );
}

export default App;
