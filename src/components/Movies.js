import React from "react";
import { Link } from "react-router-dom";


const Movies = ({ movie }) => {
  return (
    <div className="card">
      <Link to={`/movie/${movie.id}`}>
        <img
          className="movie-img"
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt="not"
        />
      </Link>

      <div className="card-context">
        <div className="dark-bg"></div>
        <h2>{movie && movie.title}</h2>
        <div className="avarage">
        <div>{movie && movie.vote_average}</div>
        <i className='bx bxs-star'></i>
        </div>
      </div>
      <div className="card-icons">
        <ul>
          <li>
            <i className="bx bxs-heart"></i>
          </li>
          <li>
            <i className="bx bx-slideshow"></i>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Movies;

/*
 <div className="movieApp">
    
      <img className="movie-img" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="not" />
      </Link>
      <h4>{movie && movie.title}</h4>
    
    </div>
*/
