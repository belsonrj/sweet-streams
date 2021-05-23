import React, { useState } from "react";
import Button from '@material-ui/core/Button';
import { popularGenres } from "../../services/Genres/genres.service";
import { genres } from "../../services/Genres/genres.json";
import MovieCard from "../Movies/movieCard";

export default function GenreContainer() {
      
    const [movies, setMovies] = useState([]);

    function getMovies(genreId) {
        popularGenres(genreId)
        .then((data) => {
            setMovies(data.results)
        })
        return movies
    }

    
    return(
        <>
        <div className="container">
            {genres.map(genre => (
                <Button 
                color='primary'
                onClick={() => getMovies(genre.id).then}
                >
                    {genre.name}
                </Button>
            ))}
        </div>
        {(movies) ?
            <div className="container">
                <div className="scrolling-wrapper">
                    {movies.filter(movie => movie.poster_path).map(movie => (
                        <MovieCard movie={movie} key={movie.id} />
                    ))}
                </div>
            </div>
        :
        null
        }
       </>
    )
}