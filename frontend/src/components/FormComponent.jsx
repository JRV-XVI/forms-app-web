/**
 * ---------------------------------------------------------
 * IMPORTACIONES
 * ---------------------------------------------------------
 * useState → Hook de React para manejar estado interno
 * registrarComic → función que llama al backend (Spring Boot)
 * ---------------------------------------------------------
 */
import { useState } from "react";
import { registrarComic } from "../services/comicService";


/**
 * ---------------------------------------------------------
 * COMPONENTE: ComicForm
 * ---------------------------------------------------------
 * Componente funcional que:
 * 1. Captura datos de un cómic desde inputs
 * 2. Envía los datos al backend
 * 3. Muestra la respuesta del backend
 * ---------------------------------------------------------
 */
function ComicForm() {

    /**
     * ---------------------------------------------------------
     * BLOQUE 1: Estados del componente
     * ---------------------------------------------------------
     * Cada campo del formulario se guarda en un estado
     * respuesta → guarda la respuesta del backend
     * ---------------------------------------------------------
     */
    const [titulo, setTitulo] = useState("");
    const [numero, setNumero] = useState("");
    const [editorial, setEditorial] = useState("");
    const [fecha, setFecha] = useState("");
    const [precio, setPrecio] = useState("");
    const [respuesta, setRespuesta] = useState(null);


    /**
     * ---------------------------------------------------------
     * BLOQUE 2: Manejo del envío del formulario
     * ---------------------------------------------------------
     * - e.preventDefault() evita recarga
     * - Se llama al servicio "registrarComic"
     * - Se actualiza el estado respuesta
     * ---------------------------------------------------------
     */
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const data = await registrarComic({
                titulo,
                numero,
                editorial,
                fecha,
                precio
            });

            // Guardamos la respuesta que viene del backend
            setRespuesta(data.mensaje);

        } catch (error) {
            console.error(error);
            alert("Error al registrar el cómic");
        }
    };


    /**
     * ---------------------------------------------------------
     * BLOQUE 3: Renderizado del componente (JSX)
     * ---------------------------------------------------------
     * - Formulario controlado
     * - onChange actualiza estado
     * - onSubmit ejecuta handleSubmit
     * - Renderizado condicional de la respuesta
     * ---------------------------------------------------------
     */
    return (
        <div>
            <h2>Registro de Cómic</h2>

            <form onSubmit={handleSubmit}>
                <div>
                    <input
                        type="text"
                        placeholder="Título"
                        value={titulo}
                        onChange={(e) => setTitulo(e.target.value)}
                        required
                    />
                </div>

                <div>
                    <input
                        type="number"
                        placeholder="Número"
                        value={numero}
                        onChange={(e) => setNumero(e.target.value)}
                        required
                    />
                </div>

                <div>
                    <input
                        type="text"
                        placeholder="Editorial"
                        value={editorial}
                        onChange={(e) => setEditorial(e.target.value)}
                        required
                    />
                </div>

                <div>
                    <input
                        type="date"
                        value={fecha}
                        onChange={(e) => setFecha(e.target.value)}
                        required
                    />
                </div>

                <div>
                    <input
                        type="number"
                        step="0.01"
                        placeholder="Precio"
                        value={precio}
                        onChange={(e) => setPrecio(e.target.value)}
                        required
                    />
                </div>

                <button type="submit">Enviar</button>
            </form>


            {/**
             * Renderizado condicional:
             * Solo muestra el resultado si no es null.
             */}
            {respuesta !== null && (
                <h3>Respuesta: {respuesta}</h3>
            )}
        </div>
    );
}

export default ComicForm;
