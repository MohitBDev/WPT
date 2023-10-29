import logo from './logo.svg';
import './App.css';
import { Route,Routes,Navigate}from'react-router-dom'
import ProductTable from './components/ProductTable';
import ProductForm from './components/ProductForm';
import ProductEdit from './components/ProductEdit';
import ProductDelete from './components/ProductDelete';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigate replace to="/table"/>}></Route>
        <Route path="/table" element={<ProductTable/>}></Route>
       <Route path="/form" element={<ProductForm/>}></Route>
         <Route path="/edit/:pid" element={<ProductEdit/>}></Route>
        <Route path="/delete/:pid" element={<ProductDelete/>}></Route> 
        
      </Routes>
     
    </div>
  );
}

export default App;
