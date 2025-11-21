import React, { useContext, useEffect } from 'react'
import { PersonajesContext } from '../providers/context'

function PersonajesContainer() {

    const {cargarPersonajes} = useContext(PersonajesContext);
    useEffect(() => {

      cargarPersonajes();
    
    }, []);
    

  return (
    <div>
      Web personajes
    </div>
  )
}

export default PersonajesContainer