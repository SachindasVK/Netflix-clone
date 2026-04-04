import LandFooter from "@/components/LandFooter/LandFooter";
import Navbar from "@/components/Navbar/Navbar";
import React, { useContext } from "react";
import { WishlistContext } from "@/components/context/WishlistContext";
import { useNavigate } from "react-router-dom";
import "./Mylist.css";
import { toast } from "react-toastify";
import play from "../../assets/play.svg";
import info_icon from "../../assets/info_icon.png";
import remove from "../../assets/remove.svg";
import  Netflix from '../../assets/Netflix.svg'

const Mylist = () => {
  const { wishlist, removeFromWishlist } = useContext(WishlistContext);
  const navigate = useNavigate();

  return (
    <div className="mylist-page">
      <Navbar />
      <div className="mylist-container">
        <h1 className="mylist-title">My WatchList</h1>
        {wishlist.length === 0 ? (
          <div className="empty-text">No movies added yet</div>
        ) : (
          <div className="mylist-grid">
            {wishlist.map((movie) => (
              <div className="card" key={movie.id}>
                <div className="absolute top-2 left-1 z-30 transform transition duration-300 group-hover:scale-none group-hover:-translate-y-1">
                        <img src={Netflix} alt="Netflix" className="w-8 h-8" />
                      </div>
                <img className="poster"
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                />

                <div className="overlay">
                  <button
                    onClick={() => navigate(`/player/movie/${movie.id}`)}
                    className="play-btn"
                  >
                    <img src={play} alt="" className="w-full cursor-pointer" />
                  </button>

                  <div className="bottom-buttons">
                    <button
                      onClick={() =>{removeFromWishlist(movie.id)
                        toast.info("Removed from Watchlist")
                      }}
                      className="remove-btn text-xs flex items-center gap-1 rounded-xs cursor-pointer"
                    >
                      <img src={remove} alt="" className="w-4 h-4" />
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <LandFooter />
    </div>
  );
};

export default Mylist;
