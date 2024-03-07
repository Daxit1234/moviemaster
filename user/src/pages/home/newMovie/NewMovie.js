import React from 'react'
import useFetch from '../../../hook/useFetch';
import Carousel from '../../../components/carousel/Carousel';
import "./NewMovie.css"
import moviedata from "../Moviedata.json"

function NewMovie() {
 const {data,loading}=useFetch(`movie/now_playing?page=1`)
  return (
    <div className='popular-main'>
        <h3 className='movie-title'>Now Playing </h3>
        <Carousel data={data?.results || moviedata?.results} loading={loading}/> 
    </div>
  )
}

export default NewMovie
