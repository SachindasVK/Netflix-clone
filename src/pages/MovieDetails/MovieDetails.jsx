import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import LandFooter from "@/components/LandFooter/LandFooter";

const MovieCards = React.lazy(
  () => import("../../components/MovieCards/MovieCards"),
);
const TitleDetails = React.lazy(
  () => import("../../components/MovieDetails/TitleDetails"),
);
const Hero = React.lazy(() => import("../../components/Hero/Hero"));
const Trailer = React.lazy(() => import("../../components/Trailer/Trailer"));

const MovieDetails = () => {
  const [apiData, setApiData] = useState("");
  return (
    <>
      <Navbar />
      <div className="home">
        <Hero sendData={setApiData} />
        <TitleDetails data={apiData} />
        <Trailer />
        <MovieCards
          type={"movie"}
          category={"popular"}
          title={"You Might Also Like"}
        />
        <LandFooter />
      </div>
    </>
  );
};

export default MovieDetails;
