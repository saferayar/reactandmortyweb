import { Route, Routes } from 'react-router'
import PersonajesContainer from './containers/PersonajesContainer'
import UbicacionesContainer from './containers/UbicacionesContainer'
import { Menubar } from 'primereact/menubar';
function App() {
  const items = [{
    label: "Personajes",
    url: "/"
  }, {
    label: "Ubicaciones",
    url: "/ubicaciones"
  }]
  return (
    <>
      <div>
        <Menubar model={items}></Menubar>
      </div>
      <div className='mt-4'>
        <Routes>
          <Route path='/' element={<PersonajesContainer />}></Route>
          <Route path='/ubicaciones' element={<UbicacionesContainer />}></Route>
        </Routes>
      </div>
    </>
  )
}

export default App
