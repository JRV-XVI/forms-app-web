/**
 * ---------------------------------------------------------
 * IMPORTACIONES
 * ---------------------------------------------------------
 * useState → Hook de React para manejar estado interno
 * registrarComic → función que llama al backend (Spring Boot)
 * ---------------------------------------------------------
 */
import { useState, type FormEvent, type ChangeEvent } from "react";
import { registrarComic, type ComicData } from "../services/comicService.ts";


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
    const [titulo, setTitulo] = useState<string>("");
    const [numero, setNumero] = useState<string>("");
    const [editorial, setEditorial] = useState<string>("");
    const [fecha, setFecha] = useState<string>("");
    const [precio, setPrecio] = useState<string>("");
    const [respuesta, setRespuesta] = useState<string | null>(null);


    /**
     * ---------------------------------------------------------
     * BLOQUE 2: Manejo del envío del formulario
     * ---------------------------------------------------------
     * - e.preventDefault() evita recarga
     * - Se llama al servicio "registrarComic"
     * - Se actualiza el estado respuesta
     * ---------------------------------------------------------
     */
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const comicData: ComicData = {
                titulo,
                numero,
                editorial,
                fecha,
                precio
            };
            
            const data = await registrarComic(comicData);

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
                        onChange={(e: ChangeEvent<HTMLInputElement>) => setTitulo(e.target.value)}
                        required
                    />
                </div>

                <div>
                    <input
                        type="number"
                        placeholder="Número"
                        value={numero}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => setNumero(e.target.value)}
                        required
                    />
                </div>

                <div>
                    <input
                        type="text"
                        placeholder="Editorial"
                        value={editorial}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => setEditorial(e.target.value)}
                        required
                    />
                </div>

                <div>
                    <input
                        type="date"
                        title="Fecha de publicación"
                        value={fecha}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => setFecha(e.target.value)}
                        required
                    />
                </div>

                <div>
                    <input
                        type="number"
                        step="0.01"
                        placeholder="Precio"
                        value={precio}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => setPrecio(e.target.value)}
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
