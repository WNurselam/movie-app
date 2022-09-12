import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";
import Actor from "../components/Actor/Actor";
import ReactPlayer from "react-player";

const MovieDetails = () => {
  const [movieDetail, setMovieDetail] = useState();
  const [actors, setActors] = useState([]);
  const { id } = useParams();

  const [movieTrailer, setMovieTrailer] = useState({});
  const [movieVideos, setMovieVideos] = useState([]);
  const [url, setUrl] = useState("");

  useEffect(() => {
    fetchApi();
    fetchActor();
    fetchMovieTrailer();
  }, [id]);

  const fetchApi = async () => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=d5e4ad52cc9c619d62c0ecec694e13c9`
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
      setActors(res.data.cast.slice(0, 5));
      //console.log(actors);
    } catch (error) {
      console.log("Data Error", error);
    }
  };

  async function fetchMovieTrailer() {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?api_key=d5e4ad52cc9c619d62c0ecec694e13c9`
    );
    const data = await response.json();

    const trailer = data.results.filter((video) => {
      return video.type === "Trailer";
    });

    setMovieVideos(data.results);
    setUrl(data.results[0].key);
    setMovieTrailer(trailer[0]);
  }

 

  return (
    <div className="Movie-detail">
      <div  className="detail-wrapper">
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

        <div className="video-player">
          <ReactPlayer
            className="react-player"
            url={`https://www.youtube.com/watch?v=${url}`}
          />
          <div className="player-btns">
            {movieVideos.map((video, index) => (
              <div
                key={video.id}
                url={video.key}
                className={`player-btn ${index === 0 ? "active" : ""}`}
              >
              </div>
            ))}
          </div>
        </div>
        </div>
       
       <div className="movie-actorD">
      {actors.length > 0 &&
        actors.map((actor) => <Actor key={actor.id} actor={actor} />)}
        </div>
    </div>
  );
};

export default MovieDetails;
