import React from "react";
import MovieCard from "./MovieCard";


const MoviesList = ({ movie }) => {
  return (
    <div className="relative bg-black px-35">
      <ul className="flex overflow-x-scroll overflow-y-visible space-x-11 px-4 py-7 rounded-md md:px-4 scrollbar-hide relative hide-scrollbar">
        {movie.map((movie) => {
          return (
          <li key={movie.id}>
            <MovieCard movie={movie} />
          </li>
          )
        })}
      </ul>
    </div>
  );
};

export default MoviesList;
