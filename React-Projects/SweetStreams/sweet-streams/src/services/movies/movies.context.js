import React, { useState, useContext, createContext, useEffect } from "react";
import { addProviders } from "./movies.service";

import {
  popularRequest,
  movieDetails,
} from "./restaurants.service";

export const MoviesContext = createContext();

export const MoviesContextProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const retrieveMovies = (mov) => {
    setIsLoading(true);
    setMovies([]);

    popularRequest(mov)
      .then((results) => {
        setError(null);
        setIsLoading(false);
        setMovies(results);
      })
      .catch((err) => {
        setMovies([]);
        setIsLoading(false);
        setError(err);
      });
  };

  useEffect(() => {
    addProviders()
      .then(res => res.json())
      .then(
        res => {
          setProviders(prevState => ({
            ...prevState,
            isLoaded: true,
            response1: res
          }));
        },
        error => {
          setProviders(prevState => ({
            ...prevState,
            isLoaded: false,
            error: error
          }));
        }
      );
    movieDetails()
      .then(res => res.json())
      .then(
        res => {
          setDetails(prevState => ({
            ...prevState,
            response2: res,
            isLoaded2: true
          }));
        },
        error => {
          setDetails(prevState => ({
            ...prevState,
            error: error
          }));
        }
      );
  }, []);

  return (
    <MoviesContext.Provider
      value={{
        providers
        details,
        isLoading,
        error,
      }}
    >
      {children}
    </MoviesContext.Provider>
  );
};