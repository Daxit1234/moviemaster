import React from 'react'
import useFetch from '../../../hook/useFetch';
import Carousel from '../../../components/carousel/Carousel';
import "./NewMovie.css"

function NewMovie() {
 const {data,loading}=useFetch(`movie/upcoming`)
  return (
    <div className='popular-main'>
        <h3 className='movie-title'> Upcoming Movies</h3>
        <Carousel data={data?.results} loading={loading}/> 
    </div>
  )
}

export default NewMovie
