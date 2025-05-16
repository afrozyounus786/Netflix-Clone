import React from 'react';
import './HomeScreen.css';
import Navbar from './Navbar';
import Banner from './Banner';
import Row from './Row';
import requests from './Request';

const HomeScreen = () => {
  return (
    <div >
        <Navbar/>
        <Banner/>
        <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} />
        <Row title="NETFLIX TOP RATED" fetchUrl={requests.fetchTopRated} />
        <Row title="NETFLIX ACTION MOVIES" fetchUrl={requests.fetchActionMovies} />
        <Row title="NETFLIX COMEDY MOVIES" fetchUrl={requests.fetchComedyMovies} />
        <Row title="NETFLIX HORROR MOVIES" fetchUrl={requests.fetchHorrorMovies} />
    </div>
  )
}

export default HomeScreen