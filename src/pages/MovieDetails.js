import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";
import { Link } from "react-router-dom";

import Actor from "../components/Actor/Actor";
import ReactPlayer from "react-player";
import './MovieDetail.css';

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
      setActors(res.data.cast.slice(0, 10));
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
  const vote = movieDetail && movieDetail.vote_average;
  return (
    <div className="movie-detail">
      <div className="detail-wrapper">
        <div className="detail-text">
          <div className="title">
            {movieDetail && movieDetail.original_title}
            <span>{vote}</span>
          </div>
          <div className="date">Releasing {movieDetail && movieDetail.release_date}</div>

          <div className="trailer">
            <a href={`https://www.youtube.com/watch?v=${url}`} target='_blank' rel="noreferrer">
              <i class="fa-sharp fa-solid fa-circle-play"></i> <span>Watch the trailer</span>
            </a>
          </div>
        </div>

        <img
          src={`https://image.tmdb.org/t/p/original${movieDetail && movieDetail.backdrop_path
            }`}
          alt="not"
        />
      </div>
      <div className="about-movie">
        <h3>Overview</h3>
        <p>
          {movieDetail && movieDetail.overview}</p>
        <li>{movieDetail && movieDetail.popularity}</li>


      </div>
      <div className="actor-container">
        <h3>Actors</h3>
        <div className="movie-actor">

          {actors.length > 0 &&
            actors.map((actor) => <Actor key={actor.id} actor={actor} />)}
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;

