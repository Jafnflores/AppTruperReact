import {BrowserRouter, Routes, Route} from 'react-router-dom'
import  Inicio from './componentes/Inicio'
import Nav from './componentes/Nav'
import Personaje from './componentes/Personaje'
import Card from './componentes/Card'
import FormSucursal from './componentes/FormSucursal'
import FormProducto from './componentes/FormProducto'

import "bootstrap/dist/css/bootstrap.min.css"





function App() {

  return (
    <div className="App">
    <Nav></Nav>
    <div class="container">
    
    
    <BrowserRouter>
    <Routes>
      <Route path='/menu' element={<Card></Card>}></Route>
      <Route path='/formaSucursal' element={<FormSucursal></FormSucursal>}></Route>
      <Route path='/formaProducto' element={<FormProducto></FormProducto>}></Route>
      
      <Route path='/' element={<Inicio></Inicio>}></Route>
      <Route path='/personaje/:id' element={<Personaje></Personaje>}></Route>
    </Routes>
    </BrowserRouter>
    
    </div>
    </div>
  );
}

export default App;