import React from 'react'
import Img from "../lazyLoading/Img";
import "./MovieCard.css"
import CircleRating from "../circleRating/CircleRating";
import dayjs from "dayjs";

function MovieCard({poster,rating,title,date}) {

  return (
     <div className='card-box'>
        <Img className="cardimg" src={poster} />
      <CircleRating rating={rating} />
      <div className='mt-2 movie-name-card'>
        {title}
      </div>
      <p className='release-date-card mt-2'>{dayjs(date).format("MMM D,YYYY")}</p>
     </div>
  )
}

export default MovieCard
