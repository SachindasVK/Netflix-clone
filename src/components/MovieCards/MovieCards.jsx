import React, { useEffect, useState } from "react";
import MoviesList from "../Movie/MovieList";

const MovieCards = ({ type, title, category }) => {
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/${type ? type : "tv"}/${
        category ? category : "top_rated"
      }?api_key=${import.meta.env.VITE_TMDB_KEY}`
    )
      .then((res) => res.json())
      .then((res) => setApiData(res))
      .catch((err) => console.error(err));
  }, [type, category]);

  if (!apiData?.results?.length) return null;

  return (
    <>
      <div className="pt-10 text-2xl sm:text-3xl md:text-4xl font-bold px-4 sm:px-6 md:px-30 lg:px-38 text-white">
        {title}
      </div>
      <MoviesList type={type} movie={apiData.results} />
    </>
  );
};

export default MovieCards;