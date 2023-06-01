import React from 'react'

const Card = ({nombre, edad, libroFavorito}) => {
  return (
    <>
    <div>Hola , soy una tarjeta</div>
    
    <div className="tarjeta-usuario">
      
      <p>Nombre: {nombre}</p>
      <p>Edad: {edad}</p>
      <p>Libro: {libroFavorito}</p>
    </div>
    </>
  )
}

export default Card
