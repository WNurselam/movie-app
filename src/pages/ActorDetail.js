import React from "react";
import { useParams } from "react-router";
import { useState, useEffect } from "react";
import axios from "axios";
import './ActorDetail.scss';

const ActorDetail = () => {
  const { id } = useParams([]);
  const [detailActor, setDetailActor] = useState([]);
  const [actor,setActor] = useState([]);

  useEffect(() => {
    fetchActor();
    fetchActorMovie();
  }, [id]);

  const fetchActor = async () => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/person/${id}?api_key=d5e4ad52cc9c619d62c0ecec694e13c9`
      );
      //setDetailActor(response.data);
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
      setActor(response.data);
      console.log(response.data);
    } catch (error) {
      console.log("Data Error", error);
    }

  }

  //console.log("here", detailActor);
  return (
    <div className="actor">
      <div className="actor-profile">
        <img
          src={`http://image.tmdb.org/t/p/w185/${detailActor && detailActor.profile_path
            }`}
          alt=""
        />
        <div className="actor-details">
          <h2>{detailActor && detailActor.name}</h2>
          <div><span>Department:</span>   {detailActor && detailActor.known_for_department}</div>
          <div><span>Place of Birth:</span>   {detailActor && detailActor.place_of_birth}</div>
          <div><span>Birthday:</span>   {detailActor && detailActor.birthday}</div>
        </div>
      </div>
      <div className="bio-container">

        <h3>Biography</h3>
        <p>{detailActor && detailActor.biography}</p>
      </div>
    </div>
  );
};

export default ActorDetail;
