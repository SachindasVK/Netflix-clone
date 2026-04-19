import Navbar from "../../components/Navbar/Navbar";
import LandFooter from "@/components/LandFooter/LandFooter";
import React from "react";
import Hero from "../../components/Hero/Hero";
import MovieCards from "@/components/MovieCards/MovieCards";
const HomeCompo = () => {
  return (
    <>
      <Navbar />
      <div className="home">
        <Hero />
        <div>
          <MovieCards
            type={"movie"}
            category={"now_playing"}
            title={"Your Next Watch"}
          />
          <MovieCards type={"movie"} category={"upcoming"} title={"Upcoming"} />

        
          <MovieCards
            type={"tv"}
            category={"top_rated"}
            title={"Top Rated Tv Series"}
          />
          <MovieCards
            type={"tv"}
            category={"popular"}
            title={"Popular Tv Series"}
          />
        </div>
        <LandFooter />
      </div>
    </>
  );
};

export default HomeCompo;
