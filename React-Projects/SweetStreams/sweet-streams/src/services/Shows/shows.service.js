import { apiKey } from "../../utils/env";

export const addPopular = async () => {

  return fetch(`https://api.themoviedb.org/3/tv/popular?api_key=${apiKey}&language=en-US&page=1`).then(
      (res) => {
          return res.json();
      }
  );
}

export const addProviders = async (showId) => {

    return fetch(`https://api.themoviedb.org/3/tv/${showId}/watch/providers?api_key=${apiKey}`).then(
        (res) => {
            console.log(res)
          return res.json();
        }
      );
}
