import React, { useContext, useEffect } from 'react'
import { PersonajesContext } from '../providers/context'
import { ProgressSpinner } from 'primereact/progressspinner';
import PersonajesTable from '../components/PersonajesTable';
import { Button } from 'primereact/button';
import { Message } from 'primereact/message';

function PersonajesContainer() {

    const {cargarPersonajes, personajes, loading, error} = useContext(PersonajesContext);
    useEffect(() => {

      cargarPersonajes();
    
    }, []);
    

  if(loading){
    return <div className='mt-5 mx-auto text-center'>
        <ProgressSpinner></ProgressSpinner>
        </div>
  }
  if (error){
    return <Message text={error?.message} severity='error' ></Message>
  }
  return (
    <div>
        <Button label='Recargar' severity='info' onClick={()=>cargarPersonajes()}  ></Button>
     {/* <ul>
         {personajes.map(p=> <li key={p.id}>{p.name}</li>)}
     </ul> */}
     <PersonajesTable personajes={personajes}></PersonajesTable>
    </div>
  )
}

export default PersonajesContainer