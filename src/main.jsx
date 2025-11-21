import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.scss'
import App from './App.jsx'
import { PrimeReactProvider } from 'primereact/api'
import PersonajesProvider from './providers/PersonajesProvider.jsx'
import { BrowserRouter } from 'react-router'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PrimeReactProvider>
      <PersonajesProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </PersonajesProvider>
    </PrimeReactProvider>
  </StrictMode>,
)
