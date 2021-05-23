/*
export const addGenres = async () => {

    return fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=060345676ea883c7b9817d2e10cef7a8&language=en-US`).then(
        (res) => {
            console.log(res)
            return res.json();
        }
    );
}
*/

export const popularGenres = async (genreId) => {

    return fetch(`https://api.themoviedb.org/3/discover/movie?api_key=060345676ea883c7b9817d2e10cef7a8&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${genreId}`)
    .then(
        (res) => {
            console.log(res)
            return res.json();
        }
    );
}