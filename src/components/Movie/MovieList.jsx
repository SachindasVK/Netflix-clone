import React from "react";
import MovieCard from "./MovieCard";
import { useLocation } from "react-router-dom";


const MoviesList = ({type, movie }) => {
  const location = useLocation()
  const isHome = location.pathname === '/in'
  
  return (
    <div className={`relative bg-black ${isHome ? "px-33" : "px-34"}`}>
      <ul className={`flex overflow-x-scroll overflow-y-visible ${isHome ? "space-x-5 py-7 rounded-md md:px-4": "space-x-11 py-7 rounded-md md:px-8"} scrollbar-hide relative hide-scrollbar`}>
        {movie.map((movie,index) => {
          return (
          <li key={movie.id}>
            <MovieCard type={type}  movie={{...movie, num:index + 1}} />
          </li>
          )
        })}
      </ul>
    </div>
  );
};

export default MoviesList;
