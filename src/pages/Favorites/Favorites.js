import React from "react";
import { useData } from "../../context/data";
import { Link } from "react-router-dom";
import './Favorite.scss';


const Favorites = () => {
  const { favorite, setFavorite } = useData();
  
  const removeFavorite = (movie) => {
    const remove = [...favorite];
    remove.forEach((item,index)=>{
      if(item.id === movie.id){
        remove.splice(index,1);
      }
    })
    setFavorite(remove)
  }

  //console.log(favorite);
  return (
    <div className="favorite-container" > 
     {
     favorite && favorite.length > 0 ? favorite.map((movie) => (
        <div className="card">
         <img
        className="movie-img"
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt="not"
      />

      <div className="card-context">
        <div className="dark-bg"></div>
        <h1>{movie && movie.title}</h1>
        <div className="avarage">
          <div>{movie && movie.vote_average}</div>
          <i className="bx bxs-star"></i>
        </div>
      </div>
      <div className="card-icons">
        <ul>
          <li>
          <i onClick={() => removeFavorite(movie)}  className="bx bxs-heart"></i>
          </li>
          <li>
            <Link to={`/movie/${movie.id}`}>
              <i className="bx bx-slideshow"></i>
            </Link>
          </li>
        </ul>
      </div>
        </div>
      )): <div className="not-favorite">You haven't added any movies to your favorites yet.</div> 
     }   
    </div>
  );
};

export default Favorites;
