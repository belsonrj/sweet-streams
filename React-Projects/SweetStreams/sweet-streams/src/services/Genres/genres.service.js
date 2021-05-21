export const addGenres = async () => {

    return fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=060345676ea883c7b9817d2e10cef7a8&language=en-US`).then(
        (res) => {
            console.log(res)
            return res.json();
        }
    );
}