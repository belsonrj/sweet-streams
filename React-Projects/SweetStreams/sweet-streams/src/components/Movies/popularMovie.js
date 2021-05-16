import React, { useEffect, useState } from "react";
import MovieCard from "./movieCard";

export default function PopularMovie() {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        addPopular();
    }, [setMovies])

    const addPopular = async () => {

        const url = `https://api.themoviedb.org/3/movie/popular?api_key=060345676ea883c7b9817d2e10cef7a8&language=en-US&page=1`;

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
            <h2 className="title">Popular Movie Titles</h2>
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