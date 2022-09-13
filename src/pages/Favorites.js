import React from "react";
import { useData } from "../context/data";
import { Link } from "react-router-dom";
import './Favorite.css'

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

  console.log(favorite);
  return (
    <div className="wrapper-favorite" > 
     {
      favorite ? favorite.map((movie) => {
        return <div className="card">
         <img
        className="movie-img"
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt="not"
      />

      <div className="card-context">
        <div className="dark-bg"></div>
        <h2>{movie && movie.title}</h2>
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
      }):"null"
     }
      
    </div>
  );
};

export default Favorites;
