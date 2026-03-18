import React, { useEffect, useState } from "react";
import MoviesList from "../Movie/MovieList";
import { Link } from "react-router-dom";

const TrendingNow = ({ type, title, category, day }) => {
  const [apiData, setApiData] = useState([]);
  const [loading, setLoading] = useState(false)

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMTQxYTlkNmRjN2U1ZGU2NjgyMGU3ZmQzZmZhY2Q5ZCIsIm5iZiI6MTc3MzQ1MDI3NS4xNTY5OTk4LCJzdWIiOiI2OWI0YjQyMzgwODA0MTI4ZmQwOGUwMGEiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.IPRg2WKeiBc_IYmjYHKKW_bt4vuHvYdH_UgPZ8E8hmk",
    },
  };

  useEffect(() => {
    setLoading(true)
    fetch(
      `https://api.themoviedb.org/3/${type ? type : "tv"}/${category ? category : "top_rated"}${day ? "/" + day : ""}`,
      options,
    )
      .then((res) => res.json())
      .then((res) => {
        setApiData(res);
         setLoading(false);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
    {loading ? <div className="login-spinner">
                <img
                  src="https://media.wired.com/photos/592744d3f3e2356fd800bf00/3:2/w_2560%2Cc_limit/Netflix_LoadTime.gif"
                  alt=""
                />
              </div>:
      <div>
        <div>
          {apiData?.results?.length > 0 ? (
            <>
              <div className="pt-5 text-3xl font-bold pl-36 bg-black text-white">
                <div>{title ? title : ""}</div>
              </div>
              <MoviesList type={type} movie={apiData.results} />
            </>
          ) : (
            <div className="bg-black text-white flex flex-col items-center justify-center py-10">
              
            </div>
          )}
        </div>
      </div>
        }
    </>
  );
};

export default TrendingNow;
