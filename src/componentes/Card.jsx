import React from 'react'
import ordenesIcono from '../imagenes/ordenesIcono.png'
import sucursalIcono from '../imagenes/sucursalIcono.png'
import productosIcono from '../imagenes/productosIcono.png'
import icono from '../imagenes/icono.png'

const divs = {marginTop : "40px"}
const imgs = {height:"200px" ,  objectFit: "cover"} 
const cardas = {height: "100"} 

function Card() {
  return (
     
  <><div className="row"> 
    <div className="col-4 text-center" style={divs}>
          <div className="card" style={cardas}>
             
              <div className="card-body">
                  <h5 className="card-title">Alta de Sucursal</h5>
                  <p className="card-text">Forma para el alta de nuevos Sucursales.</p>
                  <a href="/FormaSucursal" className="btn btn-primary">Ir al formulario</a>
              </div>
          </div>
      </div>

      <div className="col-4 text-center" style={divs}>
          <div className="card" style={cardas}>
             
              <div className="card-body">
                  <h5 className="card-title">Alta de Producto</h5>
                  <p className="card-text">Forma para el alta de nuevos Sucursales.</p>
                  <a href="/formaProducto" className="btn btn-primary">Ir al formulario</a>
              </div>
          </div>
      </div>

      <div className="col-4 text-center" style={divs}>
          <div className="card" style={cardas}>
             
              <div className="card-body">
                  <h5 className="card-title">Alta de Sucursal</h5>
                  <p className="card-text">Forma para el alta de nuevos Sucursales.</p>
                  <a href="/formaOrden" className="btn btn-primary">Ir al formulario</a>
              </div>
          </div>
      </div>

      
    </div>
    </>

  )
}

export default Card