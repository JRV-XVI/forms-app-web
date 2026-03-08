/**
 * Dashboard.tsx
 * 
 * Página del dashboard que muestra todos los cómics registrados.
 * Obtiene la lista de cómics del backend mediante getComics,
 * y los presenta en una tabla con información completa (ID, título, volumen, editorial, fecha y precio).
 * Incluye manejo de estados de carga y errores.
 */
import { useState, useEffect } from 'react'
import { getComics, type Comic } from '../../services/comicService'
import './Dashboard.css'

function Dashboard() {
    const [comics, setComics] = useState<Comic[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchComics = async () => {
            try {
                const data = await getComics();
                setComics(data);
                setLoading(false);
            } catch (err) {
                setError("Error al cargar los cómics");
                setLoading(false);
                console.error(err);
            }
        };

        fetchComics();
    }, []);

    if (loading) {
        return (
            <div className="page-container">
                <div className="page-header">
                    <h1>Dashboard - Mis Cómics</h1>
                </div>
                <p className="message">Cargando...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="page-container">
                <div className="page-header">
                    <h1>Dashboard - Mis Cómics</h1>
                </div>
                <p className="message message-error">{error}</p>
            </div>
        );
    }

    return (
        <div className="page-container">
            <div className="page-header">
                <h1>Dashboard - Mis Cómics</h1>
                <p className="comics-count">Total de cómics registrados: {comics.length}</p>
            </div>
            
            {comics.length === 0 ? (
                <p className="message">No hay cómics registrados todavía.</p>
            ) : (
                <div className="card">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Título</th>
                                <th>Volumen</th>
                                <th>Editorial</th>
                                <th>Fecha</th>
                                <th>Precio</th>
                            </tr>
                        </thead>
                        <tbody>
                            {comics.map((comic) => (
                                <tr key={comic.id}>
                                    <td>{comic.id}</td>
                                    <td>{comic.title}</td>
                                    <td>{comic.volume}</td>
                                    <td>{comic.publisher}</td>
                                    <td>{comic.datePublished}</td>
                                    <td className="price-cell">${comic.price}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    )
}

export default Dashboard