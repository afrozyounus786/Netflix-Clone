import React, { useEffect, useState } from 'react'
import './Banner.css'
import axios from './axios';
import requests from './Request';

const Banner = () => {

    const [movie, setMovie] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get(requests.fetchNetflixOriginals);
                const results = response.data.results;
                setMovie(results[Math.floor(Math.random() * results.length)]);
            } catch (error) {
                console.error('Failed to fetch data:', error);
            }
        }

        fetchData();
    }, []);
    

    function truncate (str , n){
        return str?.length > n ? str.substr(0 , n - 1) + "..." : str;
    }
  return (
    <header className='banner' style={{
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
    }}>
        <div className="banner-contents">
            <h1 className="banner-title">{movie?.title || movie?.name || movie?.original_name}</h1>
            <div className="banner-btn">
                <button className='banner-buttons'>Play</button>
                <button className='banner-buttons'>My List</button>
            </div>
            <h1 className="banner-description">{truncate(movie?.overview , 150)}</h1>
            <div className="banner-fadeBottom"/>
        </div>
    </header>
  )
}

export default Banner