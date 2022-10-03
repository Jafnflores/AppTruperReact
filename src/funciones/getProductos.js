import axios from 'axios'

const todosProductos = async(state) =>{
   const peticion = await axios.get('http://localhost:8080/Producto')
   state(peticion.data)
}

export{
    todosProductos
}