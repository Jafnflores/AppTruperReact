import React,{useState,useEffect} from 'react'
import {Await, useHistory} from 'react-router-dom'
import axios from 'axios'
//import React from 'react'

const margenes = {marginTop : "40px"}
    const margenes2 = {marginTop : "10px"}
    const margenes3 = {marginLeft : "20px"}
    const ancho ={width:"120px"} 

   

export const Login = () => {
    const [usuario,setUsuario] = useState("")
    const [password,setPassword] = useState("")

 
     function mandar(){
       console.log("hola")     
     let item = {usuario,password} 
     } 
   
   
    return (
    <div className="row" style={margenes}>
        <div class="col-12 text-center" >
        <h1></h1>
        </div> 
    <div className="col-12" style={margenes}>
         <div className="row">
            <div className="col-6 text-end" >Usuario:</div>
            <div className="col-6 text-star">
              <input type="text" name="nombre"
              onChange={(e)=>setUsuario(e.target.value)} style={ancho}></input>
            </div>
         </div>
         <div className="row" style={margenes2}>
            <div className="col-6 text-end">Password:</div>
            <div className="col-6 text-star">
              <input type="text" name="password"
             onChange={(e)=>setPassword(e.target.value)}  style={ancho}></input>
            </div>
         </div>
    </div>

    <div className="col-12 text-center" style={margenes}>
    <button onClick={mandar()}   class="btn btn-primary"  >Entrar</button>
    </div>
    
    </div>
  )
}

export default Login

