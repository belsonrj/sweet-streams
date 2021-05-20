/*
import React, { useState, useContext, createContext } from "react";

import {
  popularRequest,
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

  return (
    <MoviesContext.Provider
      value={{
        movies,
        isLoading,
        error,
      }}
    >
      {children}
    </MoviesContext.Provider>
  );
};
*/