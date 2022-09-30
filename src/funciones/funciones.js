import axios from 'axios'

const todos = async(state) =>{
   const peticion = await axios.get('http://localhost:8080/Sucursal')
   state(peticion.data)
}

export{
    todos
}