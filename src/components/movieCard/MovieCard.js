import React from 'react'
import Img from "../lazyLoading/Img";
import "./MovieCard.css"

function MovieCard({poster}) {
  return (
    // <div className='card-box'>
      <Img className="cardimg" src={poster} />
    // </div>
  )
}

export default MovieCard
