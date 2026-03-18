import React, { useEffect,useState } from "react";
import "./TitleCards.css";
import cards_data from "../../assets/cards/Cards_data";
import { TMDB_IMAGES_ASSET_URL } from "../../constants";
import { Link } from "react-router-dom";

const TitleCards = ({type, title, category}) => {
  const [apiData, setApiData] = useState([])


  const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMTQxYTlkNmRjN2U1ZGU2NjgyMGU3ZmQzZmZhY2Q5ZCIsIm5iZiI6MTc3MzQ1MDI3NS4xNTY5OTk4LCJzdWIiOiI2OWI0YjQyMzgwODA0MTI4ZmQwOGUwMGEiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.IPRg2WKeiBc_IYmjYHKKW_bt4vuHvYdH_UgPZ8E8hmk'
  }
};


useEffect(()=>{
    fetch(`https://api.themoviedb.org/3/${type?type: "movie"}/${category?category : 'now_playing'}`, options)
      .then(res => res.json())
      .then(res => setApiData(res.results))
      .catch(err => console.error(err));
  },[])

  return (
    <div className="title-cards">
      <h2>{title ? title : "Popular on Netflix"}</h2>
      <div className="card-list">
        {apiData.map((card) => {
          return (    
            <Link to={`/player/${type?type:"movie"}/${card.id}`} className="card" key={card.id}>
              {
                <img src={`${TMDB_IMAGES_ASSET_URL}${card.poster_path}`} alt="" />
              }
            </Link>
          );
        })}
      </div>
    </div>
  );
};


export default TitleCards;
