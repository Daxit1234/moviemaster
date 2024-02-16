import React from 'react'
import useFetch from '../../../hook/useFetch';
import Carousel from '../../../components/carousel/Carousel';
import "./Popular.css"

function Popular() {
  
 const {data,loading}=useFetch(`/movie/now_playing`)
  return (
    <div className='popular-main'>
        <h3 className='movie-title'> Popular Movies</h3>
        <Carousel data={data?.results} loading={loading}/> 
    </div>
  )
}

export default Popular
