import React, { useState } from 'react';
import MovieCard from "../Movies/movieCard";

export default function SearchMovies() {

    const [query, setQuery] = useState('');
    const [movies, setMovies] = useState([]);

    const searchMovies = async (e) => {
        e.preventDefault();

        const url = `https://api.themoviedb.org/3/search/movie?api_key=060345676ea883c7b9817d2e10cef7a8&language=en-US&query=${query}&page=1&include_adult=false`;
        
        try {
            const res = await fetch(url);
            const data = await res.json();
            setMovies(data.results);
            //console.log(data.results)
        } catch(err) {
            console.error(err)
        }
    }

    return (
        <>
            <h1 className="title">Search Movies</h1>
            <form className="form" onSubmit={searchMovies}>
                <label className="label" htmlFor="query" />
                <input className="input" type="text" name="query"
                    placeholder="Search Movie Name" 
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    />
                <button className="button" type="submit">Search</button>
            </form>
            <div className="card-list">
                {movies.filter(movie => movie.poster_path).map(movie => (
                    <MovieCard movie={movie} key={movie.id} />
                ))}
            </div>
        </>
    )
}