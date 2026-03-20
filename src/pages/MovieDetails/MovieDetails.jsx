import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import LandFooter from "@/components/LandFooter/LandFooter";
import TitleDetails from "@/components/MovieDetails/TitleDetails";
import Hero from "@/components/Hero/Hero";
import TrendingNow from "@/components/MovieCards/MovieCards";
import Trailer from "@/components/Trailer/Trailer";

const MovieDetails = () => {
  const [apiData, setApiData] = useState("");
  return (
    <>
      <Navbar />
      <div className="home">
        <Hero sendData={setApiData} />
        <TitleDetails data={apiData} />
        <Trailer  /> 
        <TrendingNow
          type={"movie"}
          category={"upcoming"}
          title={"Popular Tv Series"}
        />
        <LandFooter />
      </div>
    </>
  );
};

export default MovieDetails;
