import React from 'react'
import icono from '../imagenes/icono.png'

function Nav() {
  return (
    <nav className="navbar navbar-dark bg-dark">
    <div className="container-fluid">
        <a className="navbar-brand" href="/menu">            
        <img src={icono} alt="TRUPER" width="30" height="24" className="d-inline-block align-text-top"></img>
        TRUPER
        </a>
    </div>
    </nav>
  )
}

export default Nav