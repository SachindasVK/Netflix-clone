import { TMDB_IMAGES_ASSET_URL } from "../../constants";
import { Card } from "../ui/card";

const MovieCard = ({ movie }) => {
  return (
    <Card className="group relative cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl p-0 border-0 w-[11rem] h-[15.8rem] overflow-visible isolate bg-transparent">
      <img
        src={
          movie.poster_path
            ? TMDB_IMAGES_ASSET_URL + movie.poster_path
            : "/placeholder.svg"
        }
        alt={movie.title}
        className="w-full h-full object-cover transform duration-300 group-hover:scale-110 z-10 rounded-md"
      />

      <div className="text-9xl font-bold absolute -left-6 top-30 z-20 select-none bottom-0 text-stroke-white">
        {movie.num}
      </div>
    </Card>
  );
};

export default MovieCard;
