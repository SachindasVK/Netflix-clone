import React, { useEffect, useState } from "react";
import MoviesList from "../Movie/MovieList";
import { Link } from "react-router-dom";

const MovieCards = ({ type, title, category }) => {
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/${type ? type : "tv"}/${category ? category : "top_rated"}?api_key=${import.meta.env.VITE_TMDB_KEY}`
    )
      .then((res) => res.json())
      .then((res) => {
        setApiData(res);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <div>
        <div>
          {apiData?.results?.length > 0 ? (
            <>
              <div className="pt-10 text-3xl font-bold pl-36 bg-black text-white">
                <div>{title ? title : ""}</div>
              </div>
              <MoviesList type={type} movie={apiData.results} />
            </>
          ) : (
            <></>
          )}
        </div>
      </div>
    </>
  );
};

export default MovieCards;
