import { apiKey } from "../../utils/env";

export const popularGenres = async (genreId) => {

    return fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${genreId}`)
    .then(
        (res) => {
            console.log(res)
            return res.json();
        }
    );
}