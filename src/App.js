import {BrowserRouter, Routes, Route} from 'react-router-dom'
import  FormCompras from './componentes/FormCompras'
import Nav from './componentes/Nav'
import Personaje from './componentes/Personaje'
import Card from './componentes/Card'
import FormSucursal from './componentes/FormSucursal'
import FormProducto from './componentes/FormProducto'
import Login from './componentes/Login'
import SelectSucursales from './componentes/SelectSucursales'
import SelectProductos from './componentes/SelectProductos'

import "bootstrap/dist/css/bootstrap.min.css"





function App() {

  return (
    
    <div className="App">
    <Nav></Nav>
    <div className="container">
    
    
    <BrowserRouter>
    <Routes>
      <Route path='/menu' element={<Card></Card>}></Route>

      <Route path='/formaSucursal' element={<FormSucursal></FormSucursal>}></Route>
      <Route path='/consultaSucursal' element={<SelectSucursales></SelectSucursales>}></Route>
      
      <Route path='/formaProducto' element={<FormProducto></FormProducto>}></Route>
      <Route path='/ConsultaProducto' element={<SelectProductos></SelectProductos>}></Route>
            
      
      <Route path='/formaCompra' element={<FormCompras></FormCompras>}></Route>
            
      <Route path='/'element={<Login></Login>}></Route>
      
    </Routes>
    </BrowserRouter>
    
    </div>
    </div>
  );
}

export default App;
