import { useEffect, useState } from "react";
import { Card } from "../ui/card";

const TitleDetails = ({ data }) => {
  const [language, setLanguage] = useState("");
  const languageMap = {
    en: "English",
    hi: "Hindi",
    ml: "Malayalam",
    ta: "Tamil",
    te: "Telugu",
    kn: "Kannada",
    fr: "French",
    es: "Spanish",
    de: "German",
    ja: "Japanese",
    ko: "Korean",
    zh: "Chinese",
    it: "Italian",
    ru: "Russian",
    ar: "Arabic",
    pt: "Portuguese",
  };
  useEffect(() => {
    if (data?.original_language) {
      const lang = languageMap[data.original_language] || "Unknown";
      setLanguage(lang);
    }
  }, [data]);
 return (
  <div className="px-4 sm:px-6 md:px-16 lg:px-32 pt-22 sm:pt-20">
    <Card className="p-4 sm:p-6 bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl shadow-lg">
      
      {/* Title */}
      <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 text-white">
        {data?.title ? data?.title : data?.original_title}
      </h1>

      {/* Content */}
      <div className="flex flex-col md:flex-row text-white gap-4">
        
        {/* LEFT */}
        <div className="md:w-1/2">
          <p className="mb-2 text-sm sm:text-base">
            Release: {data?.release_date ? data.release_date.slice(0, 4) : "N/A"}
          </p>

          <p className="text-sm sm:text-base leading-relaxed">
            Overview: {data?.overview}
          </p>
        </div>

        {/* DIVIDER */}
        <div className="hidden md:block w-px bg-white/30"></div>

        {/* RIGHT */}
        <div className="md:w-1/2 space-y-1 text-sm sm:text-base">
          <p>Lang: {language}</p>
          <p>Rating: {data?.vote_average}</p>
          <p>Popularity: {data?.popularity}</p>
          <p>Votes: {data?.vote_count}</p>
        </div>

      </div>

    </Card>
  </div>
);
};

export default TitleDetails;
