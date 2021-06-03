export const addCredits = async (person_id) => {

    return fetch(`https://api.themoviedb.org/3/person/${person_id}/movie_credits?api_key=060345676ea883c7b9817d2e10cef7a8&language=en-US`).then(
        (res) => {
            console.log(res)
          return res.json();
        }
      );
}