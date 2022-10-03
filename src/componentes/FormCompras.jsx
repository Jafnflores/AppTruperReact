import axios from 'axios'
import React, { Component,useState,useEffect } from 'react'
import {todosProductos} from '../funciones/getProductos'
const divs = {marginTop : "80px"}
const divs2 = {marginTop : "20px"}





export class FormProducto extends Component {
  
  constructor(props) {
    super(props)
  
    this.state = {
       sucursal:{},
       producto:[],
       total:0
    }
  }

  


  changeHandler = e =>{
   this.setState({[e.target.name]:e.target.value})    
  }

    submitHandler = e =>{
        e.preventDefault()
        console.log(this.state)
        axios.post('http://localhost:8080/Producto', this.state).then(Response=>{console.log(Response)}).catch(error=>{console.log(error)})
        
    }
  
  
     
    render() {

      
  
     
        
        const{codigo,descripcion,precio} = this.state
    return (
       <form onSubmit={this.submitHandler}>
        <div className="row" style={divs}>
            
        <div className="col-12 text-center">
               <h1>Alta de Orden</h1>
            </div>
       
            <div className="col-12 text-center" style={divs2}>
               <label>
                Sucursal:
                <input type="text" name="codigo" value={codigo} onChange={this.changeHandler} />
                </label>
            </div>

            <div className="col-12 text-center" style={divs2}>
               <label>
                Descripcion:
                <input type="text" name="descripcion" value={descripcion} onChange={this.changeHandler} />
                </label>
            </div>

            <div className="col-12 text-center" style={divs2}>
               <label>
                Precio:
                <input type="text" name="precio" value={precio} onChange={this.changeHandler} />
                </label>
            </div>


            <div className="col-12 text-center" style={divs2}>
              <input type="submit" value="Dar Alta" />
            </div>
       
         </div>
        </form>
    )
  }
}

export default FormProducto