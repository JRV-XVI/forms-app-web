/**

Este archivo define la función y los tipos para registrar un cómic en el backend.

ComicData: Interfaz que representa los datos de un cómic.
ComicResponse: Interfaz para la respuesta del backend.
registrarComic: Función asíncrona que envía los datos del cómic al backend mediante una petición HTTP POST.

Si la respuesta es exitosa, retorna el mensaje del backend; si ocurre un error, lanza una excepción.

**/
export interface ComicData {
    titulo: string;
    numero: string;
    editorial: string;
    fecha: string;
    precio: string;
}

export interface ComicResponse {
    mensaje: string;
}

export async function registrarComic(comic: ComicData): Promise<ComicResponse> {
    
    const response = await fetch("http://localhost:8080/api/comic/registrar", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(comic)
    });

    if (!response.ok) {
        throw new Error("Error al registrar el cómic en el backend");
    }

    const data: ComicResponse = await response.json();
    return data;
}
