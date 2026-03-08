/**
 * Barra de navegación principal de la aplicación.
 * 
 * - Utiliza NavLink de react-router-dom para navegación entre páginas
 * - Los enlaces se destacan automáticamente cuando están activos
 * - Estilo definido en Navbar.css con esquema de colores negro y rojo
 * ---------------------------------------------------------
 */
import { NavLink } from "react-router-dom";
import "./Navbar.css"; // Importa el CSS específico para Navbar

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <NavLink to="/" className="nav-link">Home</NavLink>
        <NavLink to="/dashboard" className="nav-link">Dashboard</NavLink>
      </div>
    </nav>
  );
}

export default Navbar;