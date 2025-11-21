import React, { useState } from 'react'
import { PersonajesContext } from './context'
import { getPersonajes } from '../services/PersonajesService';

function PersonajesProvider({children}) {

  const [personajes, setPersonajes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const cargarPersonajes = ()=>{
    setLoading(true);
    setError(null);
    getPersonajes()
        .then((response)=>setPersonajes(response))
        .catch((e)=> setError(e))
        .finally(()=>{
            setLoading(false);
        });
  }
  const globalState = {personajes,cargarPersonajes, loading, error}
  return (
    <PersonajesContext.Provider value={globalState}>{children}</PersonajesContext.Provider>
  )
}

export default PersonajesProvider
