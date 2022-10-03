import React,{useEffect, useState} from 'react'
import { todosSucursales } from '../funciones/getSucursales'


const SelectSucursales = () =>{
  const [sucursales, setSucursales] = useState(null)
  useEffect(()=>{
    todosSucursales(setSucursales)
  },[])
  
  return(
    <>
     <table className='table'>
      <thead>
          <tr>
              <td>Id</td>
              <td>Sucursal</td>            
          </tr>
      </thead>

      <tbody>
      
    {sucursales != null ? (
        sucursales.map(sucursales =>(
          <tr>
         
         <td>{sucursales.sucursal_id}</td>
          <td>{sucursales.nombre}</td>
         
         
         
         </tr>  
       
       ))

    ) : ('no hay sucursales')}
     
     </tbody>


    </table>
    </>    
  )

}

export default SelectSucursales