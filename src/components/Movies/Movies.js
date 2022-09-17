import React from "react";
import { Link } from "react-router-dom";
import './style.scss';
import { useData } from "../../context/data";

const Movies = ({ movie }) => {
  const {addToFavorite } = useData();

  return (
    <div className="card">
      <img
        className="movie-img"
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt="not"
      />

      <div className="card-context">
        <h1>{movie ? movie.title :"Not Movie"}</h1>
        <div className="avarage">
          <div>{movie && movie.vote_average}</div>
          <i className="bx bxs-star"></i>
        </div>
      </div>
      <div className="card-icons">
        <ul>
          <li>
            <i
              onClick={() => addToFavorite(movie)}
              className="bx bxs-heart"
            ></i>
          </li>
          <li>
            <Link to={`/movie/${movie.id}`}>
              <i className="bx bx-slideshow"></i>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Movies;


