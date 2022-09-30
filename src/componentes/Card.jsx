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
     
  <><div class="row"> 
    <div class="col-4 text-center" style={divs}>
          <div class="card" style={cardas}>
             
              <div class="card-body">
                  <h5 class="card-title">Alta de Sucursal</h5>
                  <p class="card-text">Forma para el alta de nuevos Sucursales.</p>
                  <a href="/FormaSucursal" class="btn btn-primary">Ir al formulario</a>
              </div>
          </div>
      </div>

      <div class="col-4 text-center" style={divs}>
          <div class="card" style={cardas}>
             
              <div class="card-body">
                  <h5 class="card-title">Alta de Producto</h5>
                  <p class="card-text">Forma para el alta de nuevos Sucursales.</p>
                  <a href="/formaProducto" class="btn btn-primary">Ir al formulario</a>
              </div>
          </div>
      </div>

      <div class="col-4 text-center" style={divs}>
          <div class="card" style={cardas}>
             
              <div class="card-body">
                  <h5 class="card-title">Alta de Sucursal</h5>
                  <p class="card-text">Forma para el alta de nuevos Sucursales.</p>
                  <a href="/formaOrden" class="btn btn-primary">Ir al formulario</a>
              </div>
          </div>
      </div>

      
    </div>
    </>

  )
}

export default Card