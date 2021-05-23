import React, { useEffect, useState } from 'react';
import MovieCard from './movieCard';
import { addPopular } from '../../services/Movies/movies.service.js'; 

export default function PopularMovie() {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        addPopular()
        .then((data) => {
          setMovies(data.results);
        })
    }, [setMovies])

    return (
        <>
            <h2 className="title">Popular Movies</h2>
            <div className="container">
                <div className="scrolling-wrapper">
                    {movies.filter(movie => movie.poster_path).map(movie => (
                    <MovieCard movie={movie} key={movie.id} />
                    ))}
                </div>
            </div>
        </>
    )
}