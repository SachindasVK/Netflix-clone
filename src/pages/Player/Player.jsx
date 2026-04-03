import React, { useEffect, useState } from "react";
import back_arrow_icon from "../../assets/arrowback.svg";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import TitleDetails from "@/components/MovieDetails/TitleDetails";
import Navbar from "@/components/Navbar/Navbar";
import LandFooter from "@/components/LandFooter/LandFooter";

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
          {/* Video */}
          <div className="w-full aspect-video">
            <div
              className="mb-4 cursor-pointer w-fit relative group"
              onClick={() => navigate(-1)}
            >
              <img
                src={back_arrow_icon}
                alt="back"
                className="w-7 sm:w-8 md:w-9 h-auto"
              />

              <span className="absolute mb-2 left-1/2 -translate-x-1/2 whitespace-nowrap bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition">
                Go Back
              </span>
            </div>
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
        <LandFooter />
      </div>
    </>
  );
};

export default Player;
