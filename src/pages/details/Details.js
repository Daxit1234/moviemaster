import React from 'react'
import useFetch from '../../hook/useFetch'
import { useParams } from 'react-router-dom'
// import "./Details.scss"
import DetailsBanner from './detailBanner/DetailsBanner'
import Cast from './cast/Cast'
import VideoSection from './videoSection/VideoSection'
// import Similar from './similar/Similar'
// import Recommandation from './recommandation/Recommendations'

let Details=()=> {
  const {id}=useParams()
  const {data,loading}=useFetch(`/movie/${id}/videos`);
  const {data:credits,loading:creditsLoading}=useFetch(`/movie/${id}/credits`)
  return (
    <div>
      <DetailsBanner video={data?.results?.[0]}  crew={credits?.crew}/>
      <Cast data={credits?.cast} loading={creditsLoading} />
      <VideoSection data={data} loading={loading} />
    </div>
  )
}

export default Details

