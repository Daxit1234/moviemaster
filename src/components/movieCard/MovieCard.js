import React from 'react'
import Img from "../lazyLoading/Img";
import "./MovieCard.css"
import CircleRating from "../circleRating/CircleRating";
import dayjs from "dayjs";
import Genres from '../genres/Genres';

function MovieCard({poster,rating,title,date,genres}) {
  return (
     <div className='card-box'>
        <Img className="cardimg" src={poster} />
      <CircleRating rating={rating} />
     
      <div className='mt-2 movie-name-card'>
        {title}
      </div>
      <p className='release-date-card mt-2'>{dayjs(date).format("MMM D,YYYY")}</p>
      <div className='genred-box'>
      <Genres genresid={genres}/>
      </div>
     </div>
  )
}

export default MovieCard
