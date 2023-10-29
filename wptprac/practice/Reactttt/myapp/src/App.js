
import './App.css';
import React from 'react';
import {Routes,Route,Navigate} from 'react-router-dom';
import EmployeeTable from './components/EmployeeTable';
import EmployeeForm from './components/EmployeeForm';
import EmployeeEdit from './components/EmployeeEdit';
import EmployeeDelete from './components/EmployeeDelete';
import EmployeeLogin from './components/EmployeeLogin';


function App() {
  return (
    
    <div>
     
      <Routes>
      <Route path='/' element={<Navigate replace to={"/login"}/>}/>
      <Route path='/login' element={<EmployeeLogin/>}/>
        <Route path='/table' element={<EmployeeTable/>}/>
        <Route path='/form' element={<EmployeeForm/>}/>
        <Route path='/edit/:id' element={<EmployeeEdit/>}/>
        <Route path='/delete/:id' element={<EmployeeDelete/>}/>
      </Routes>
     
    </div>
  );
}

export default App;
