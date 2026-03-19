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
    return <div>Loading trailer...</div>;
  }

  return (
    <div className="px-35 pt-10">
        <h2 className="text-4xl pt-10 font-bold mb-4 text-white">Trailer</h2>
      <Card className="p-6 bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl shadow-lg">

        <div className="flex flex-col items-center gap-4">
          {apiData.key && (
            <iframe
              width="100%"
              height="450"
              src={`https://www.youtube.com/embed/${apiData.key}`}
              title={apiData.name}
              frameBorder="0"
              allowFullScreen
              className="rounded-xl"
            ></iframe>
          )}
        </div>
      </Card>
    </div>
  );
};

export default Trailer;