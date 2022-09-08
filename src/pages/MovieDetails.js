import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";

const MovieDetails = ({ match }) => {
  const [movieDetail, setMovieDetail] = useState();
  const [actors, setActors] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetchApi();
    fetchActor();
  }, [id]);

  const fetchApi = async () => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=d5e4ad52cc9c619d62c0ecec694e13c9&language=en-US`
      );
      setMovieDetail(response.data);
      //console.log(response.data);
      //console.log("here", movieDetail);
    } catch (error) {
      console.log("Data Error", error);
    }
  };

  const fetchActor = async () => {
    try {
      const res = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}/credits?api_key=d5e4ad52cc9c619d62c0ecec694e13c9`
      );
      setActors(res.data.cast.slice(0,6));
      console.log(res.data);
    } catch (error) {
      console.log("Data Error", error);
    }
  };

  return (
    <div className="Movie-detail">
      <img
        src={`https://image.tmdb.org/t/p/w200${
          movieDetail && movieDetail.poster_path
        }`}
        alt="not"
      />
      <ul className="about-movie">
        <li>{movieDetail && movieDetail.original_title}</li>
        <li>{movieDetail && movieDetail.original_language}</li>
        <li>({movieDetail && movieDetail.release_date})</li>
        <li>{movieDetail && movieDetail.overview}</li>
        <li>{movieDetail && movieDetail.popularity}</li>
      </ul>

      <div className="actor-page">
        {actors.map((actor) => (
          <div key={actor.id} className="actor">
            <img
              src={`http://image.tmdb.org/t/p/w185/${actor.profile_path}`}
              alt={movieDetail.title}
            />
            <div>
              <div className="actor-detail">
                <span>Original Name</span>
                <p>{actor.original_name}</p>
              </div>
              <div className="actor-detail">
                <span>Character Name</span>
                <p>{actor.character}</p>
              </div>
              <div className="actor-detail">
                <span>Popularity</span>
                <p>{actor.popularity}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieDetails;
