import { apiKey } from "../../utils/env";

export const addPopular = async () => {

    return fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`).then(
        (res) => {
            return res.json();
        }
    );
}

export const searchMovies = async (e, query) => {
    e.preventDefault();

    const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${query}&page=1&include_adult=false`;
    
    try {
        const res = await fetch(url);
        const data = await res.json();
        return (data.results);
    } catch(err) {
        console.error(err)
    }
}

export const addProviders = async (movieId) => {

    return fetch(`https://api.themoviedb.org/3/movie/${movieId}/watch/providers?api_key=${apiKey}`).then(
        (res) => {
            console.log(res)
          return res.json();
        }
      );
}

export const movieDetails = async (movieId) => {
    
    return fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&language=en-US`).then(
        (res) => {
            console.log(res)
          return res.json();
        }
      );
}