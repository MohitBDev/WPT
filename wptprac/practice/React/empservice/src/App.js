import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react'
import EmployeeTable from './components/EmployeeTable';
import EmployeeService from './service/EmployeeService';

function App() {
  
  return (
    <div className="App">
   
     <h1>Employeee Management System</h1>
      <EmployeeTable />
    
    
    </div>
  );
}

export default App;
