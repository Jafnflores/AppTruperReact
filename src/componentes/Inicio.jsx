import React,{useEffect, useState} from 'react'
import { todos } from '../funciones/funciones'


const Inicio = () =>{
  const [sucursales, setSucursales] = useState(null)
  useEffect(()=>{
    todos(setSucursales)
  },[])
  
  return(
    <>
    {sucursales != null ? (
        sucursales.map(sucursales =>(
         <div key={sucursales.producto_id}>
          <a href="">{sucursales.nombre}</a>
         <button className="btn btn-primary">hola</button>
         </div>
        ))

    ) : ('no hay personajes')}
    </>    
  )

}

export default Inicio