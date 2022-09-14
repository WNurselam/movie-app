import React from 'react'
import { Link } from 'react-router-dom';
import './style.scss'

const Actor = ({actor}) => {
  return (
    <div className="actor-page">
          <div key={actor.id} className="actor">
            <Link to={`/person/${actor.id}`}>
            <img
              src={`http://image.tmdb.org/t/p/w185/${actor && actor.profile_path}`}
              alt={actor.id}
            />
            </Link>
            <div>
              <div>
                <p>{actor && actor.original_name}</p>
              </div>
              {/* <div className="actor-detail">
                <span>Character Name</span>
                <p>{actor && actor.character}</p>
              </div>
              <div className="actor-detail">
                <span>Popularity</span>
                <p>{actor&&actor.popularity}</p>
              </div> */}
            </div>
          </div>
      </div>
  )
}

export default Actor;