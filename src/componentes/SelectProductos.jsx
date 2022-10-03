import React,{useEffect, useState} from 'react'
import { todosProductos } from '../funciones/getProductos'


const SelectSucursales = () =>{
  const [sucursales, setSucursales] = useState(null)
  useEffect(()=>{
    todosProductos(setSucursales)
  },[])
  
  return(
    <>
     <table className='table'>
      <thead>
          <tr>
              <td>Id</td>
              <td>Codigo</td>            
              <td>Descripcion</td>            
              <td>Precio</td>            
          </tr>
      </thead>

      <tbody>
      
    {sucursales != null ? (
        sucursales.map(productos =>(
          <tr>
         
         <td>{productos.producto_id}</td>
         <td>{productos.codigo}</td>
         <td>{productos.descripcion}</td>
         <td>{productos.precio}</td>
         
         </tr>  
       
       ))

    ) : ('no hay productos')}
     
     </tbody>


    </table>
    </>    
  )

}

export default SelectSucursales