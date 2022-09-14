import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useData } from "../../context/data";
import "./style.scss";

const Input = () => {
  const { setMovies, movies } = useData();
  const [search, setSearch] = useState("");

  const handleOnChange = (e) => {
    setSearch(e.target.value);
  };


  const searchMovie = (e) => {
    e.preventDefault();
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=d5e4ad52cc9c619d62c0ecec694e13c9&language=en-US&page=1&include_adult=false&query=${search}`
      )
      .then((res) => setMovies(res.data.results));
    setSearch("");
  };

  return (
    <div className="input-page">
      <div className="input-container">
        <div className="title-container">
          <div className="input-header">Welcome to Movie Paradise</div>
          <p>
            Millions of movies, TV shows and people to discover. Explore now.
          </p>
        </div>

        <div className="search">
          <form onSubmit={searchMovie}>
            <input
              className="search"
              type="search"
              placeholder="Search movie titles"
              value={search}
              onChange={handleOnChange}
            />
            <button className="search-button" onClick={searchMovie}>
              Search
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Input;
