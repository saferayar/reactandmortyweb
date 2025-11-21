import React from 'react'

import { DataScroller } from 'primereact/datascroller';
import { Panel } from 'primereact/panel';
import { Image } from 'primereact/image';
        
function PersonajesTable({personajes}) {
  
  const itemTemplate = (p)=>{
    return <Panel header={p.name}>
        <div className="row">
            <div className="col">
                <Image src={p.image} aria-label={p.name} width='100px' ></Image>
            </div>
            <div className="col">
                <p>Status: {p.status}</p>
                <p>Genero: {p.gender}</p>
                <p>Cantidad episodios: {p.countOfEpisodes}</p>
            </div>
        </div>
    </Panel>
  }

  return (
    <>
    <DataScroller value={personajes} itemTemplate={itemTemplate} rows={5} header="Scroll Down to Load More" />
         
    </>
  )
}

export default PersonajesTable
