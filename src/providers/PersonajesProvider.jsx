import React, { useState } from 'react'
import { PersonajesContext } from './context'
import { getPersonajes } from '../services/PersonajesService';

function PersonajesProvider({children}) {

  const [personajes, setPersonajes] = useState([]);
  const cargarPersonajes = async()=>{
    const resultado = await getPersonajes();
  }
  const globalState = {personajes,cargarPersonajes}
  return (
    <PersonajesContext.Provider value={globalState}>{children}</PersonajesContext.Provider>
  )
}

export default PersonajesProvider
