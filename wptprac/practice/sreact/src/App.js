import logo from './logo.svg';
import './App.css';
import React from 'react'
import {Routes,Route,Navigate} from 'react-router-dom'
import StudentTable from './components/StudentTable';
import StudentForm from './components/StudentForm';
import StudentEdit from './components/StudentEdit';
import StudentDelete from './components/StudentDelete';

function App() {
  return (<div>
    <Routes>
      <Route path='/' element={<Navigate replace to="/table" />}  />
      <Route path='/table' element={<StudentTable/>}/>
      <Route path='/form' element={<StudentForm/>}/>
       <Route path='/edit/:id' element={<StudentEdit/>}/> 
       <Route path='/delete/:id' element={<StudentDelete/>}/> 
      
    </Routes>


  </div>
    
  );
}

export default App;
