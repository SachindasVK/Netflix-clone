import React from "react";
import MovieCard from "./MovieCard";
import { useLocation } from "react-router-dom";

const MoviesList = ({ type, movie }) => {
  const location = useLocation();
  const isHome = location.pathname === "/in";
  const isDetails = location.pathname.includes("/details");

  return (
    <div
      className={`relative bg-black ${
        !isHome || !isDetails
          ? "px-4 sm:px-4 md:px-20 lg:px-30"
          : "px-2 sm:px-5 md:px-34"
      }`}
    >
      <ul
        className={`flex pl-8 overflow-x-auto overflow-y-visible py-6 md:py-7 scrollbar-hide hide-scrollbar ${
          !isHome || !isDetails
            ? "space-x-4.5 sm:space-x-7 md:space-x-5"
            : "space-x-6 sm:space-x-7 md:space-x-12"
        }`}
      >
        {movie.map((movieItem, index) => (
          <li key={movieItem.id} className="flex-shrink-0">
            <MovieCard
              type={type}
              movie={{ ...movieItem, num: index + 1 }}
              isHome={isHome}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MoviesList;
