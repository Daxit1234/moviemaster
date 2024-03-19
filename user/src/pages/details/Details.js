import React, { useContext, useEffect, useState } from 'react';
import useFetch from '../../hook/useFetch';
import { useParams } from 'react-router-dom';
import DetailsBanner from './detailBanner/DetailsBanner';
import Cast from './cast/Cast';
import VideoSection from './videoSection/VideoSection';
import MovieContext from '../../context/Moviecontext';
import dummyVideo from "./Video.json";
import dummyCredits from "./Cast.json";

const Details = () => {
  const { id } = useParams();
  // const { data, loading } = useFetch(`/movie/${id}/videos`);
  const { data: credits, loading: creditsLoading } = useFetch(`/movie/${id}/credits`);

  const [loading,setLoading]=useState(true)
  useEffect(()=>{
    setTimeout(() => {
      setLoading(false)
    }, 2000);
  },[loading])
  return (
    <div>
      {/* <DetailsBanner
        video={data ? (data.results ? data.results[0] : dummyVideo.results[0]) : dummyVideo.results[0]}
        crew={credits?.crew || dummyCredits?.crew }
      />
      <Cast data={credits?.cast || dummyCredits?.cast} loading={creditsLoading} /> */}
      {/* <VideoSection data={data ? dummyVideo : data} loading={loading} />  //remove collon in offline */}
      <DetailsBanner
        video={dummyVideo.results[0]}
      //  crew={credits?.crew || dummyCredits?.crew }
       crew={ dummyCredits?.crew }
      />
      <Cast data={ dummyCredits?.cast} loading={loading} />
      {/* <Cast data={credits?.cast || dummyCredits?.cast} loading={loading} /> */}
      <VideoSection data={dummyVideo } loading={loading} />  //remove collon in offline
    </div>
  );
};

export default Details;
