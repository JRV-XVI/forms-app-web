
/**
 * FormComponent.tsx
 * 
 * Componente de formulario para registrar nuevos cómics.
 * Captura los datos del cómic (título, volumen, editorial, fecha y precio),
 * los envía al backend mediante el servicio createComic,
 * y muestra un mensaje de éxito cuando el registro es exitoso.
 */
import { useState, type FormEvent, type ChangeEvent } from "react";
import { createComic, type ComicData } from "../services/comicService";
import "./FormComponent.css";

function ComicForm() {

    const [title, setTitle] = useState<string>("");
    const [volume, setVolume] = useState<string>("");
    const [publisher, setPublisher] = useState<string>("");
    const [datePublished, setDatePublished] = useState<string>("");
    const [price, setPrice] = useState<string>("");
    const [successMessage, setSuccessMessage] = useState<string | null>(null);


    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const comicData: ComicData = {
                title,
                volume: parseInt(volume),
                publisher,
                datePublished,
                price: parseFloat(price)
            };
            
            const newComic = await createComic(comicData);

            // Guardamos mensaje de éxito
            setSuccessMessage(`Cómic "${newComic.title}" registrado exitosamente con ID: ${newComic.id}`);
            
            // Limpiar formulario
            setTitle("");
            setVolume("");
            setPublisher("");
            setDatePublished("");
            setPrice("");

        } catch (error) {
            console.error(error);
            alert("Error al registrar el cómic");
        }
    };


    return (
        <div className="form-container card">
            <h2>Registro de Cómic</h2>

            <form className="comic-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <input
                        className="input-field"
                        type="text"
                        placeholder="Título del Cómic"
                        value={title}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)}
                        required
                    />
                </div>

                <div className="form-group">
                    <input
                        className="input-field"
                        type="number"
                        placeholder="Volumen"
                        value={volume}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => setVolume(e.target.value)}
                        required
                    />
                </div>

                <div className="form-group">
                    <input
                        className="input-field"
                        type="text"
                        placeholder="Editorial"
                        value={publisher}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => setPublisher(e.target.value)}
                        required
                    />
                </div>

                <div className="form-group">
                    <input
                        className="input-field"
                        type="date"
                        title="Fecha de publicación"
                        value={datePublished}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => setDatePublished(e.target.value)}
                        required
                    />
                </div>

                <div className="form-group">
                    <input
                        className="input-field"
                        type="number"
                        step="0.01"
                        placeholder="Precio"
                        value={price}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => setPrice(e.target.value)}
                        required
                    />
                </div>

                <button className="btn btn-primary mt-sm" type="submit">Registrar Cómic</button>
            </form>


            {successMessage !== null && (
                <div className="message message-success mt-lg">
                    <h3>{successMessage}</h3>
                </div>
            )}
        </div>
    );
}

export default ComicForm;
