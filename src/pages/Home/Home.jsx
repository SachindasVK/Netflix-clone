import React, { useEffect, useState } from "react";
import "./Home.css";
import play_icon from "../../assets/play_icon.png";
import info_icon from "../../assets/info_icon.png";
import Navbar from "../../components/Navbar/Navbar";
import Netflix from "../../assets/Netflix.svg";
import TrendingNow from "@/components/TrendingNow/TrendingNow";
import LandFooter from "@/components/LandFooter/LandFooter";

const HomeCompo = () => {
  const [apiData, setApiData] = useState();
  const options = { method: "GET", headers: { accept: "application/json" } };
  useEffect(() => {
    fetch("https://api.themoviedb.org/3/movie/now_playing", options, {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: "Bearer YOUR_TOKEN",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        const randomMovie =
          res.results[Math.floor(Math.random() * res.results.length)];
        setApiData(randomMovie);
      })
      .catch((err) => console.error(err));
  }, []);
  return (
    <>
      <Navbar />
      <div className="home">
        <div className="hero rounded-4xl">
          <div className="hero-img-wrapper px-12 pt-20">
            <img
              src={
                apiData?.backdrop_path
                  ? `https://image.tmdb.org/t/p/original${apiData.backdrop_path}`
                  : ""
              }
              alt=""
              className="banner-img bg-white/10 backdrop-blur-lg border border-white/20 rounded-4xl p-0.5"
            />
          </div>
        </div>

        <div className="hero-caption">
          <div className="flex items-center gap-3 mb-5">
            <img src={Netflix} alt="" className="caption-img" />{" "}
            <h1 className="font-semibold">S E R I E S</h1>
          </div>
          <div className="text-6xl font-bold pb-4">
            {apiData?.original_title ? apiData.original_title : ""}
          </div>
          <p>{apiData?.overview ? apiData.overview : ""}</p>
          <div className="hero-btns pt-1">
            <button className="btn">
              <img src={play_icon} alt="" />
              Play
            </button>
            <button className="btn dark-btn">
              <img src={info_icon} alt="" />
              More Info
            </button>
          </div>
        </div>

        <div>
          <TrendingNow
            type={"movie"}
            category={"now_playing"}
            title={"Your Next Watch"}
          />
          <TrendingNow type={"movie"} category={"popular"} title={"Popular Movies"} />
          <TrendingNow type={"trending"} category={"all"} day={"day"} title={"Trending Now"} />
          <TrendingNow type={"movie"} category={"top_rated"} title={"Top Rated"} />
          <TrendingNow type={"movie"} category={"upcoming"} title={"Upcoming"} />
          <TrendingNow type={"trending"} category={"movie"} day={"day"} title={"Trending Movies"} />
          <TrendingNow type={"tv"} category={"top_rated"} title={"Top Rated Tv Series"} />
          <TrendingNow type={"tv"} category={"popular"} title={"Popular Tv Series"} />
        </div>
        <LandFooter />
      </div>
    </>
  );
};

export default HomeCompo;
