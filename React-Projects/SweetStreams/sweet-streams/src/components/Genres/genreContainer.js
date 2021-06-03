import React, { useState } from "react";
import styled from "styled-components";
import { popularGenres } from "../../services/Genres/genres.service";
import { genres } from "../../services/Genres/genres.json";
import MovieCard from "../Movies/movieCard";


const Button = styled.button`
  background-color: black;
  color: white;
  font-size: 15px;
  padding: 5px 30px;
  border-radius: 8px;
  margin: 10px 0px;
  cursor: pointer;
`;

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
            <div className="scrolling-wrapper">
            {genres.map(genre => (
                <Button 
                color='primary'
                onClick={() => getMovies(genre.id).then}
                >
                    {genre.name}
                </Button>
            ))}
            </div>
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