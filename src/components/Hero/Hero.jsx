import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import play_icon from "../../assets/play_icon.png";
import info_icon from "../../assets/info_icon.png";
import Netflix from "../../assets/Netflix.svg";
import { toast } from "react-toastify";
import './Hero.css'

const Hero = ({sendData}) => {
  const navigate = useNavigate();
  const [apiData, setApiData] = useState();
  const location = useLocation();
  const isDetails = location.pathname.includes("/details");
  const [showVideo, setShowVideo] = useState(false);
  const [videoKey, setVideoKey] = useState(null);
  const { type, id } = useParams();
  
    useEffect(() => {
    if (apiData && typeof sendData === "function") {
      sendData(apiData);
    }
  }, [apiData, sendData]);
  
  useEffect(() => {
    
  const fetchData = async () => {
    try {
      let url;

      if (isDetails && type && id) {
        // DETAILS PAGE
        url = `https://api.themoviedb.org/3/${type}/${id}?api_key=${import.meta.env.VITE_TMDB_KEY}`;
      } else {
        // HOME PAGE
        url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${import.meta.env.VITE_TMDB_KEY}`;
      }

      const res = await fetch(url);
      const result = await res.json();

      if (isDetails) {
        setApiData(result);
      } else {
        const randomMovie =
          result.results[Math.floor(Math.random() * result.results.length)];
        setApiData(randomMovie);
      }
    } catch (error) {
      toast.error(error);
    }
  };

  fetchData();

}, [isDetails, type, id]);

useEffect(() => {
  if (!isDetails || !videoKey) return;

  const timer = setTimeout(() => {
    setShowVideo(true);
  }, 5000);

  return () => clearTimeout(timer);
}, [videoKey, isDetails]);

useEffect(() => {
  if (!isDetails || !type || !id) return;

  const fetchVideo = async () => {
    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/${type}/${id}/videos?api_key=${import.meta.env.VITE_TMDB_KEY}`
      );
      const data = await res.json();
      const trailer = data.results.find(
        (vid) => vid.type === "Trailer" && vid.site === "YouTube"
      );

      if (trailer) setVideoKey(trailer.key);
    } catch (error) {
      toast.error(error);
    }
  };

  fetchVideo();
}, [isDetails, type, id]);
  return (
    <>
      <div className="hero rounded-4xl">
        <div className="hero-img-wrapper px-12 pt-20">
           {!showVideo && apiData?.backdrop_path && (
              <img
                src={`https://image.tmdb.org/t/p/original${apiData.backdrop_path}`}
                alt="hero"
                className="banner-img bg-white/10 backdrop-blur-lg border border-white/20 rounded-4xl p-0.5"
              />
            )}
            {isDetails && showVideo && videoKey && (
              <iframe
                className="banner-img-video rounded-4xl"
                src={`https://www.youtube.com/embed/${videoKey}?autoplay=1&mute=1&controls=0&loop=1&playlist=${videoKey}`}
                title="trailer"
                allow="autoplay"
              />
            )}
        </div>
      </div>

      <div className="hero-caption">
        <div className="flex items-center gap-3 mb-5">
          <img src={Netflix} alt="" className="caption-img" />{" "}
          <h1 className="font-semibold">S E R I E S</h1>
        </div>
        {apiData?.original_title && (
          <div className="text-5xl font-bold pb-4">
            {apiData?.original_title}
          </div>
        )}
        {!isDetails && apiData?.overview && <p>{apiData.overview}</p>}
        {!isDetails && (
          <div className="hero-btns pt-1">
            <button
              onClick={() => navigate(`/player/movie/${apiData.id}`)}
              className="btn"
            >
              <img src={play_icon} alt="" />
              Play
            </button>
            <button
              onClick={() => navigate(`/details/movie/${apiData.id}`)}
              className="btn dark-btn"
            >
              <img src={info_icon} alt="" />
              More Info
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Hero;
