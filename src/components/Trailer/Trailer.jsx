import React, { useEffect, useState } from "react";
import { Card } from "../ui/card";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import back_arrow_icon from "../../assets/back_arrow_icon.png"; // Make sure path is correct

const Trailer = () => {
  const { type, id } = useParams();
  const navigate = useNavigate();

  const [apiData, setApiData] = useState(null);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/${type}/${id}/videos?api_key=${import.meta.env.VITE_TMDB_KEY}`)
      .then((res) => res.json())
      .then((res) => {
        const trailer = res.results.find((vid) => vid.type === "Trailer" && vid.site === "YouTube");
        if (trailer) {
          setApiData(trailer);
        } else {
          console.log("No trailer found");
        }
      })
      .catch((err) => toast.error(err));
  }, [id, type]);

  if (!apiData) {
    return (
      <div className="px-35 pt-6">
        <p className="text-sm text-white">Trailer Not Available</p>
    </div>
    )
  }

 return (
  <div className="px-4 sm:px-6 md:px-16 lg:px-32 pt-6 sm:pt-10">
    
    {/* Title */}
    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-white">
      Trailer
    </h2>

    <Card className="p-4 sm:p-6 bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl shadow-lg">
      
      <div className="flex flex-col items-center gap-4">
        
        {apiData.key && (
          <div className="w-full aspect-video">
            <iframe
              src={`https://www.youtube.com/embed/${apiData.key}`}
              title={apiData.name}
              frameBorder="0"
              allowFullScreen
              className="w-full h-full rounded-xl"
            ></iframe>
          </div>
        )}

      </div>

    </Card>
  </div>
);
};

export default Trailer;