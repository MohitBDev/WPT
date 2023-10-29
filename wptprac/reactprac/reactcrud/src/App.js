import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import {Routes,Route,Navigate} from 'react-router-dom'
import HomeComponent from './components/HomeComponent';
import EmpTable from './components/EmpTable';
import EmployeeForm from './components/EmployeeForm'
import EmployeeEdit from './components/EmployeeEdit'



function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path='/' element={ <Navigate replace to='/home'></Navigate>}></Route>
        <Route path='/home' element={<HomeComponent/>}></Route>
        <Route path='/table' element={<EmpTable/>}></Route>
        <Route path="/form" element={<EmployeeForm/>}></Route>
         <Route path="/edit/:eid" element={<EmployeeEdit/>}></Route>

      </Routes>
      
    </div>
  );
}

export default App;
