import logo from './logo.svg';
import './App.css';
import {Routes,Route,Navigate} from 'react-router-dom'
import VehicleTable from './components/VehicleTable';
import VehicleForm from './components/VehicleForm';
import VehicleEdit from './components/VehicleEdit';
import VehicleDelete from './components/VehicleDelete';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigate replace to="/table"></Navigate>}></Route>
        <Route path='/table' element={<VehicleTable/>}></Route>
      <Route path='/form' element={<VehicleForm/>}></Route>
           <Route path='/edit/:vid' element={<VehicleEdit/>}></Route>
        <Route path='/delete/:vid' element={<VehicleDelete/>}></Route> 

      </Routes>
     
    </div>
  );
}

export default App;
