import React from 'react'
import "./styles.css"


const Eventos = () => {
  return (
    <div className="eventos">
      <input type="checkbox" id="checkbox-evento" />
      <label for="checkbox-evento" className="texto-evento">Mostrar eventos</label>
    </div>
  )
}

export default Eventos;