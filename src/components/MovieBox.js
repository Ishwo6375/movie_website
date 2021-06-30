import React from "react";

const MovieBox = ({ list, title, releaseDate }) => {
  return (
    <div className="movie-box">
      <div className="overlay">
        <img 
          src={`https://image.tmdb.org/t/p/w200/${list && list.poster_path}`}/>
        <div className="centered">
        <h3 className="heading-1">{title}</h3>
        <h4 className="heading-1"> {releaseDate}</h4>

        

        </div>
      </div>
    </div>
  );
};

export default MovieBox;
