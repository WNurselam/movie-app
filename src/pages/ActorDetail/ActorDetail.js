import React from "react";
import { useParams } from "react-router";
import { useState, useEffect } from "react";
import axios from "axios";
import "./ActorDetail.scss";
import { Link } from "react-router-dom";
import Movies from "../../components/Movies/Movies";
import { useData } from "../../context/data";
const ActorDetail = () => {
  const { id } = useParams([]);
  const [detailActor, setDetailActor] = useState([]);
  const [films, setFilms] = useState([]);

  const { addToFavorite } = useData();

  useEffect(() => {
    fetchActor();
    fetchActorMovie();
  }, [id]);

  const fetchActor = async () => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/person/${id}?api_key=d5e4ad52cc9c619d62c0ecec694e13c9`
      );
      setDetailActor(response.data);
      //console.log(response.data);
    } catch (error) {
      console.log("Data Error", error);
    }
  };

  const fetchActorMovie = async () => {
    try {
      const response = await axios.get(
        `
        https://api.themoviedb.org/3/person/${id}/movie_credits?api_key=d5e4ad52cc9c619d62c0ecec694e13c9`
      );
      setFilms(response.data.cast.slice(0,10));
      //console.log("Accc", response.data.cast);
    } catch (error) {
      console.log("Data Error", error);
    }
  };

  //console.log("here", detailActor);
  return (
    <div className="actor">
      <div className="actor-profile">
        <img
          src={`http://image.tmdb.org/t/p/w185/${
            detailActor && detailActor.profile_path
          }`}
          alt=""
        />
        <div className="actor-details">
          <h2>{detailActor && detailActor.name}</h2>
          <div>
            <span>Department:</span>{" "}
            {detailActor && detailActor.known_for_department}
          </div>
          <div>
            <span>Place of Birth:</span>{" "}
            {detailActor && detailActor.place_of_birth}
          </div>
          <div>
            <span>Birthday:</span> {detailActor && detailActor.birthday}
          </div>
        </div>
      </div>
      <div className="bio-container">
        <h3>Biography</h3>
        <p>{detailActor && detailActor.biography}</p>
      </div>

      <div className="actor-movies">
        {films &&
          films.map((film) => (
            <div className="card" key={film.id}>
              <img
                className="movie-img"
                src={`https://image.tmdb.org/t/p/w500${film.poster_path}`}
                alt="not"
              />
              <div className="card-context">
                <h1>{film && film.title}</h1>
                <div className="avarage">
                  <div>{film && film.vote_average}</div>
                  <i className="bx bxs-star"></i>
                </div>
              </div>
              <div className="card-icons">
                <ul>
                  <li>
                    <i
                      onClick={() => addToFavorite(film)}
                      className="bx bxs-heart"
                    ></i>
                  </li>
                  <li>
                    <Link to={`/movie/${film.id}`}>
                      <i className="bx bx-slideshow"></i>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ActorDetail;
