/**
 * NotFound.tsx
 * 
 * Página 404 - Se muestra cuando el usuario intenta acceder a una ruta que no existe.
 * Incluye un mensaje de error y un enlace para volver a la página principal.
 */
import { Link } from "react-router-dom";
import './NotFound.css';

const NotFound = () => {
  return (
    <div className="page-container notfound-container text-center">
      <div className="card notfound-content">
        <h1 className="text-red">404</h1>
        <p className="text-gray">Página no encontrada</p>
        <Link to="/" className="btn btn-secondary">
          Volver al Inicio
        </Link>
      </div>
    </div>
  )
}

export default NotFound;