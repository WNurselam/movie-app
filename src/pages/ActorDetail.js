import React from "react";
import { useParams } from "react-router";
import { useState, useEffect } from "react";
import axios from "axios";

const ActorDetail = () => {
  const { id } = useParams([]);
  const [detailActor, setDetailActor] = useState([]);

  useEffect(() => {
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

    fetchActor();
  }, [id]);

  console.log("here", detailActor);
  return (
    <div className="actor">
      <div>{detailActor && detailActor.name}</div>
      <div>{detailActor && detailActor.place_of_birth}</div>
      <div>{detailActor && detailActor.birthday}</div>
      <img src={`http://image.tmdb.org/t/p/w185/${detailActor && detailActor.profile_path}`} alt="" />
      <div>{detailActor && detailActor.biography}</div>
    </div>
  );
};

export default ActorDetail;
