import React from 'react'
import icono from '../imagenes/icono.png'

function Nav() {
  return (
    <nav class="navbar navbar-dark bg-dark">
    <div class="container-fluid">
        <a class="navbar-brand" href="/menu">            
        <img src={icono} alt="TRUPER" width="30" height="24" class="d-inline-block align-text-top"></img>
        TRUPER
        </a>
    </div>
    </nav>
  )
}

export default Nav