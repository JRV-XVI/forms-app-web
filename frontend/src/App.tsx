/**
 * App.tsx
 * 
 * Componente principal de la aplicación.
 * Configura el sistema de rutas con React Router y define la estructura general:
 * - Navbar fija en todas las páginas
 * - Ruta / para HomePage (formulario de registro)
 * - Ruta /dashboard para Dashboard (lista de cómics)
 * - Ruta * para NotFound (página 404)
 */
import { Routes, Route } from 'react-router-dom'
import Navbar from './pages/navbar/Navbar'
import HomePage from './pages/mainpages/HomePage'
import Dashboard from './pages/mainpages/Dashboard'
import NotFound from './pages/mainpages/NotFound'
import './App.css'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
