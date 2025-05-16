import React, { useEffect, useState } from 'react';
import axios from './axios';
import './Row.css';

function Row({ title, fetchUrl , isLargeRow = false }) {

    const [movies, setMovies] = useState([]);

    const baseUrl = "https://image.tmdb.org/t/p/original/";

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get(fetchUrl);
                console.log("Response data:", response.data);
                setMovies(response.data.results); 
            } catch (error) {
                console.error("Fetch error:", error);
            }
        }
        fetchData();
    }, [fetchUrl]);

    console.log("Movies:", movies);

    return (
        <div className="row">
            <h2 className='heading'>{title}</h2>

            <div className="row-posters">
            {movies.map((movie) => (
                <img className={`row-poster ${isLargeRow && "row-poster-large"}`}
                key={movie.id} 
                src={`${baseUrl}${
                    isLargeRow ? movie.poster : movie.backdrop_path}`} alt={movie.name} />
            ))}
            </div>
        </div>
    );
}

export default Row;
