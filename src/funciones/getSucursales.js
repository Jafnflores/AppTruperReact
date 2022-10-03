import axios from 'axios'

const todosSucursales = async(state) =>{
   const peticion = await axios.get('http://localhost:8080/Sucursal')
   state(peticion.data)
}

export{
    todosSucursales
}