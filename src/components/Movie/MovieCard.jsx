import { TMDB_IMAGES_ASSET_URL } from "../../constants";
import { Card } from "../ui/card";
import Netflix from "../../assets/Netflix.svg";
import { Link, useLocation } from "react-router-dom";

const MovieCard = ({ type, movie }) => {
  const location = useLocation();
  const isHome = location.pathname === "/in";
  const isDetails = location.pathname.includes('/details')
  return (
    <Card className={`group relative cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl p-0 border-0 ${isHome ?"w-[11.5rem] h-[16rem]" :"w-[10.5rem] h-[16rem]" } overflow-visible isolate bg-black`}>
      <Link to={`/details/${type}/${movie.id}`}>
        <img
          src={
            movie.poster_path
              ? TMDB_IMAGES_ASSET_URL + movie.poster_path
              : "/placeholder.svg"
          }
          alt={movie.title}
          className="w-full h-full object-cover rounded-md transform transition duration-200 group-hover:scale-3d"
        />
      </Link>

      <div className="absolute top-2 left-1 z-30 transform transition duration-300 group-hover:scale-none group-hover:-translate-y-1">
        <img src={Netflix} alt="Netflix" className="w-8 h-8" />
      </div>

      {!isHome && !isDetails && (
        <div className="text-9xl font-bold absolute -left-6 top-30 z-20 select-none text-stroke-white transform transition duration-300 group-hover:scale-none group-hover:-translate-y-2">
          {movie.num}
        </div>
      )}
    </Card>
  );
};

export default MovieCard;
