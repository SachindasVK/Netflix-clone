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
    <div className="px-35 pt-10">
  <Card className="p-6 bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl shadow-lg">
    
    <h1 className="text-2xl font-bold mb-4 text-white">
      {data?.original_title ? data?.original_title : data?.title}
    </h1>

    <div className="flex text-white">
      
      <div className="w-1/2 pr-4">
        <p className="mb-2"> Release : {data?.release_date ? data.release_date.slice(0, 4) : "N/A"}</p>
        <p className="mb-2">Overview: {data?.overview}</p>
        
      </div>

      <div className="w-px bg-white/30"></div>

      <div className="w-1/2 pl-4">
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
