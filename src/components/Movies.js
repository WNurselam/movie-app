import React from "react";
import { Link } from "react-router-dom";



const Movies = ({ movie }) => {
  return (
    <div className="movieApp">
       <Link to="details"></Link>
      <img className="movie-img" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="not" />
      <h4>{movie.title}</h4>
      <div className="avarage">{movie.vote_average}</div>
    </div>
  );
};

export default Movies;
