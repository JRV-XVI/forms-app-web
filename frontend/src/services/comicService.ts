/**
 * Servicio para interactuar con el backend de comics
 * 
 * - Comic: Interfaz que representa un cómic completo (con id)
 * - ComicData: Interfaz para crear un cómic (sin id)
 * - createComic: Función para crear un cómic
 * - getComics: Función para obtener todos los cómics
 */

const API_URL = "http://localhost:8080/api/comics";

export interface Comic {
    id: number;
    title: string;
    volume: number;
    publisher: string;
    datePublished: string;
    price: number;
}

export interface ComicData {
    title: string;
    volume: number;
    publisher: string;
    datePublished: string;
    price: number;
}

/**
 * Crea un nuevo cómic en el backend
 */
export async function createComic(comic: ComicData): Promise<Comic> {
    const response = await fetch(API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(comic)
    });

    if (!response.ok) {
        throw new Error("Error al registrar el cómic en el backend");
    }

    const data: Comic = await response.json();
    return data;
}

/**
 * Obtiene todos los cómics del backend
 */
export async function getComics(): Promise<Comic[]> {
    const response = await fetch(API_URL, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    });

    if (!response.ok) {
        throw new Error("Error al obtener los cómics del backend");
    }

    const data: Comic[] = await response.json();
    return data;
}
