import React from 'react';
import { IoIosClose } from "react-icons/io";
export const Popups = ({ pelis, cerrar }) => {
    if (!pelis) return null;

    return (
        <section className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg shadow-lg p-6 w-80 relative">
                <button
                    onClick={cerrar}
                    className="absolute top-4 left-4 text-gray-500 hover:text-gray-900 text-5xl" >
                    <IoIosClose/>
                </button>
                <img
                    alt={pelis.original_title}
                    src={`https://image.tmdb.org/t/p/w500/${pelis.poster_path}`}
                    className="w-auto rounded-lg"
                />
                <h2 className="mt-4 text-3xl font-bold text-gray-900">{pelis.original_title}</h2>
                <p className="mt-2 text-gray-600">{pelis.overview}</p>
                <p className="mt-4 text-sm text-gray-500">
                    Idioma: {pelis.original_language}
                </p>
                <p className="mt-2 text-sm text-gray-500">
                    Lanzada en: {pelis.release_date}
                </p>
                <p>popularidad: {pelis.popularity}</p>
            </div>
        </section>
    );
};