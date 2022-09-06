import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useData } from "../context/data";
import Movies from './Movies'

const MovieList = () => {
  
  const {movies,setMovies,setLoading} = useData();

  useEffect(() => {
    const fetchApi = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/popular?api_key=d5e4ad52cc9c619d62c0ecec694e13c9&language=en-US&page=1`
        );
        setMovies(response.data.results);
        setLoading(false);
        console.log(response.data.results);
        console.log("here", movies);
      } catch (error) {
        console.log("Data Error", error);
      }
    };
    fetchApi();
  }, []);

  return (
    <div className="movie-container">
      {
        movies.length > 0 && movies.map((movie) =>(
          <Movies movie={movie} key={movie.id}/>
        ))
      }
    </div>
  );
};
export default MovieList;
