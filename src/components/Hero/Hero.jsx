import React, { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import play_icon from "../../assets/play_icon.png";
import info_icon from "../../assets/info_icon.png";
import Netflix from "../../assets/Netflix.svg";
import { toast } from "react-toastify";
import "./Hero.css";
import addWishlist from "../../assets/addWishlist.svg";
import addedWishlist from "../../assets/addedWishlist.svg";
import { WishlistContext } from "../context/WishlistContext";

const Hero = ({ sendData }) => {
  const { wishlist, addToWishlist, removeFromWishlist } =
    useContext(WishlistContext);
  const navigate = useNavigate();
  const [apiData, setApiData] = useState();
  const location = useLocation();
  const isDetails = location.pathname.includes("/details");
  const tvShows = location.pathname.includes("/tv-shows");
  const newPopular = location.pathname.includes("/new-popular");
  const { type, id } = useParams();
  const isAdded = wishlist.some((item) => item.id === apiData?.id);

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
        } else if (tvShows) {
          url = `https://api.themoviedb.org/3/tv/top_rated?api_key=${import.meta.env.VITE_TMDB_KEY}`;
        } else if (newPopular) {
          url = `https://api.themoviedb.org/3/movie/upcoming?api_key=${import.meta.env.VITE_TMDB_KEY}`;
        } else {
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

  const handleWishlist = () => {
    if (!apiData) return;

    if (isAdded) {
      removeFromWishlist(apiData.id);
      toast.info("Removed from wishlist");
    } else {
      addToWishlist(apiData);
      toast.success("Added to wishlist");
    }
  };

  return (
    <>
      <div className="hero rounded-4xl">
        <div className="hero-img-wrapper px-10 pt-20">
          {apiData?.backdrop_path && (
            <img
              src={`https://image.tmdb.org/t/p/original${apiData.backdrop_path}`}
              alt="hero"
              className="banner-img bg-white/10 backdrop-blur-lg border border-white/20 rounded-4xl p-0.5"
            />
          )}
        </div>
      </div>

      <div className="hero-caption">
        <div className="flex items-center gap-1 sm:gap-1 md:gap-1 lg:gap-1 mb-2 sm:mb-3 md:mb-4 lg:mb-5">
          <img src={Netflix} alt="" className="caption-img" />{" "}
          <h1 className="netflix-series font-semibold">S E R I E S</h1>
        </div>
        {apiData?.title && (
          <div className="Title text-1xl sm:text-2xl md:text-4xl lg:text-5xl font-bold pb-2 sm:pb-3 md:pb-4">
            {apiData?.title}
          </div>
        )}
        {apiData?.overview && <p className="overview">{apiData.overview}</p>}

        <div className="hero-btns pt-1">
          <button
            onClick={() => navigate(`/player/movie/${apiData.id}`)}
            className="btn"
          >
            <img src={play_icon} alt="" />
            Play
          </button>
          {!isDetails ? (
            <button
              onClick={() => navigate(`/details/movie/${apiData.id}`)}
              className="btn dark-btn"
            >
              <img src={info_icon} alt="" />
              More Info
            </button>
          ) : (
            <button onClick={handleWishlist} className="btn dark-btn">
              <img src={isAdded ? addedWishlist : addWishlist} alt="" />
              {isAdded ? "Remove" : "Wishlist"}
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default Hero;
