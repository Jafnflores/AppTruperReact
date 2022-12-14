import axios from 'axios'
import React, { Component } from 'react'
const divs = {marginTop : "80px"}
const divs2 = {marginTop : "20px"}




export class FormSucursal extends Component {
  
  constructor(props) {
    super(props)
  
    this.state = {
       nombre:''
    }
  }


  changeHandler = e =>{
   this.setState({[e.target.name]:e.target.value})    
  }

    submitHandler = e =>{
        e.preventDefault()
        console.log(this.state)
        axios.post('http://localhost:8080/Sucursal', this.state).then(Response=>{console.log(Response)}).catch(error=>{console.log(error)})
        e.target.reset()
    }
  
  
    render() {
        const{nombre} = this.state
    return (
       <form onSubmit={this.submitHandler}>
        <div className="row" style={divs}>
            
        <div className="col-12 text-center">
               <h1>Alta Sucursal</h1>
            </div>
       
            <div className="col-12 text-center" style={divs2}>
               <label>
                Sucursal:&nbsp;&nbsp; 
                <input type="text" name="nombre" value={nombre} onChange={this.changeHandler} />
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

export default FormSucursal