import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";

const MovieDetails = () => {
  const [movieDetail, setMovieDetail] = useState();
  const { id } = useParams();

  useEffect(() => {
    const fetchApi = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}?api_key=d5e4ad52cc9c619d62c0ecec694e13c9&language=en-US`
        );
        setMovieDetail(response.data);
        console.log(response.data);
        //console.log("here", movieDetail);
      } catch (error) {
        console.log("Data Error", error);
      }
    };
    fetchApi();
  }, []);

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
    </div>
  );
};

export default MovieDetails;
