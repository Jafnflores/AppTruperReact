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
          <img src={icono} alt="TRUPER" width="30" height="24" className="d-inline-block align-text-top"></img>
              <div className="card-body">
                  <h5 className="card-title">Sucursales</h5>
                  <p className="card-text"><a href="/consultaSucursal">Consultar Sucursales.</a></p>
                  <a href="/FormaSucursal" className="btn btn-primary">Alta de Sucursal</a>
              </div>
          </div>
      </div>

      <div className="col-4 text-center" style={divs}>
          <div className="card" style={cardas}>
          <img src={icono} alt="TRUPER" width="30" height="24" className="d-inline-block align-text-top"></img>
              <div className="card-body">
                  <h5 className="card-title">Producto</h5>
                  <p className="card-text"><a href="/consultaProducto">Consultar Productos.</a></p>
                  <a href="/formaProducto" className="btn btn-primary">Alta de Producto</a>
              </div>
          </div>
      </div>

      <div className="col-4 text-center" style={divs}>
          <div className="card" style={cardas}>
          <img src={icono} alt="TRUPER" width="30" height="24" className="d-inline-block align-text-top"></img>
              <div className="card-body">
                  <h5 className="card-title">Ordenes de Compra</h5>
                  <p className="card-text">Consultar Ordenes.</p>
                  <a href="/formaCompra" className="btn btn-primary">Alta de Orden</a>
              </div>
          </div>
      </div>

      
    </div>
    </>

  )
}

export default Card