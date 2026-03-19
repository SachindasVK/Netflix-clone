import React, { useEffect, useState } from "react";
import "./Player.css";
import back_arrow_icon from "../../assets/back_arrow_icon.png";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const Player = () => {
  const { id, type } = useParams();
  const navigate = useNavigate();
  const [apiData, setApiDAta] = useState({
    name: "",
    key: "",
    published_at: "",
    type: "",
    overview: "",
    vote_average: "",
  });


  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/${type}/${id}/videos?api_key=${import.meta.env.VITE_TMDB_KEY}`)
      .then((res) => res.json())
      .then((res) => {
        const trailer = res.results.find((vid) => vid.type === "Trailer" && vid.site === "YouTube");
          if(trailer) {
            setApiDAta(trailer)
          } else {
            console.log("No trailer found")
          }
      })
      .catch((err) => toast.error(err));
  }, [id,type]);

  return (
    <div className="player">
      <img
        onClick={() => {
          navigate(-1);
        }}
        src={back_arrow_icon}
        alt=""
      />
      <iframe
        width="90%"
        height="90%"
        src={`https://www.youtube.com/embed/${apiData.key}`}
        title="trailer"
        frameBorder="0"
        allowFullScreen
      ></iframe>
      <div className="player-info">
        <p>{apiData?.published_at?.slice(0, 10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
      </div>
    </div>
  );
};

export default Player;
