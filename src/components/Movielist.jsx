import React, { useEffect, useState } from 'react';
import { Popups } from './Popups';

export const Movielist = () => {
    const [movies, setMovies] = useState([]);
    const [openPopup, setOpenPopup] = useState(false);
    const [elegirpeliculas, setelegirpeliculas] = useState(null);
    const [pages, setPages] = useState(1);
    const [busqueda, setbusqueda] = useState('');
    const [genero, setGenero] = useState('');
    const [mostrarGeneros, setMostrarGeneros] = useState(false); // Estado para mostrar/ocultar géneros

    const API_KEY = '971e1bc1983ee05035bd45d1b66d8e69';

    const getMoviesByGenre = async (genreId, page) => {
        try {
            const response = await fetch(
                `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=${genreId}&page=${page}`
            );
            const data = await response.json();
            setMovies(data.results);
        } catch (error) {
            console.error('Error al obtener películas por género:', error);
        }
    };

    const getMovies = async (page) => {
        try {
            const response = await fetch(
                `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&page=${page}`
            );
            const data = await response.json();
            setMovies(data.results);
        } catch (error) {
            console.error('Error al obtener películas:', error);
        }
    };

    const searchMovies = async (query, page) => {
        try {
            const response = await fetch(
                `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}&page=${page}`
            );
            const data = await response.json();
            setMovies(data.results);
        } catch (error) {
            console.error('Error al buscar películas:', error);
        }
    };

    useEffect(() => {
        if (busqueda.trim() === '') {
            if (genero === '') {
                getMovies(pages);
            } else {
                getMoviesByGenre(genero, pages);
            }
        } else {
            searchMovies(busqueda, pages);
        }
    }, [busqueda, pages, genero]);

    const imagenes = (pelis) => {
        setelegirpeliculas(pelis);
        setOpenPopup(true);
    };

    const Siguiente = () => {
        setPages(pages + 1);
    };

    const devolver = () => {
        if (pages > 1) setPages(pages - 1);
    };

    const closePopup = () => {
        setOpenPopup(false);
        setelegirpeliculas(null);
    };

    // Función para alternar la visibilidad de los géneros
    const toggleGeneros = () => {
        setMostrarGeneros(!mostrarGeneros);
    };

    return (
        <section className="bg-white">
            <div className="mx-auto w-full max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <h2 className="text-5xl text-center font-bold tracking-tight text-gray-900">Películas</h2>
                <nav>
                    <div className="flex flex-wrap gap-4 justify-center my-4">
                        <button onClick={toggleGeneros} className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400">
                            Filtrar
                        </button>
                    </div>
                    {mostrarGeneros && (
                        <div className="flex flex-wrap gap-4 justify-center my-4">
                            <button onClick={() => setGenero("")} className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400">
                                Inicio
                            </button>
                            <button onClick={() => setGenero(28)} className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400">
                                Acción
                            </button>
                            <button onClick={() => setGenero(12)} className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400">
                                Aventura
                            </button>
                            <button onClick={() => setGenero(16)} className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400">
                                Animación
                            </button>
                            <button onClick={() => setGenero(35)} className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400">
                                Comedia
                            </button>
                            <button onClick={() => setGenero(80)} className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400">
                                Crimen
                            </button>
                            <button onClick={() => setGenero(99)} className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400">
                                Documental
                            </button>
                            <button onClick={() => setGenero(18)} className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400">
                                Drama
                            </button>
                            <button onClick={() => setGenero(10751)} className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400">
                                Familia
                            </button>
                            <button onClick={() => setGenero(14)} className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400">
                                Fantasía
                            </button>
                            <button onClick={() => setGenero(36)} className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400">
                                Historia
                            </button>
                            <button onClick={() => setGenero(27)} className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400">
                                Terror
                            </button>
                            <button onClick={() => setGenero(10402)} className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400">
                                Música
                            </button>
                            <button onClick={() => setGenero(9648)} className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400">
                                Misterio
                            </button>
                            <button onClick={() => setGenero(10749)} className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400">
                                Romance
                            </button>
                            <button onClick={() => setGenero(878)} className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400">
                                Ciencia Ficción
                            </button>
                            <button onClick={() => setGenero(10770)} className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400">
                                Película de TV
                            </button>
                            <button onClick={() => setGenero(53)} className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400">
                                Suspense
                            </button>
                            <button onClick={() => setGenero(10752)} className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400">
                                Bélica
                            </button>
                            <button onClick={() => setGenero(37)} className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400">
                                Western
                            </button>
                        </div>
                    )}
                </nav>
                <input
                    type="text"
                    placeholder="¿Qué película vamos a ver?"
                    value={busqueda}
                    onChange={(e) => setbusqueda(e.target.value)}
                    className="w-full p-2 mb-4 border border-gray-300 rounded-lg"
                />
                <div className="mt-6 grid grid-cols-2 gap-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-8">
                    {movies.map((pelis) => (
                        <div
                            key={pelis.id}
                            className="group relative cursor-pointer"
                            onClick={() => imagenes(pelis)}
                        >
                            <img
                                alt={pelis.original_title}
                                src={`https://image.tmdb.org/t/p/w500/${pelis.poster_path}`}
                                className="w-full rounded-md bg-gray-200 group-hover:opacity-75 lg:h-96"
                            />
                            <div className="mt-4">
                                <h3 className="text-lg font-medium text-gray-700">{pelis.original_title}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {openPopup && <Popups pelis={elegirpeliculas} cerrar={closePopup} />}
            <div className="text-3xl flex justify-center gap-10 items-center">
                <button className="devolver hover:underline" onClick={devolver}>
                    Prev
                </button>
                <span className="hover:underline">{pages}</span>
                <button className="next hover:underline" onClick={Siguiente}>
                    Next
                </button>
            </div>
        </section>
    );
};
