import React, { useEffect, useState } from "react";
import back_arrow_icon from "../../assets/back_arrow_icon.png";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import TitleDetails from "@/components/MovieDetails/TitleDetails";
import Navbar from "@/components/Navbar/Navbar";

const Player = () => {
  const { id, type } = useParams();
  const navigate = useNavigate();
  const [apiVideo, setVideo] = useState("");
  const [apiData, setApiData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/${type}/${id}?api_key=${import.meta.env.VITE_TMDB_KEY}`,
        );
        const result = await res.json();
        setApiData(result);
      } catch (error) {
        toast.error(error);
      }
    };
    fetchData();
  }, [id, type]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/${type}/${id}/videos?api_key=${import.meta.env.VITE_TMDB_KEY}`,
    )
      .then((res) => res.json())
      .then((res) => {
        const trailer = res.results.find(
          (vid) => vid.type === "Trailer" && vid.site === "YouTube",
        );
        if (trailer) {
          setVideo(trailer);
        } else {
          console.log("No trailer found");
        }
      })
      .catch((err) => toast.error(err));
  }, [id, type]);

  return (
    <>
  <Navbar />

  <div className="bg-black min-h-screen pt-16 px-4 sm:px-6 md:px-12 lg:px-20">
    
    {/* COMMON WIDTH CONTAINER */}
    <div className="max-w-5xl mx-auto">

      {/* Back Button */}

      <div className="mb-4 cursor-pointer w-fit" onClick={() => navigate(-1)}>
        <img src={back_arrow_icon} alt="back" className="w-9 sm:w-9" />
      </div>
      {/* Video */}
      <div className="w-full aspect-video">
        <iframe
          src={`https://www.youtube.com/embed/${apiVideo?.key}`}
          title="trailer"
          frameBorder="0"
          allowFullScreen
          className="w-full h-full rounded-xl"
        ></iframe>
      </div>
      <TitleDetails data={apiData} />

    </div>

  </div>
</>
  );
};

export default Player;
