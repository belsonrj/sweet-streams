export const addPopular = async () => {

  return fetch(`https://api.themoviedb.org/3/tv/popular?api_key=060345676ea883c7b9817d2e10cef7a8&language=en-US&page=1`).then(
      (res) => {
          return res.json();
      }
  );
}

export const addProviders = async (showId) => {

    return fetch(`https://api.themoviedb.org/3/tv/${showId}/watch/providers?api_key=060345676ea883c7b9817d2e10cef7a8`).then(
        (res) => {
            console.log(res)
          return res.json();
        }
      );
}
