/**
 * HomePage.tsx
 * 
 * Página principal de la aplicación.
 * Muestra un mensaje de bienvenida y el formulario para registrar cómics.
 * Sirve como punto de entrada para que los usuarios comiencen a agregar cómics a su colección.
 */
import ComicForm from '../../components/FormComponent'
import './HomePage.css'

function HomePage() {
    return (
        <div className="page-container">
            <div className="page-header">
                <h1>Bienvenido a la App de Comics</h1>
                <p>Aquí puedes registrar nuevos cómics en tu colección</p>
            </div>
            <div className="homepage-content">
                <ComicForm />
            </div>
        </div>
    )
}

export default HomePage