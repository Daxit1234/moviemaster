import React, { useEffect, useState } from 'react'
import useFetch from '../../../hook/useFetch';
import Carousel from '../../../components/carousel/Carousel';
import "./NewMovie.css"
import moviedata from "../Moviedata.json"

function NewMovie() {
//  const {data,loading}=useFetch(`movie/now_playing?page=1`)

  const [loading,setLoading]=useState(true)
  useEffect(()=>{
    setTimeout(() => {
      setLoading(false)
    }, 2000);
  },[loading])

  return (
    <div className='popular-main'>
        <h3 className='movie-title'>Now Playing </h3>
        {/* <Carousel data={data?.results || moviedata?.results} loading={loading}/>  */}
        <Carousel data={moviedata?.results} loading={loading}/> 
    </div>
  )
}

export default NewMovie
