import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";

const Actor = ({ actor }) => {
  return (
    <div className="card">
      <div key={actor.id} className="actor">
       
          <img
            src={`http://image.tmdb.org/t/p/w185/${
              actor && actor.profile_path
            }`}
            alt="No imagee"
          />
       
        <div className="card-context">
          <div >
            <span>{actor && actor.original_name}</span>
          </div>
          <div className="actor-detail">
            <p>{actor && actor.character}</p>
          </div>
          <div className="avarage">
            <span>Popularity : </span>
            <div>{actor && actor.popularity}</div>
          </div>
        </div>
        <div className="card-icons">
          <ul>
            <li>
            <Link to={`/person/${actor.id}`}>
              <i class="bx bxs-user-detail"></i>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Actor;
