import React, { useEffect, useState } from 'react';
import { Popups } from './Popups';

export const Movielist = () => {
    const [movies, setMovies] = useState([]);
    const [openPopup, setOpenPopup] = useState(false);
    const [elegirpeliculas, setelegirpeliculas] = useState(null);
    const [pages, setPages] = useState(1);
    const [busqueda, setbusqueda] = useState('');

    const getMovies = async (page) => {
        try {
            const response = await fetch(
                `https://api.themoviedb.org/3/discover/movie?api_key=971e1bc1983ee05035bd45d1b66d8e69&page=${page}`
            );
            const data = await response.json();
            setMovies(data.results);
        } catch (error) {
            console.error(error);
        }
    };

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

    useEffect(() => {
        getMovies(pages);
    }, [pages]);

    return (
        <div className="bg-white">
            <div className="mx-auto w-full max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <h2 className="text-5xl text-center font-bold tracking-tight text-gray-900">Películas</h2>
                <input
                    type="text"
                    placeholder="¿Qué película vamos a ver?"
                    value={busqueda}
                    onClick={busqueda}
                    className="w-full p-2 mb-4 border border-gray-300 rounded-lg"
                />
                <div className="mt-6 grid grid-cols-2 gap-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-8">
                    {movies
                        .filter((pelis) => pelis.original_title)
                        .map((pelis) => (
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
                <button className="devolver hover:underline" onClick={() => devolver()}>
                    Prev
                </button>
                <span className="hover:underline">{pages}</span>
                <button className="ir bg-transparent hover:underline" onClick={() => Siguiente()}>
                    Next
                </button>
            </div>
        </div>
    );
};
