import Navbar from "../../components/Navbar/Navbar";
import MovieCards from "@/components/MovieCards/MovieCards";
import LandFooter from "@/components/LandFooter/LandFooter";
import Hero from "@/components/Hero/Hero";

const HomeCompo = () => {
  return (
    <>
      <Navbar />
      <div className="home">
        <Hero />
        <div>
          <MovieCards
            type={"movie"}
            category={"now_playing"}
            title={"Your Next Watch"}
          />
          <MovieCards
            type={"movie"}
            category={"popular"}
            title={"Popular Movies"}
          />
          <MovieCards
            type={"trending"}
            category={"all"}
            day={"day"}
            title={"Trending Now"}
          />
          <MovieCards
            type={"movie"}
            category={"top_rated"}
            title={"Top Rated"}
          />
          <MovieCards
            type={"movie"}
            category={"upcoming"}
            title={"Upcoming"}
          />
          <MovieCards
            type={"tv"}
            category={"top_rated"}
            title={"Top Rated Tv Series"}
          />
          <MovieCards
            type={"tv"}
            category={"popular"}
            title={"Popular Tv Series"}
          />
        </div>
        <LandFooter />
      </div>
    </>
  );
};

export default HomeCompo;
