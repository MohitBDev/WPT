import logo from './logo.svg';
import './App.css';
import {Routes,Route,Navigate} from 'react-router-dom' ;
import Home from './Components/Home'

function App() {
  return (
    <div className="container">
      <Routes>
        <Route path='/' element={<Navigate replace to="/home"></Navigate>}></Route>
        <Route path="/home" element={<Home/>}></Route>
      </Routes>
 <h1>Hello </h1>
    </div>
  );
}

export default App;
